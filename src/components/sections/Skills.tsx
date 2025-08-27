'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/data/portfolioData';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const ProgressBar = ({ skill, proficiency }: { skill: string; proficiency: number }) => (
    <motion.div
      variants={itemVariants}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-700">{skill}</span>
        <span className="text-sm text-gray-500">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left Column */}
          <div className="space-y-8">
            {/* Languages */}
            <motion.div
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-lg mr-3 flex items-center justify-center text-white text-sm font-bold">L</span>
                Programming Languages
              </h3>
              {skillsData.languages.map((skill) => (
                <ProgressBar key={skill.name} skill={skill.name} proficiency={skill.proficiency} />
              ))}
            </motion.div>

            {/* Libraries */}
            <motion.div
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="w-8 h-8 bg-purple-500 rounded-lg mr-3 flex items-center justify-center text-white text-sm font-bold">ML</span>
                Machine Learning Libraries
              </h3>
              {skillsData.libraries.map((skill) => (
                <ProgressBar key={skill.name} skill={skill.name} proficiency={skill.proficiency} />
              ))}
            </motion.div>

            {/* Big Data */}
            <motion.div
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="w-8 h-8 bg-indigo-500 rounded-lg mr-3 flex items-center justify-center text-white text-sm font-bold">BD</span>
                Big Data Technologies
              </h3>
              {skillsData.bigData.map((skill) => (
                <ProgressBar key={skill.name} skill={skill.name} proficiency={skill.proficiency} />
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Frameworks */}
            <motion.div
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-lg mr-3 flex items-center justify-center text-white text-sm font-bold">F</span>
                Web Frameworks
              </h3>
              {skillsData.frameworks.map((skill) => (
                <ProgressBar key={skill.name} skill={skill.name} proficiency={skill.proficiency} />
              ))}
            </motion.div>

            {/* Tools */}
            <motion.div
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="w-8 h-8 bg-orange-500 rounded-lg mr-3 flex items-center justify-center text-white text-sm font-bold">T</span>
                Development Tools
              </h3>
              {skillsData.tools.map((skill) => (
                <ProgressBar key={skill.name} skill={skill.name} proficiency={skill.proficiency} />
              ))}
            </motion.div>

            {/* Concepts */}
            <motion.div
              variants={itemVariants}
              className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="w-8 h-8 bg-red-500 rounded-lg mr-3 flex items-center justify-center text-white text-sm font-bold">C</span>
                Core Concepts
              </h3>
              {skillsData.concepts.map((skill) => (
                <ProgressBar key={skill.name} skill={skill.name} proficiency={skill.proficiency} />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Agile/Scrum', 'Git Version Control', 'REST APIs', 'Docker',
              'CI/CD Pipelines', 'Power BI', 'Statistical Analysis', 'Data Visualization'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-white/60 backdrop-blur-md rounded-xl p-4 text-center shadow-md border border-white/20 hover:shadow-lg transition-all duration-200"
              >
                <span className="text-gray-700 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
