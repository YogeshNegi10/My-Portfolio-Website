import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion

const About = () => {
  return (
    <>
      <section
        id="about"
        className="overflow-hidden pt-16 pb-12 lg:pb-[40px] bg-gray-100 dark:bg-gray-900"
      >
        <motion.h1
          className="text-5xl font-bold text-center mb-10 dark:text-white"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <motion.div
                    className="py-3 sm:py-4"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <img
                      src="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg?t=st=1713626336~exp=1713629936~hmac=eb82174f076d796037d0e93bf27435a3472258b982628fb8ace458a63f7f06eb&w=740"
                      alt="API Illustration"
                      className="w-full rounded-2xl"
                    />
                  </motion.div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <motion.div
                    className="relative z-10 my-4"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  >
                    <img
                      src="https://img.freepik.com/premium-vector/web-development-coding-programming-responsive-layout-internet-site-app-devices-creation-digital-software-mobile-desktop-platforms-computer-code-laptop-tablet-phone-digital-business_273625-2734.jpg?w=360"
                      alt="Web Development"
                      className="w-full rounded-2xl"
                    />

<span className="absolute -right-7 -bottom-7 z-[-1]">
<svg
  width={134}
  height={106}
  viewBox="0 0 134 106"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    cx="1.66667"
    cy={104}
    r="1.66667"
    transform="rotate(-90 1.66667 104)"
    fill="#3056D3"
  />
  <circle
    cx="16.3333"
    cy={104}
    r="1.66667"
    transform="rotate(-90 16.3333 104)"
    fill="#3056D3"
  />
  <circle
    cx={31}
    cy={104}
    r="1.66667"
    transform="rotate(-90 31 104)"
    fill="#3056D3"
  />
  <circle
    cx="45.6667"
    cy={104}
    r="1.66667"
    transform="rotate(-90 45.6667 104)"
    fill="#3056D3"
  />
  <circle
    cx="60.3334"
    cy={104}
    r="1.66667"
    transform="rotate(-90 60.3334 104)"
    fill="#3056D3"
  />
  <circle
    cx="88.6667"
    cy={104}
    r="1.66667"
    transform="rotate(-90 88.6667 104)"
    fill="#3056D3"
  />
  <circle
    cx="117.667"
    cy={104}
    r="1.66667"
    transform="rotate(-90 117.667 104)"
    fill="#3056D3"
  />
  <circle
    cx="74.6667"
    cy={104}
    r="1.66667"
    transform="rotate(-90 74.6667 104)"
    fill="#3056D3"
  />
  <circle
    cx={103}
    cy={104}
    r="1.66667"
    transform="rotate(-90 103 104)"
    fill="#3056D3"
  />
  <circle
    cx={132}
    cy={104}
    r="1.66667"
    transform="rotate(-90 132 104)"
    fill="#3056D3"
  />
  <circle
    cx="1.66667"
    cy="89.3333"
    r="1.66667"
    transform="rotate(-90 1.66667 89.3333)"
    fill="#3056D3"
  />
  <circle
    cx="16.3333"
    cy="89.3333"
    r="1.66667"
    transform="rotate(-90 16.3333 89.3333)"
    fill="#3056D3"
  />
  <circle
    cx={31}
    cy="89.3333"
    r="1.66667"
    transform="rotate(-90 31 89.3333)"
    fill="#3056D3"
  />
  <circle
    cx="45.6667"
    cy="89.3333"
    r="1.66667"
    transform="rotate(-90 45.6667 89.3333)"
    fill="#3056D3"
  />
  <circle
    cx="60.3333"
    cy="89.3338"
    r="1.66667"
    transform="rotate(-90 60.3333 89.3338)"
    fill="#3056D3"
  />
  <circle
    cx="88.6667"
    cy="89.3338"
    r="1.66667"
    transform="rotate(-90 88.6667 89.3338)"
    fill="#3056D3"
  />
  <circle
    cx="117.667"
    cy="89.3338"
    r="1.66667"
    transform="rotate(-90 117.667 89.3338)"
    fill="#3056D3"
  />
  <circle
    cx="74.6667"
    cy="89.3338"
    r="1.66667"
    transform="rotate(-90 74.6667 89.3338)"
    fill="#3056D3"
  />
  <circle
    cx={103}
    cy="89.3338"
    r="1.66667"
    transform="rotate(-90 103 89.3338)"
    fill="#3056D3"
  />
  <circle
    cx={132}
    cy="89.3338"
    r="1.66667"
    transform="rotate(-90 132 89.3338)"
    fill="#3056D3"
  />
  <circle
    cx="1.66667"
    cy="74.6673"
    r="1.66667"
    transform="rotate(-90 1.66667 74.6673)"
    fill="#3056D3"
  />
  <circle
    cx="1.66667"
    cy="31.0003"
    r="1.66667"
    transform="rotate(-90 1.66667 31.0003)"
    fill="#3056D3"
  />
  <circle
    cx="16.3333"
    cy="74.6668"
    r="1.66667"
    transform="rotate(-90 16.3333 74.6668)"
    fill="#3056D3"
  />
  <circle
    cx="16.3333"
    cy="31.0003"
    r="1.66667"
    transform="rotate(-90 16.3333 31.0003)"
    fill="#3056D3"
  />
  <circle
    cx={31}
    cy="74.6668"
    r="1.66667"
    transform="rotate(-90 31 74.6668)"
    fill="#3056D3"
  />
  <circle
    cx={31}
    cy="31.0003"
    r="1.66667"
    transform="rotate(-90 31 31.0003)"
    fill="#3056D3"
  />
  <circle
    cx="45.6667"
    cy="74.6668"
    r="1.66667"
    transform="rotate(-90 45.6667 74.6668)"
    fill="#3056D3"
  />
  <circle
    cx="45.6667"
    cy="31.0003"
    r="1.66667"
    transform="rotate(-90 45.6667 31.0003)"
    fill="#3056D3"
  />
  <circle
    cx="60.3333"
    cy="74.6668"
    r="1.66667"
    transform="rotate(-90 60.3333 74.6668)"
    fill="#3056D3"
  />
  <circle
    cx="60.3333"
    cy="30.9998"
    r="1.66667"
    transform="rotate(-90 60.3333 30.9998)"
    fill="#3056D3"
  />
  <circle
    cx="88.6667"
    cy="74.6668"
    r="1.66667"
    transform="rotate(-90 88.6667 74.6668)"
    fill="#3056D3"
  />
  <circle
    cx="88.6667"
    cy="30.9998"
    r="1.66667"
    transform="rotate(-90 88.6667 30.9998)"
    fill="#3056D3"
  />
  <circle
    cx="117.667"
    cy="74.6668"
    r="1.66667"
    transform="rotate(-90 117.667 74.6668)"
    fill="#3056D3"
  />
  <circle
    cx="117.667"
    cy="30.9998"
    r="1.66667"
    transform="rotate(-90 117.667 30.9998)"
    fill="#3056D3"
  />
  <circle
    cx="74.6667"
    cy="74.6668"
    r="1.66667"
    transform="rotate(-90 74.6667 74.6668)"
    fill="#3056D3"
  />
  <circle
    cx="74.6667"
    cy="30.9998"
    r="1.66667"
    transform="rotate(-90 74.6667 30.9998)"
    fill="#3056D3"
  />
  <circle
    cx={103}
    cy="74.6668"
    r="1.66667"
    transform="rotate(-90 103 74.6668)"
    fill="#3056D3"
  />
  <circle
    cx={103}
    cy="30.9998"
    r="1.66667"
    transform="rotate(-90 103 30.9998)"
    fill="#3056D3"
  />
  <circle
    cx={132}
    cy="74.6668"
    r="1.66667"
    transform="rotate(-90 132 74.6668)"
    fill="#3056D3"
  />
  <circle
    cx={132}
    cy="30.9998"
    r="1.66667"
    transform="rotate(-90 132 30.9998)"
    fill="#3056D3"
  />
  <circle
    cx="1.66667"
    cy="60.0003"
    r="1.66667"
    transform="rotate(-90 1.66667 60.0003)"
    fill="#3056D3"
  />
  <circle
    cx="1.66667"
    cy="16.3333"
    r="1.66667"
    transform="rotate(-90 1.66667 16.3333)"
    fill="#3056D3"
  />
  <circle
    cx="16.3333"
    cy="60.0003"
    r="1.66667"
    transform="rotate(-90 16.3333 60.0003)"
    fill="#3056D3"
  />
  <circle
    cx="16.3333"
    cy="16.3333"
    r="1.66667"
    transform="rotate(-90 16.3333 16.3333)"
    fill="#3056D3"
  />
  <circle
    cx={31}
    cy="60.0003"
    r="1.66667"
    transform="rotate(-90 31 60.0003)"
    fill="#3056D3"
  />
  <circle
    cx={31}
    cy="16.3333"
    r="1.66667"
    transform="rotate(-90 31 16.3333)"
    fill="#3056D3"
  />
  <circle
    cx="45.6667"
    cy="60.0003"
    r="1.66667"
    transform="rotate(-90 45.6667 60.0003)"
    fill="#3056D3"
  />
  <circle
    cx="45.6667"
    cy="16.3333"
    r="1.66667"
    transform="rotate(-90 45.6667 16.3333)"
    fill="#3056D3"
  />
  <circle
    cx="60.3333"
    cy="60.0003"
    r="1.66667"
    transform="rotate(-90 60.3333 60.0003)"
    fill="#3056D3"
  />
  <circle
    cx="60.3333"
    cy="16.3333"
    r="1.66667"
    transform="rotate(-90 60.3333 16.3333)"
    fill="#3056D3"
  />
  <circle
    cx="88.6667"
    cy="60.0003"
    r="1.66667"
    transform="rotate(-90 88.6667 60.0003)"
    fill="#3056D3"
  />
  <circle
    cx="88.6667"
    cy="16.3333"
    r="1.66667"
    transform="rotate(-90 88.6667 16.3333)"
    fill="#3056D3"
  />
  <circle
    cx="117.667"
    cy="60.0003"
    r="1.66667"
    transform="rotate(-90 117.667 60.0003)"
    fill="#3056D3"
  />
  <circle
    cx="117.667"
    cy="16.3333"
    r="1.66667"
    transform="rotate(-90 117.667 16.3333)"
    fill="#3056D3"
  />
  <circle
    cx="74.6667"
    cy="60.0003"
    r="1.66667"
    transform="rotate(-90 74.6667 60.0003)"
    fill="#3056D3"
  />
  <circle
    cx="74.6667"
    cy="16.3333"
    r="1.66667"
    transform="rotate(-90 74.6667 16.3333)"
    fill="#3056D3"
  />
  <circle
    cx={103}
    cy="60.0003"
    r="1.66667"
    transform="rotate(-90 103 60.0003)"
    fill="#3056D3"
  />
  <circle
    cx={103}
    cy="16.3333"
    r="1.66667"
    transform="rotate(-90 103 16.3333)"
    fill="#3056D3"
  />
  <circle
    cx={132}
    cy="60.0003"
    r="1.66667"
    transform="rotate(-90 132 60.0003)"
    fill="#3056D3"
  />
  <circle
    cx={132}
    cy="16.3333"
    r="1.66667"
    transform="rotate(-90 132 16.3333)"
    fill="#3056D3"
  />
  <circle
    cx="1.66667"
    cy="45.3333"
    r="1.66667"
    transform="rotate(-90 1.66667 45.3333)"
    fill="#3056D3"
  />
  <circle
    cx="1.66667"
    cy="1.66683"
    r="1.66667"
    transform="rotate(-90 1.66667 1.66683)"
    fill="#3056D3"
  />
  <circle
    cx="16.3333"
    cy="45.3333"
    r="1.66667"
    transform="rotate(-90 16.3333 45.3333)"
    fill="#3056D3"
  />
  <circle
    cx="16.3333"
    cy="1.66683"
    r="1.66667"
    transform="rotate(-90 16.3333 1.66683)"
    fill="#3056D3"
  />
  <circle
    cx={31}
    cy="45.3333"
    r="1.66667"
    transform="rotate(-90 31 45.3333)"
    fill="#3056D3"
  />
  <circle
    cx={31}
    cy="1.66683"
    r="1.66667"
    transform="rotate(-90 31 1.66683)"
    fill="#3056D3"
  />
  <circle
    cx="45.6667"
    cy="45.3333"
    r="1.66667"
    transform="rotate(-90 45.6667 45.3333)"
    fill="#3056D3"
  />
  <circle
    cx="45.6667"
    cy="1.66683"
    r="1.66667"
    transform="rotate(-90 45.6667 1.66683)"
    fill="#3056D3"
  />
  <circle
    cx="60.3333"
    cy="45.3338"
    r="1.66667"
    transform="rotate(-90 60.3333 45.3338)"
    fill="#3056D3"
  />
  <circle
    cx="60.3333"
    cy="1.66683"
    r="1.66667"
    transform="rotate(-90 60.3333 1.66683)"
    fill="#3056D3"
  />
  <circle
    cx="88.6667"
    cy="45.3338"
    r="1.66667"
    transform="rotate(-90 88.6667 45.3338)"
    fill="#3056D3"
  />
  <circle
    cx="88.6667"
    cy="1.66683"
    r="1.66667"
    transform="rotate(-90 88.6667 1.66683)"
    fill="#3056D3"
  />
  <circle
    cx="117.667"
    cy="45.3338"
    r="1.66667"
    transform="rotate(-90 117.667 45.3338)"
    fill="#3056D3"
  />
  <circle
    cx="117.667"
    cy="1.66683"
    r="1.66667"
    transform="rotate(-90 117.667 1.66683)"
    fill="#3056D3"
  />
  <circle
    cx="74.6667"
    cy="45.3338"
    r="1.66667"
    transform="rotate(-90 74.6667 45.3338)"
    fill="#3056D3"
  />
  <circle
    cx="74.6667"
    cy="1.66683"
    r="1.66667"
    transform="rotate(-90 74.6667 1.66683)"
    fill="#3056D3"
  />
  <circle
    cx={103}
    cy="45.3338"
    r="1.66667"
    transform="rotate(-90 103 45.3338)"
    fill="#3056D3"
  />
  <circle
    cx={103}
    cy="1.66683"
    r="1.66667"
    transform="rotate(-90 103 1.66683)"
    fill="#3056D3"
  />
  <circle
    cx={132}
    cy="45.3338"
    r="1.66667"
    transform="rotate(-90 132 45.3338)"
    fill="#3056D3"
  />
  <circle
    cx={132}
    cy="1.66683"
    r="1.66667"
    transform="rotate(-90 132 1.66683)"
    fill="#3056D3"
  />
</svg>
</span>
                  </motion.div>
                  
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary"></span>
                <motion.h3
                  className="mb-5 font-bold text-dark text-center dark:text-white sm:text-[40px]/[48px]"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -50 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  "Turning pixels into possibilities, weaving code into
                  creativity."
                </motion.h3>
                <motion.p
                  className="mb-5 text-justify md:mt-8 text-base text-body-color font-medium dark:text-dark-6 dark:dark:text-gray-400"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  --- Hi, Nice To Meet You! I'm Yogesh Negi, an experienced web developer with a handful of experience. I specialize in creating dynamic and user-friendly websites that leave a lasting impression. My skill set spans across front-end and back-end development, allowing me to tackle any challenge with confidence. I thrive on bringing ideas to life, from conceptualization to execution. Whether it's crafting pixel-perfect designs or implementing complex functionalities, I'm committed to delivering high-quality results that exceed expectations. Let's collaborate and transform your vision into an online reality that stands out in today's digital landscape! ---
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
