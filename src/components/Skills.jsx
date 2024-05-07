import { skills } from "../skills";

const Skills = () => {
  return (
    <>
      <section id="skills" className="bg-white dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800  py-6 sm:py-6  ">
          <h1 className=" text-5xl text-center font-bold m-8 dark:text-white">
            Experience
          </h1>
          <p className=" max-w-full text-center mb-6 font-medium text-gray-500 dark:text-gray-300 md:block">
            --- Technologies I have work With ---
          </p>

          <div className="flex w-full lg:w-1/2 mx-auto justify-center md:justify-between gap-4 flex-wrap">
            {skills.map((skill) => (
              <div className=" max-w-36 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center  px-12 py-2 ">
                <div className="">
                  <img
                    className="rounded-t-lg w-full text-center mt-6 "
                    src={skill.image}
                    alt=""
                  />
                </div>

                <div className="p-5">
                  <h5 className="mb-2 text-1xl text-center font-bold tracking-tight text-gray-500 dark:text-white">
                    {skill.name}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
