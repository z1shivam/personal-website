import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaProjectDiagram } from "react-icons/fa";
import { FaAws, FaCode, FaCubesStacked, FaGitAlt, FaGithub, FaGolang, FaHtml5, FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

interface UserDetails {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

export default function PortfolioPage() {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);

  useEffect(() => {
    document.title = "Portfolio - Shivam";
    window.scrollTo(0, 0);

    fetch("https://api.github.com/users/z1shivam")
      .then((response) => response.json())
      .then((data: UserDetails) => {
        setUserDetails(data);
      });

    function scroller() {
      const scrollers = document.querySelectorAll<HTMLElement>(".scroller");
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
      }
      function addAnimation() {
        scrollers.forEach((scroller) => {
          scroller.setAttribute("data-animated", "true");
          const scrollerInner = scroller.querySelector<HTMLElement>(".scroller__inner");
          if (scrollerInner) {
            const scrollerContent = Array.from(scrollerInner.children);
            scrollerContent.forEach((item) => {
              const duplicatedItem = item.cloneNode(true) as HTMLElement;
              duplicatedItem.setAttribute("aria-hidden", "true");
              scrollerInner.appendChild(duplicatedItem);
            });
          }
        });
      }
    }

    scroller();
  }, []);

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-4">
        <h1 className="flex items-center gap-3 font-acme text-4xl">
          <FaCode />
          Dev Portfolio
        </h1>
        <p className="flex items-center gap-1 text-slate-500">
          powered by
          <span>
            <FaGithub />
          </span>
          Github
        </p>
      </section>
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-3 py-3 font-inter md:flex-row">
        {userDetails && (
          <a href={userDetails.html_url} className="flex min-h-32 w-full min-w-64 max-w-xl items-center gap-4 p-4">
            <div className="aspect-square w-24">
              <img
                src={userDetails.avatar_url}
                alt="Github Avatar"
                title="Github Avatar"
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <p className="text-xl">{userDetails.name}</p>
              <p className="text-base text-slate-600">@{userDetails.login}</p>
              <p className="text-base text-slate-600">{userDetails.public_repos} public code projects</p>
            </div>
          </a>
        )}
        <div className="scroller cursor-not-allowed py-8 md:py-0">
          <ul className="tag-list scroller__inner text-5xl text-slate-700 md:text-6xl">
            <li>
              <FaHtml5 />
            </li>
            <li>
              <FaReact />
            </li>
            <li>
              <BiLogoTypescript />
            </li>
            <li>
              <RiTailwindCssFill />
            </li>
            <li>
              <RiNextjsFill />
            </li>
            <li>
              <SiMongodb />
            </li>
            <li>
              <FaGolang />
            </li>
            <li>
              <FaAws />
            </li>
            <li>
              <FaGitAlt />
            </li>
            <li>
              <BiLogoPostgresql />
            </li>
            <li>
              <DiRedis />
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-orange-600 px-4 py-8 text-white">
        <p className="mx-auto max-w-2xl text-center text-lg">
          I am a Full-Stack Developer and I am able to create and manage any application architecture based on
          TypeScript.
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="flex items-center gap-2 font-acme text-3xl text-slate-700">
          <FaProjectDiagram /> Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-3">
          <FeaturedProjects githubUrl="https://api.github.com/repos/z1shivam/boredbunny" />
          <FeaturedProjects githubUrl="https://api.github.com/repos/z1shivam/GenPass" />
          <FeaturedProjects githubUrl="https://api.github.com/repos/z1shivam/knowyourcgpa" />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex flex-col md:flex-row">
          <div>
            <h2 className="flex items-center gap-2 font-acme text-3xl text-slate-700">
              <FaCubesStacked />
              My Tech Stack
            </h2>
            <div>
              <p className="pt-4 leading-relaxed text-slate-600">
                I do note believe much in TechStack thing, I learn and explore new technologies as the project demands.
                But here are some cool names that I can work with ease:
              </p>
              <ul className="list-outside list-disc space-y-4 p-4 leading-relaxed text-slate-600">
                <li>
                  <strong>FrontEnd:</strong> HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS
                </li>
                <li>
                  <strong>BackEnd:</strong> Node.js, Express.js, MongoDB, PostgreSQL, Redis, AWS
                </li>
                <li>
                  <strong>Others:</strong> Git, Github, Golang
                </li>
              </ul>
            </div>
          </div>
          <div className="relative w-full md:px-8">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/z1shivam.appspot.com/o/images%2F1600721604032.webp?alt=media&token=3c4d914b-97ca-4c0c-8fe1-7a02e846a41a"
              alt="tech stack"
              className="border-2 border-slate-300"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

const FeaturedProjects = ({ githubUrl }: { githubUrl: string }) => {
  const [project, setProject] = useState<any>({
    name: "boredbunny",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem.",
  });

  useEffect(() => {
    fetch(githubUrl)
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
      })
      .catch((error) => console.error("Error fetching project data:", error));
  }, [githubUrl]);

  return (
    <div className="mx-auto max-w-7xl">
      {project && (
        <div className="rounded-md border-2 border-slate-300 bg-slate-50 p-3">
          <h3 className="flex items-center gap-2 pb-1.5 text-2xl font-bold text-orange-600">
            {project.name.charAt(0).toUpperCase() + project.name.slice(1)}
          </h3>

          <p className="line-clamp-3 pb-1.5 leading-relaxed text-slate-600">{project.description}</p>
          <div>
            <p className="py-1 text-slate-600">
              <span className="font-medium">Language:</span>
              {project.language}
            </p>
            <p className="py-1 text-slate-600">
              <span className="font-medium">Stars:</span>
              {project.language}
            </p>
            <p className="py-1 text-slate-600">
              <span className="font-medium">Size:</span>
              {project.size} bytes
            </p>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 pb-2 pt-4">
            <a href={project.homepage}>
              <Button className="w-full bg-slate-900">visit</Button>
            </a>
            <a href={project.html_url}>
              <Button className="w-full" variant={"secondary"}>
                Go to github
              </Button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
