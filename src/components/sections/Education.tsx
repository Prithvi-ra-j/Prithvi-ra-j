'use client';

import { motion } from 'framer-motion';
import { educationData, certificationData } from '@/data/portfolioData';
import { FaGraduationCap, FaCertificate, FaUniversity } from 'react-icons/fa';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="py-20 bg-white/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            My academic background and professional certifications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Education */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                  <FaUniversity className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Education</h3>
              </div>
              
              <div className="space-y-6">
                {educationData.map((education, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md border border-white/20"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-800">
                        {education.degree}
                      </h4>
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {education.period}
                      </span>
                    </div>
                    <p className="text-lg text-blue-600 font-semibold mb-2">
                      {education.institution}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Computer Science & Engineering</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Machine Learning & Data Science Focus</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Software Engineering Projects</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-purple-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <FaCertificate className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Certifications</h3>
              </div>
              
              <div className="space-y-6">
                {certificationData.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md border border-white/20"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-bold text-gray-800">
                        {cert.title}
                      </h4>
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-lg text-purple-600 font-semibold mb-3">
                      {cert.issuer}
                    </p>
                    
                    {/* Certification-specific details */}
                    {cert.title.includes('IBM Data Science') && (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Data Analysis & Visualization</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Machine Learning Fundamentals</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Python for Data Science</span>
                        </div>
                      </div>
                    )}
                    
                    {cert.title.includes('Apache Spark') && (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Big Data Processing</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>PySpark & DataFrame Operations</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Machine Learning with Spark</span>
                        </div>
                      </div>
                    )}
                    
                    {cert.title.includes('AWS Cloud') && (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Cloud Infrastructure</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Deployment & Scaling</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>ML Model Hosting</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Continuous Learning</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Online Courses</h4>
                <p className="text-gray-600 text-sm">Coursera, edX, Udemy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCertificate className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Certifications</h4>
                <p className="text-gray-600 text-sm">IBM, AWS, Google Cloud</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUniversity className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Workshops</h4>
                <p className="text-gray-600 text-sm">Hackathons, Tech Meetups</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
