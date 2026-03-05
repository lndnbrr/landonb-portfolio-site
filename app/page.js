import Image from "next/image";
import NavBar from "./components/navbar";
import TechStack from "./components/techStack";
import GitHubStats from "./components/githubStats";
import Projects from "./components/projects";

export default function Home() {
  return (
    <>
    <NavBar/>
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
        
        {/* I would love a floating nav bar to show and stay on the top of the page even when we scroll down */}

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          {/* <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.js file.
          </h1> */}
          
          {/* I want this section to be the beginning */}
          <section id="why">
            <Image 
            src={"/images/headshot.png"}
            alt="Landon Borrego Headshot"
            width={400}
            height={400}
            />
            <h1>Landon Borrego</h1>
            <h2>Full-Stack Software Developer</h2>
            <h3>
              {/* Current Mission Statement about who I am  */}
              A man committed to growing as a developer. Learning to create tools and products that solve real problems for real people.
            </h3>
            {/* Insert top skills tags */}
          </section>
          
          {/* I want this to be a small about me section */}
          <section>
            <p>Hello and welcome to my page! I am Landon, a full-stack software developer who has recently launched my career in the field.</p>
            <p>As you can tell from the last sentence, being a developer hasnt always been the plan. In 2022, I graduated with a Bachelor of Science degree in Psychology from Michigan State University in hopes of pursuing a career as a therapist. My dream was simple at the time: to help people put their best foot forward and find joy in life through the power of therapeutic practices. And though that goal of that dream still resonates with me, the execution of it has pivoted. This is because I am also equally fascinated with the concept of consistent, concrete solutions to problems. So I asked myself, what is more consistent and concrete than psychology and what are the ways that I can continue to help people in the process? And that is what led me to the field of Software Development.</p> {/* next to this paragraph, put a picture of my MSU degree */}
            <p>From September 2024 to September 2025, I attended and graduated from Nashville Software School (NSS), a bootcamp based in Nashville, TN, USA. And it was here where I gained plenty of exposure to technical tools, frameworks, methodologies and philosophies, and most importantly, hands-on experience with it all. Being that NSS was where I had a majority of my exposure, it empowered me to use structured and functional coding in my workflow, communicate clearly and efficiently with colleagues, approach problems and challenges methodically, and continue my pursuit towards a better and further understanding of technical concepts.</p> {/* next to this paragraph, put a picture of my NSS degree */}
            <p>Currently, I am focused on strengthening my technical foundation, expanding my skills within the modern development ecosystem, building portfolio projects, and connecting with individuals and companies whose mission and values align with my own.</p>
            <p>Check out more about who I am throughout the webpage!</p>
          </section>
          
          {/* I want this to show off my tech stack */}
            <TechStack/>
            {/* So like a rotating thing showing off each tech skill */}

          {/* I also want this to show off my top 3 Projects */}
          {/* If there is a way to show off my metrics from Github on here as well that would be be tight. Do that in a long view over the 3 projects. And this will naturally link my github as well */}
          <GitHubStats/>
          <Projects/>

          {/* current professional work */}
          <section></section>

          {/* past volunteer work */}
          <section></section>

          {/* I want a contact section */}
          <section>
            {/* maybe a form that will send an email to me */}
            {/* a link for my calenderly */}
            {/* a link to my linkedIn */}
            {/* Are you employer? Here's my resume! make resume downloadable */}
          </section>
          
        </div>
      </main>
    </div>
  </>
  );
}
