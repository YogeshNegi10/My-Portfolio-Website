import React from "react";
import todo from "../assets/Todo.png";
import Rps from "../assets/Rps.png";
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
          "Task Manager App - MERN Stack The Task Manager App is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to efficiently manage their tasks with full CRUD (Create, Read, Update, Delete) operations, ensuring a seamless and interactive experience.",
       image: TaskManager,
    },
    {
       id: 2,
       title: "WalkinWild",
       description:
          "WalkinWild is an adventurous river rafting website designed to bring thrill-seekers closer to nature. It’s a full-stack MERN application built with MongoDB, Express.js, React.js, and Node.js, offering a seamless and dynamic user experience. The frontend, styled with Tailwind CSS, is sleek, responsive, and user-friendly. Users can explore rafting packages, book thrilling trips, and learn about safety and gear.  Dive into the wild with WalkinWild!.",
       image: WalkinWild,
    },
    {
      id: 3,
      title: "SportsMart",
      description:
         " E commerce Website  With React ,  Redux  , Context Api , Tailwind , Firbase Auth and Database   , Razorpay Payment Integration.",
      image: SportsMart,
  },
    {
       id: 4,
       title: "Briefbytes",
       description:
          "A web application that provides concise summaries of articles and news, helping users stay informed without overwhelming them with information  BriefBytes aka Inshorts  News App  with React ,Tailwind , filtering option,Search .",
       image: Briefbytes,
    },
    {
       id: 5,
       title: "Cmanager",
       description:
          "A comprehensive content management system (CMS) that allows users to create, edit, and publish content seamlessly with React , Full Crud Operations with Api using RTK and Reduxthunk .",
       image: Cmanager,
    },
    {
       id: 6,
       title: "ShopCart",
       description:
          "An e-commerce platform that enables users to browse products, add them to their cart, and complete purchases securely, Full Cart Functionality with React , Tailwind , Redux Toolkit",
       image: ShopCart,
    },
    {
       id: 7,
       title: "Password Generator",
       description:
          "A tool that generates strong and secure passwords for users, enhancing their online security  Generate Passward as You Like with React !.",
       image: passward ,
    },
  
  

];
const ProjectCard = () => {
  return (
    <>
      {Project.map((project) => (
        <div key={project.id} class="px-2 py-20 w-full flex justify-center">
          <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
            <div class="lg:w-1/2">
              <div
                class="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg"
                style={{
                  backgroundImage: `url('${project.image}')`,
                  backgroundRepeat: "no-repeat",   
                  backgroundPosition: "center ",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
              <h2 class="text-4xl text-gray-800 font-bold">
                {project.title}
              </h2>
              <p class="mt-4 text-gray-600">
                {project.description}
              </p>
              <div class="mt-8 flex gap-6">
                <a
                  href="#"
                  class="bg-gray-900 text-gray-100 px-3 md:px-5 py-3 font-semibold rounded"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        
      ))}

    </>
  );
};

export default ProjectCard;
