import React from "react";

import ProjectCard from "./ProjectCard";


const Projects = () => {
  return (
    <>
      <section id="Portfolio" className="bg-white dark:bg-gray-900 bg-transparent">
        <div className="bg-white dark:bg-gray-800  py-2 sm:py-8 lg:py-12">
          <h1 className=" text-5xl text-center font-bold m-6 dark:text-white">Portfolio</h1>
          <div className="mx-auto flex justify-center max-w-screen-2xl px-4 md:px-8">
            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
              <div className="flex flex-col  justify-center items-center gap-2">
                <h2 className="md:text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white mr-9">
                  Projects Highlights
                </h2>

                <p className="hidden max-w-full font-medium text-gray-500 dark:text-gray-300 md:block">
                  "Dive into my portfolio and witness the web unfold—a gallery
                  of digital dreams brought to life."
                </p>

                <ProjectCard/>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
