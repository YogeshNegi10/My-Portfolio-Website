import { motion } from "framer-motion";
import { skills } from "../skills";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-900 py-10">
      <div className="bg-gray-100 dark:bg-gray-800 px-4 sm:px-8 py-10 rounded-lg shadow-md">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl text-center font-bold mb-4 dark:text-white"
        >
          Experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center text-lg font-medium text-gray-500 dark:text-gray-300 mb-10"
        >
          --- Technologies I have worked with ---
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-32 h-40 flex flex-col items-center justify-center hover:shadow-xl transition-shadow"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <h5 className="text-sm font-semibold text-center text-gray-700 dark:text-white">
                {skill.name}
              </h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
