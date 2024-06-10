import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, Y: 100 },
  show: { opacity: 1, y: 0 },
};
const NavLink = motion(Link);

function ProjectLayout({ name, description, date, demoLink }) {
  return (
    <NavLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className="text-sm md:text-base  w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex flex-col gap-6 xs:gap-2">
        <h2 className="text-foregorund text-center xs:text-left">{name}</h2>
        <p className="text-muted text-center">{description}</p>
        <p className="text-center xs:text-right ">
          {new Date(date).toDateString()}
        </p>
      </div>
    </NavLink>
  );
}

export default ProjectLayout;
