import React from "react";
import { motion } from "framer-motion";
import Briefbytes from "../assets/Briefbytes.png";
import Cmanager from "../assets/Cmanager.png";
import ShopCart from "../assets/ShopCart.png";
import passward from "../assets/Passward.png";
import SportsMart from "../assets/SportsMart.png";
import TaskManager from "../assets/TaskManager1.png";
import WalkinWild from "../assets/WalkinWild.png";

const Project = [
  {
    id: 1,
    title: "Task Manager",
    description:
      "Task Manager App - MERN Stack The Task Manager App is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js)...",
    image: TaskManager,
    link: "https://task-manager-with-user-auth.vercel.app",
    github: "https://github.com/YogeshNegi10/Task-Manager-With-User-Auth",
  },
  {
    id: 2,
    title: "WalkinWild",
    description:
      "WalkinWild is an adventurous river rafting website designed to bring thrill-seekers closer to nature. Full-stack MERN app...",
    image: WalkinWild,
    link: "https://walkin-wild.vercel.app/",
    github: "https://walkin-wild.vercel.app/",
  },
  {
    id: 3,
    title: "SportsMart",
    description:
      "E-commerce Website with React, Redux, Context API, Tailwind, Firebase Auth, Database, and Razorpay integration.",
    image: SportsMart,
    link: "https://sports-mart-ecommerce-react-app.vercel.app/",
    github: "https://github.com/YogeshNegi10/SportsMart-React-App",
  },
  {
    id: 4,
    title: "Briefbytes",
    description:
      "News App with React, Tailwind, and filtering. Provides concise article summaries to help users stay informed easily.",
    image: Briefbytes,
    link: "https://github.com/YogeshNegi10/BriefBytes-News-App",
    github: "https://github.com/YogeshNegi10/BriefBytes-News-App",
  },
  {
    id: 5,
    title: "Cmanager",
    description:
      "Content Management System with full CRUD operations using RTK, Redux Thunk, and React.",
    image: Cmanager,
    link: "https://contact-manager-react-app-indol.vercel.app/",
    github: "https://github.com/YogeshNegi10/Contact-Manager-React-App",
  },
  {
    id: 6,
    title: "SkyMart",
    description:
      "E-commerce platform with cart, React, Tailwind, and Redux Toolkit integration.",
    image: ShopCart,
    link: "https://sky-mart-shopping-cart.vercel.app/",
    github: "https://github.com/YogeshNegi10/SkyMart-Shopping-Cart-React-App",
  },
  {
    id: 7,
    title: "Password Generator",
    description:
      "Generate strong passwords with custom options using React. Secure and user-friendly.",
    image: passward,
    link: "https://passwardgenerator10.netlify.app/",
    github: "https://github.com/YogeshNegi10/Passward-Generator",
  },
];

const ProjectCard = () => {
  return (
    <>
      {Project.map((project, index) => (
        <motion.div
          key={project.id}
          className="px-2 py-20 w-full flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        >
          <div className="bg-gray-100 dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
            <div className="lg:w-1/2">
              <div
                className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                style={{
                  backgroundImage: `url('${project.image}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
              <h2 className="text-4xl text-gray-800 dark:text-white font-bold">
                {project.title}
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="mt-8 flex gap-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-4 py-3 font-semibold rounded hover:bg-gray-700 transition"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-4 py-3 font-semibold rounded hover:bg-gray-700 transition"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default ProjectCard;

