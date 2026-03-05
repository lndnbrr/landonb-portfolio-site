
import { SiHtml5, 
  SiCss3, 
  SiJavascript,
  SiPython, 
  SiNextdotjs, 
  SiReact, 
  SiDjango,
  SiBootstrap,
  SiTailwindcss,
  SiSqlite,
  SiPostgresql, 
  SiGit,
  SiGithub,
  SiFigma,
  SiFirebase,
  SiNetlify,
  SiDocker
} from "react-icons/si";

const technicalStack = [
  {
    label: "Languages",
    skills: [
      {icon: <SiHtml5 color="#E34F26"/>, name: "HTML5"},
      {icon: <SiCss3 color="#1572B6"/>, name: "CSS3"},
      {icon: <SiJavascript color="#F7DF1E"/>, name: "JavaScript"},
      {icon: <SiPython color="#3776AB"/>, name: "Python"}
    ]
  },
  {
    label: "Frameworks", 
    skills: [
      {icon: <SiNextdotjs/>, name: "Next.js"},
      {icon: <SiReact color=" #61DAFB"/>, name: "React"},
      {icon: <SiDjango color="#092E20"/>, name: "Django"},
      {icon: <SiBootstrap color="#7952B3"/>, name: "Bootstrap"},
      {icon: <SiTailwindcss color="#06B6D4"/>, name: "Tailwind CSS"}
    ]
  },
  {
    label: "Databases",
    skills: [
      {icon: <SiSqlite color="#003B57"/>, name: "SQLite"},
      {icon: <SiPostgresql color="#4169E1"/>, name: "PostgreSQL"}
    ]
  },
  {
    label: "Tools",
    skills: [
      {icon: <SiGit color="#F05032"/>, name: "Git"},
      {icon: <SiGithub/>, name: "GitHub"},
      {icon: <SiFigma color="#F24E1E"/>, name: "Figma"},
      {icon: <SiFirebase color="#FFCA28"/>, name: "Firebase"},
      {icon: <SiNetlify color="#00C7B7"/>, name: "Netlify"},
      {icon: <SiDocker color="#2496ED"/>, name: "Docker"}
    ]
  }
];

export default function TechStack() {
  return (
    <section id="techstack">
      <h2 className="text-xl">Tech Stack</h2>
      {technicalStack.map((lab)=> (
        <div key={lab.label}>
          <h3><b>{lab.label}</b></h3>
          <div>
            {lab.skills.map((skill) => (
              <div key={skill.name}>
                <span>{skill.icon}</span>
                <h4>{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
