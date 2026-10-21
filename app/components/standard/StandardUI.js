"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import profile from "../../data/profile";
import technicalStack from "../../data/techStack";
import projects from "../../data/projects";
import currentWork from "../../data/currentWork";
import volunteerWork from "../../data/volunteerWork";
import iconMap from "../shared/icons";
import StandardPanel from "./StandardPanel";
import StandardNav from "./StandardNav";
import useGitHubStats from "../../hooks/useGitHubStats";
import { GoRepo, GoGitCommit, GoGitPullRequest, GoCode, GoPeople } from "react-icons/go";
import { FaMapMarkerAlt, FaHome, FaUser, FaLayerGroup, FaGithub, FaBriefcase, FaHandsHelping, FaEnvelope } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import contact from "@/app/data/contact";

const CAROUSEL_INTERVAL_MS = 5000;
const STAGGER_MS = 1000;

const sections = [
  { id: "intro", label: "Intro", icon: FaHome },
  { id: "history", label: "History", icon: FaUser },
  { id: "techstack", label: "Tech Stack", icon: FaLayerGroup },
  { id: "github", label: "GitHub & Projects", icon: FaGithub },
  { id: "currentwork", label: "Current Work", icon: FaBriefcase },
  { id: "volunteerwork", label: "Volunteer Work", icon: FaHandsHelping },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

const introButtons = [
  { label: "Resume", href: profile.resumeSrc, newTab: true },
  { label: "Schedule a Website Consultation", href: "https://cal.com/lndnbrr/website-consultation", newTab: true},
  { label: "Contact", sectionId: "contact" },
];

function IntroContent({ goToSection }) {
  return (
    <div className="flex flex-col sm:flex-row items-center lg:grid lg:grid-cols-[2fr_3fr] gap-3 lg:gap-x-2 lg:gap-y-0 lg:min-h-dvh lg:-my-24 text-center mt-5">
      <div className="flex flex-col lg:contents">
        <div className="lg:row-span-2 lg:self-end lg:-ml-8">
          <Image src={profile.headshotSrc} alt={profile.headshotAlt} width={220} height={220} className="rounded mx-auto bg-foreground lg:bg-transparent lg:w-full lg:max-w-[500px] lg:h-auto lg:mx-0"/>
        </div>
        <div className="lg:col-start-2 lg:self-end lg:text-left">
          <h1 className="text-3xl font-bold lg:text-[clamp(4rem,8vw,7.5rem)] lg:leading-none">{profile.name}</h1>
          <h2 className="text-xl lg:text-[40px] lg:leading-none">{profile.title}</h2>
          <h3 className="text-base italic max-w-[300px] lg:text-[18px] lg:max-w-2xl mx-auto lg:mx-0">{profile.missionStatement}</h3>
        </div>
      </div>
      <div className="flex w-full max-w-xs flex-col gap-3 lg:max-w-2xl lg:grid lg:grid-cols-2 lg:col-start-2 lg:self-start lg:gap-4 lg:mt-6">
        {introButtons.map((btn) => btn.sectionId ? (
            <button key={btn.label} type="button" onClick={() => goToSection(btn.sectionId)} className="rounded-lg border-2 border-foreground px-4 py-3 text-center item-center font-semibold transition-colors hover:bg-foreground hover:text-background lg:col-span-2 lg:py-6 lg:text-4xl">
              {btn.label}
            </button>
          ) : (
            <a
              key={btn.label}
              href={btn.href}
              target={btn.newTab ? "_blank" : undefined}
              rel={btn.newTab ? "noopener noreferrer" : undefined}
              className="rounded-lg border-2 border-foreground px-4 py-3 text-center item-center font-semibold transition-colors hover:bg-foreground hover:text-background lg:col-span-2 lg:py-6 lg:text-4xl"
            >
              {btn.label}
            </a>
          )
        )}
      </div>
    </div>
  );
}

function MapPath() {
  return (
    <li aria-hidden="true" className="hidden h-24 lg:block">
      <div className="mx-auto h-full w-0 border-l-2 border-dashed border-foreground"/>
    </li>
  );
}

function MapStop({ year, text, isLast, alignRight }) {
  return (
    <li
      className={`relative lg:w-4/5 lg:rounded-lg lg:border-2 lg:border-foreground lg:p-5 ${alignRight ? "lg:self-end" : "lg:self-start"}`}
    >
      <span className="mb-2 inline-flex h-8 items-center gap-1 whitespace-nowrap rounded-full bg-foreground px-3 font-bold text-background lg:absolute lg:-left-4 lg:-top-4 lg:mb-0">
        {isLast && <FaMapMarkerAlt aria-label="Destination"/>}
        {year}
      </span>
      <p className="text-xl">{text}</p>
    </li>
  );
}

function AboutContent() {
  const stops = profile.bioParagraphs;
  return (
    <div className="flex flex-col gap-4 text-sm lg:max-w-5xl lg:mx-auto">
      <h2 className="text-center text-4xl font-bold">Why Software Development?</h2>
      <ol className="flex flex-col gap-4 lg:gap-0">
        {stops.map((stop, i) => (
            <Fragment key={i}>
              <MapStop year={stop.year} text={stop.text} isLast={i === stops.length - 1} alignRight={i % 2 === 1} />
              {i < stops.length - 1 && <MapPath />}
            </Fragment>
          )
        )}
      </ol>
      <p className="text-xl text-center pt-4">Check out more about who I am throughout the webpage!</p>
    </div>
  );
}

function SkillIcon({ skill, size }) {
  const Icon = iconMap[skill.icon];
  return (
    <div className="flex flex-col items-center gap-1">
      <Icon color={skill.color ?? undefined} size={size} />
      <span className="text-xs">{skill.name}</span>
    </div>
  );
}

function SkillSlide({ skill, className }) {
  const Icon = iconMap[skill.icon];
  return (
    <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 pt-10 pb-6 ${className}`}>
      <Icon color={skill.color ?? undefined} size="65%" />
      <span className="text-lg">{skill.name}</span>
    </div>
  );
}

function SkillCarousel({ label, skills, startDelayMs }) {
  const [slide, setSlide] = useState({ current: 0, previous: null });

  useEffect(() => {
    if (skills.length < 2) return;
    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setSlide((s) => ({ previous: s.current, current: (s.current + 1) % skills.length }));
      }, CAROUSEL_INTERVAL_MS);
    }, startDelayMs);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [skills.length, startDelayMs]);

  return (
    <div className="relative aspect-square overflow-hidden border-2 border-foreground rounded-lg">
      <h3 className="absolute top-3 inset-x-0 z-10 text-center text-xl font-semibold underline">{label}</h3>
      {slide.previous !== null && (
        <SkillSlide key={`old-${slide.previous}`} skill={skills[slide.previous]} 
        className="animate-slide-out-right motion-reduce:hidden"/>
      )}
      <SkillSlide key={`new-${slide.current}`} skill={skills[slide.current]} 
      className={slide.previous !== null ? "animate-slide-in-left motion-reduce:animate-none" : ""}/>
    </div>
  );
}

function TechStackContent() {
  return (
    <div className="flex flex-col gap-6 justify-center">
      <h2 className="text-center text-4xl font-bold">Tech Stack</h2>
      <div className="flex flex-col gap-6 lg:hidden">
        {technicalStack.map((lab) => (
          <div key={lab.label}>
            <h3 className="font-semibold text-center">{lab.label}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {lab.skills.map((skill) => (
                <SkillIcon key={skill.name} skill={skill} size={60} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="hidden lg:grid grid-cols-2 gap-6 w-full max-w-xl mx-auto">
        {technicalStack.map((lab, i) => (
          <SkillCarousel key={lab.label} label={lab.label} skills={lab.skills} startDelayMs={i * STAGGER_MS} />
        ))}
      </div>
    </div>
  );
}

function GitHubStatsContent() {
  const { stats, loading, error } = useGitHubStats();

  const statItems = stats ? [
        { label: "Repositories", value: stats.repos, Icon: GoRepo },
        { label: "Commits", value: stats.commits, Icon: GoGitCommit },
        { label: "Pull Requests", value: stats.pullRequests, Icon: GoGitPullRequest },
        { label: "Followers", value: stats.followers, Icon: GoPeople },
        { label: "Top Languages", value: stats.topLanguages.join(", ") || "—", Icon: GoCode },
      ]
    : [];

  return (
    <div className="flex flex-col items-center gap-4">
      <Link href={`https://github.com/${profile.githubUsername}`} target="_blank" rel="noopener noreferrer">
        <SiGithub className="self-center hover:text-gray-400 transition-colors" size={100}/>
      </Link>
      <h3 className="text-lg font-semibold">GitHub Quick Stats</h3>
      {loading && <p>Loading…</p>}
      {error && <p>GitHub stats are unavailable right now.</p>}
      {stats && (
        <div className="grid w-full grid-cols-2 gap-6 border border-white p-2 text-center sm:grid-cols-3 md:grid-cols-2 lg:flex lg:justify-between">
          {statItems.map(({ label, value, Icon }) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-1 ${label === "Top Languages" ? "col-span-full lg:col-auto" : ""}`}
            >
              <Icon size={20} />
              <p className="text-lg font-semibold">{value}</p>
              <p>{label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectsContent() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-center text-lg font-semibold">Projects</h3>
      <div className="flex justify-center">
        {projects.map((proj) => (
          <div key={proj.name} className="flex h-full flex-col items-center gap-2 leading-none">
            <Link href={proj.link} target="_blank">
              <Image src={proj.image} alt={proj.imageAlt} width={300} height={200} className="transition-transform rounded bg-foreground p-3"/>
            </Link>
            <div className="font-bold">{proj.name}</div>
            <Link href={proj.link} target="_blank" className="hover:text-gray-400 transition-colors">
              {proj.linkLabel}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function GitHubDisplayContent() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
      <GitHubStatsContent />
      <ProjectsContent />
    </div>
  );
}

function CurrentWorkContent() {
  return (
    <div className="flex flex-col gap-4 text-sm lg:text-xl lg:lg:max-w-5xl lg:mx-auto">
      <h2 className="text-center text-4xl font-bold">Current Work</h2>
      <div className="flex flex-col lg:flex-row">
        <Image src='/images/workphoto.jpg' alt='Mental Health Technician Logo' width={250} height={200} className="rounded lg:w-[300px] self-center"/>
        <div className="pl-4 self-center">
        {currentWork.summary.map((p) => (
          <p key={p} className="py-1">{p}</p>
        ))}
        </div>
      </div>
      <ul className="list-disc pl-5">
        {currentWork.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function VolunteerWorkContent() {
  return (
    <div className="flex flex-col gap-8 text-sm lg:max-w-3xl lg:mx-auto">
      <h2 className="text-center text-4xl font-bold">Volunteer Work</h2>
      {volunteerWork.map((org) => (
          <div key={org.orgName} className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">{org.orgName}</h3>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <div>
                {org.paragraphs.map((p)=> (
                <p key={p} className="py-1">{p}</p>
              ))}
              </div>
              
              <div className="flex flex-col gap-3 shrink-0 lg:w-1/3">
                {org.images.map((image) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto rounded"
                  />
                ))}
              </div>
            </div>
            {org.bullets.length > 0 && (
              <>
                <p>{org.bulletLob}</p>
                <ol className="list-decimal pl-5">
                  {org.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ol>
              </>
            )}
          </div>
        )
      )}
    </div>
  );
}

function ContactContent() {
  return (
    <div className="flex flex-col items-center gap-2 py-3 text-sm bg-foreground rounded-xl text-background md:mx-auto md:max-w-4xl">
      <h2 className="text-2xl font-bold lg:pb-8 lg:ml-2">Get In Touch</h2>
      <div className="flex flex-col lg:flex-row w-[50%] lg:justify-between lg:-ml-60 gap-3 lg:gap-30">
        {contact.contactMethods.map((c)=>(
          <div key={c.title} className="flex flex-row justify-center">
            <Link href={c.url} target={c.url.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              <div className="flex hover:text-gray-600 transition-colors hover:-translate-y-1/8 duration-500 ease-in-out justify-center">
                {c.img}
              </div>
              <p className="text-center">
                {c.title}
              </p>
            </Link>
          </div>
        ))}        
      </div>
      <h2 className="text-2xl font-bold pt-4 pb-4 lg:pb-8">Find Me Elsewhere</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
        {contact.followMe.map((c)=>(
          <div key={c.title} className="flex flex-row justify-center">
          <Link href={c.url} target="_blank" rel="noopener noreferrer">
            <div className="hover:text-gray-600 transition-colors flex hover:-translate-y-1/8 duration-300 ease-in-out justify-center pb-2">
              {c.img}
            </div>
            <p className="text-center">
                {c.title}
              </p>
          </Link>
        </div>
        ))}        
      </div>
    </div>
  );
}

const sectionContent = {
  intro: IntroContent,
  history: AboutContent,
  techstack: TechStackContent,
  github: GitHubDisplayContent,
  currentwork: CurrentWorkContent,
  volunteerwork: VolunteerWorkContent,
  contact: ContactContent,
};

export default function StandardUI() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index) => {
    setActiveIndex(Math.max(0, Math.min(sections.length - 1, index)));
  };

  const goToSection = (id) => goTo(sections.findIndex((s) => s.id === id));

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goTo(activeIndex + 1);
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goTo(activeIndex - 1);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {sections.map((section, index) => {
        const Content = sectionContent[section.id];
        const position = index === activeIndex ? "active" : index < activeIndex ? "before" : "after";
        return (
          <StandardPanel key={section.id} position={position}>
            <Content goToSection={goToSection} />
          </StandardPanel>
        );
      })}
      <StandardNav
        sections={sections}
        activeId={sections[activeIndex].id}
        onSelect={goToSection}
      />
    </div>
  );
}
