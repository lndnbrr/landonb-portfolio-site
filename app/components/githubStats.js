export default function GitHubStats () {
  return (
    // <section style={{ width: '100%', border: '1px solid white', padding: '10px' }}></section>
    <section className="w-full flex flex-col" id="projects">
      <h2 className="text-center"> GitHub Quick Stats</h2>
      <div className="flex justify-around items-center border border-white">
        <div className="flex flex-col items-center">
          <p>LOGO</p>
          <p>Repositories</p>
        </div>
        <div className="flex flex-col items-center">
          <p>LOGO</p>
          <p>Forks</p>
        </div>
        <div className="flex flex-col items-center">
          <p>LOGO</p>
          <p>Top Languages</p>
        </div>
        <div className="flex flex-col items-center">
          <p>LOGO</p>
          <p>Followers</p>
        </div>
      </div>
    </section>
  )
}
