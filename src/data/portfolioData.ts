// Portfolio Data File
// This file contains all the data for the portfolio website

// Personal Information
export const personalInfo = {
  name: "Prithviraj Chavan",
  title: "Data Science & Software Engineering Enthusiast",
  location: "Bangalore, India",
  email: "chavanprithvi45@gmail.com",
  phone: "+91 7795844029",
  github: "https://github.com/Prithvi-ra-j",
  linkedin: "https://linkedin.com/in/prithvi-raj-chavan-719b2019b",
  resumeLink: "#", // Replace with actual resume link
  profileSummary: "Data Science and Software Engineering enthusiast with hands-on experience in machine learning, data analytics, and scalable software solutions. Skilled in end-to-end project execution — from ETL and feature engineering to model deployment in production environments. Experienced in collaborating within Agile/Scrum teams, applying SDLC best practices, and working with geographically distributed stakeholders. Passionate about building AI-driven systems for fintech, enterprise technology, and global markets."
};

// Skills Data
export const skillsData = {
  languages: [
    { name: "Python", proficiency: 90 },
    { name: "SQL", proficiency: 85 },
    { name: "Java", proficiency: 75 }
  ],
  libraries: [
    { name: "Scikit-learn", proficiency: 90 },
    { name: "PyTorch", proficiency: 80 },
    { name: "Pandas", proficiency: 95 },
    { name: "NumPy", proficiency: 90 },
    { name: "Matplotlib", proficiency: 85 }
  ],
  bigData: [
    { name: "Apache Spark", proficiency: 80 },
    { name: "PySpark", proficiency: 85 },
    { name: "Parquet", proficiency: 75 },
    { name: "SQLite", proficiency: 80 }
  ],
  frameworks: [
    { name: "FastAPI", proficiency: 85 },
    { name: "Streamlit", proficiency: 80 },
    { name: "Flask", proficiency: 75 }
  ],
  tools: [
    { name: "Power BI", proficiency: 85 },
    { name: "Git", proficiency: 90 },
    { name: "APScheduler", proficiency: 75 },
    { name: "REST APIs", proficiency: 85 },
    { name: "CI/CD", proficiency: 80 },
    { name: "Docker", proficiency: 75 }
  ],
  concepts: [
    { name: "EDA", proficiency: 95 },
    { name: "Time Series", proficiency: 85 },
    { name: "Model Deployment", proficiency: 80 },
    { name: "MLOps", proficiency: 75 },
    { name: "Statistical Modeling", proficiency: 85 }
  ]
};

// Experience Data
export const experienceData = [
  {
    title: "Decision Scientist Intern",
    company: "Mu Sigma",
    period: "Jun 2025 – Present",
    description: [
      "Solving marketing & supply chain problems for Fortune 500 clients using Python, SQL, and BI tools.",
      "Building analytical assets, automation workflows, and data pipelines (Agile methodology)."
    ]
  },
  {
    title: "Machine Learning Intern",
    company: "Prinston Smart Engineers",
    period: "Aug 2023 – Sep 2023",
    description: [
      "Built churn prediction model with 90% accuracy, improved ETL efficiency by 20%.",
      "Tuned pipelines, reduced training time by 15%."
    ]
  }
];

// Projects Data
export const projectsData = [
  {
    title: "Intelligent Commodity Price Prediction Platform",
    year: "2025",
    description: "Built FastAPI-based platform for real-time price tracking & forecasting (gold/oil). Integrated PySpark ETL on 20k+ records, automated daily jobs with APScheduler. Deployed LSTM models via REST APIs for forecasts, alerts, analytics.",
    technologies: ["FastAPI", "PySpark", "LSTM", "APScheduler", "REST APIs"],
    githubLink: "#" // Replace with actual GitHub link
  },
  {
    title: "Credit Card Fraud Detection using LSTM",
    year: "2025",
    description: "Developed fraud detection model on 280K+ transactions using LSTM + Attention. Used SMOTE + weighted loss → F1: 0.9946, AUC: 0.9996. Containerized with Docker, deployed scoring/monitoring endpoints.",
    technologies: ["LSTM", "Attention Mechanism", "SMOTE", "Docker", "Python"],
    githubLink: "#" // Replace with actual GitHub link
  }
];

// Education Data
export const educationData = [
  {
    degree: "B.E. Computer Science",
    institution: "K.S. School of Engineering & Management",
    period: "2020–2024"
  }
];

// Certification Data
export const certificationData = [
  {
    title: "IBM Data Science",
    issuer: "Coursera",
    year: "2024"
  },
  {
    title: "Machine Learning with Apache Spark",
    issuer: "IBM",
    year: "2025"
  },
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "Coursera",
    year: "2025"
  }
];

// Navigation Links
export const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Experience", path: "#experience" },
  { name: "Education", path: "#education" },
  { name: "Contact", path: "#contact" }
];