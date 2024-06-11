"use client";
import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-12 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Hellooooo 👋
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Ever since we got our first PC at home to share with my sisters,
            I've had a passion for IT. I was about 9 or 10 years old at the
            time, and the arrival of an IT company that delivered and left us
            with some card boxes sparked my interest in the field. We had no
            idea what to do with them at the time, but that's where my journey
            began, with a Windows 3.11. Over the years, I've had many adventures
            and misadventures in IT, which I may detail sometime in the future.
            Fast forward to 2020, I decided to get back into coding and
            development, and enrolled in an e-learning platform called Udemy. I
            attended some trainings from Andrei Neagoie and his team at Zero to
            Mastery, and I found that coding and being able to produce something
            from scratch is a passion and a therapy after intense days at work.
            Since then, I have been learning and working with different tools,
            languages, and frameworks.
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full lg:col-span-6 row-span-2 flex-col items-start !p-0"
          }
        >
          <img
            className="w-full h-auto"
            src="https://api.daily.dev/devcards/v2/ewX1kkRa7UKJVTt0rUT8Z.png?type=wide&r=qqp"
            width="652"
            alt="Alberto Ferreira's Dev Card"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-6 text-accent"}
        >
          <p className="font-semibold w-full text-center text-2xl sm:text-5xl">
            25+
            <sub className="font-semibold text-base">
              Repositories on GitHub
            </sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-6 text-accent"}
        >
          <p className="font-semibold w-full text-center text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://my-stats-nu-blond.vercel.app/api/top-langs/?username=albertomtferreira&size_weight=0.5&count_weight=0.5&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="albertomtferreira_github_top-langs"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://my-stats-nu-blond.vercel.app/api?username=albertomtferreira&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="albertomtferreira_github_stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=bootstrap,css,discord,git,github,html,js,nextjs,nodejs,npm,postgres,postman,react,vscode,windows"
            alt="albertomtferreira_skillicons"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=albertomtferreira&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakNum=FEFE5B"
            alt="albertomtferreira_github_streak-stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://my-stats-nu-blond.vercel.app/api/pin/?username=albertomtferreira&repo=albertomtferreira.github.io&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
            alt="albertomtferreira_github_usage"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
