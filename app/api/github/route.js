import profile from "../../data/profile";

// Cache the response for 1 hour so GitHub's rate limit (60 req/hr unauthenticated) is never an issue
export const revalidate = 3600;

const TOP_LANGUAGE_COUNT = 3;

export async function GET() {
  const headers = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const base = `https://api.github.com/users/${profile.githubUsername}`;
  // Search endpoints: per_page=1 since we only need total_count (public repos only)
  const search = "https://api.github.com/search";
  const author = `author:${profile.githubUsername}`;
  const responses = await Promise.all([
    fetch(base, { headers, next: { revalidate } }),
    fetch(`${base}/repos?per_page=100&type=owner`, { headers, next: { revalidate } }),
    fetch(`${search}/commits?q=${author}&per_page=1`, { headers, next: { revalidate } }),
    fetch(`${search}/issues?q=${author}+type:pr&per_page=1`, { headers, next: { revalidate } }),
  ]);

  if (responses.some((res) => !res.ok)) {
    return Response.json({ error: "Failed to fetch GitHub data" }, { status: 502 });
  }

  const [user, repos, commitSearch, prSearch] = await Promise.all(responses.map((res) => res.json()));

  const languageCounts = {};
  for (const repo of repos) {
    if (repo.language) {
      languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
    }
  }
  const topLanguages = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, TOP_LANGUAGE_COUNT)
    .map(([language]) => language);

  return Response.json({
    repos: user.public_repos,
    followers: user.followers,
    commits: commitSearch.total_count,
    pullRequests: prSearch.total_count,
    topLanguages,
  });
}
