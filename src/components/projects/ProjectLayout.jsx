import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Github, Home } from "lucide-react";

const item = {
  hidden: { opacity: 0, Y: 100 },
  show: { opacity: 1, y: 0 },
};
const NavLink = motion(Link);

function ProjectLayout({ name, description, date, demoLink, repository, id }) {
  return (
    <motion.div
      variants={item}
      className="text-sm md:text-base w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex flex-col gap-6 xs:gap-2">
        <h2 className="text-foregorund text-center xs:text-left">{name}</h2>

        <p className="text-muted text-center ">{description}</p>
        <div className="flex items-center justify-center gap-6 xs:gap-2">
          <NavLink
            variants={item}
            href={repository}
            target={"_blank"}
            className="text-foreground rounded-full flex items-center justify-center custom-bg w-fit self-start z-50"
            aria-label={"Repository"}
            name={"Repository"}
          >
            <span className="relative flex flex-row justify-center items-center w-14 h-14 p-4 hover:text-accent">
              <Github className="w-full h-auto" strokeWidth={1.5} />
              <span className="peer bg-trasnparent absolute top-0 left-0 w-full h-full" />
              <span className="absolute top-full hidden peer-hover:block px-2 py-1 mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-muted text-sm rounded-md shadow-lg whitespace-nowrap">
                Repository
              </span>
            </span>
          </NavLink>

          <NavLink
            variants={item}
            href={demoLink}
            target={"_blank"}
            className="text-foreground  rounded-full flex items-center justify-center custom-bg w-fit self-start z-50"
            aria-label={"Link"}
            name={"Link"}
          >
            <span className="relative flex flex-row justify-center items-center w-14 h-14 p-4 hover:text-accent">
              <Globe className="w-full h-auto" strokeWidth={1.5} />
              <span className="peer bg-trasnparent absolute top-0 left-0 w-full h-full" />
              <span className="absolute top-full hidden peer-hover:block px-2 py-1 mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-muted text-sm rounded-md shadow-lg whitespace-nowrap">
                Link
              </span>
            </span>
          </NavLink>
        </div>

        <p className="flex flex-col text-center xs:text-right ">
          <span>Last Update: </span>

          {new Date(date).toLocaleDateString("en-uk", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </motion.div>
  );
}

export default ProjectLayout;
