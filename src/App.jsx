import React, { useEffect, useState } from "react";

import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/themeContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const App = () => {

  const [themeMode, setThemeMode] = useState(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    return theme || "light";
  });

  const lighttheme = () => {
    setThemeMode("light");
  };
  const darktheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    let htmlEl = document.querySelector("html");
    htmlEl.classList.remove("light", "dark");
    htmlEl.classList.add(themeMode);
    localStorage.setItem("theme", JSON.stringify(themeMode));
  }, [themeMode]);

  useEffect(() => {
    
    if (themeMode === "light") {
      setTimeout(() => {
        toast("Switch to Dark Mode For Better Experience");
      }, 2000);
    }

    return;
  }, []);

  return (
    <>

      <ThemeProvider value={{ themeMode, darktheme, lighttheme }}>
        <ToastContainer />
        <Navbar />
        <div className=" bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-10">   
          <HeroSection />
          <About />
          <Skills />
          <Projects />
          <ContactMe />
          </div>
          <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
