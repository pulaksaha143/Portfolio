
import { ContactInfo, Education, Experience, Project, Certification, SkillCategory } from './types';

export const PROFILE = {
  name: "Pulak Saha",
  tagline: "Aspiring AI & ML Developer | Certified in AI, Prompt Engineering & Data Analytics",
  about: "I am an aspiring AI & ML Developer with a passion for building intelligent solutions using Python, SQL, and Generative AI. With a strong foundation in data analytics and hands-on experience through various job simulations at top-tier firms like Deloitte, Tata, and BCG, I aim to leverage technology to solve real-world business problems.",
};

export const CONTACT: ContactInfo = {
  email: "pulaksaha802@gmail.com",
  location: "Pune, Maharastra, 411001",
  linkedin: "https://www.linkedin.com/in/pulak-saha-8a5836362",
  github: "https://github.com/pulaksaha143"
};

export const EDUCATION: Education[] = [
  {
    institution: "PW Institute Of Innovation",
    degree: "B.Tech CSE",
    location: "Pune, Maharastra",
    period: "2025 - Present",
    grade: "NA"
  },
  {
    institution: "Saraswati Devi Public School",
    degree: "Class 12th",
    location: "Kandi, Murshidabad, West Bengal",
    period: "2024 - 2025",
    grade: "63%"
  },
  {
    institution: "Saraswati Devi Public School",
    degree: "Class 10th",
    location: "Kandi, Murshidabad, West Bengal",
    period: "2022 - 2023",
    grade: "87%"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Front-End Software Engineering",
    company: "Skyscanner",
    period: "Nov 2025",
    type: "Job Simulation",
    details: [
      "Built a web application using React as a Front-End Engineer.",
      "Developed a travel date-picking page utilizing Skyscanner's open-source Backpack React library.",
      "Customized the application's appearance and implemented automated tests to ensure proper rendering."
    ]
  },
  {
    role: "Quantitative Research",
    company: "JPMorgan Chase & Co",
    period: "Nov 2025",
    type: "Job Simulation",
    details: [
      "Applied Quantitative Research Methods focusing on analyzing a book of loans.",
      "Estimated customer probability of default based on loan book analysis.",
      "Utilized dynamic programming to convert FICO scores into categorical data for enhanced default prediction."
    ]
  },
  {
    role: "Data Analytics",
    company: "Quantium",
    period: "July 2025",
    type: "Job Simulation",
    details: [
      "Focused on customer insights and commercial recommendations using transaction datasets.",
      "Conducted benchmark analysis and uplift testing for trial store layouts.",
      "Compiled analytical findings into comprehensive reports for Category Managers."
    ]
  },
  {
    role: "Gen AI Powered Data Analytics",
    company: "Tata",
    period: "Jun 2025",
    type: "Job Simulation",
    details: [
      "Performed exploratory data analysis using GenAI tools to identify risk indicators.",
      "Designed an AI-driven collections strategy with ethical AI and regulatory compliance.",
      "Created scalable implementation frameworks for financial services."
    ]
  },
  {
    role: "Data Visualisation",
    company: "Tata",
    period: "Jun 2025",
    type: "Job Simulation",
    details: [
      "Created data visualizations for Tata Consultancy Services.",
      "Prepared questions for a meeting with client senior leadership.",
      "Created visuals for data analysis to help executives with effective decision making."
    ]
  },
  {
    role: "Gen AI",
    company: "BCG",
    period: "June 2025",
    type: "Job Simulation",
    details: [
      "Developed an AI-powered financial chatbot for BCG's GenAI Consulting team.",
      "Used Python libraries such as pandas for data manipulation.",
      "Integrated and interpreted complex financial data from 10-K and 10-Q reports using rule-based logic."
    ]
  },
  {
    role: "Data Analytics",
    company: "Deloitte",
    period: "Jun 2025",
    type: "Job Simulation",
    details: [
      "Involved data analysis and forensic technology.",
      "Created a data dashboard using Tableau.",
      "Used Excel to classify data and draw business conclusions."
    ]
  },
  {
    role: "Technology",
    company: "Deloitte",
    period: "Jun 2025",
    type: "Job Simulation",
    details: [
      "Involved development and coding tasks.",
      "Wrote a proposal for creating a dashboard."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Real-Time Emotion Detection & Analytics App",
    techStack: ["Python", "DeepFace", "OpenCV", "GitHub"],
    description: [
      "Built a real-time webcam app detecting facial emotions with DeepFace and overlaying dynamic emojis.",
      "Designed an interactive analytics dashboard with live charts and downloadable CSV/PDF reports.",
      "Optimized performance (analyzing every 5th frame) and deployed on Github for public access."
    ],
    links: {
      repo: "https://github.com/pulaksaha143/emotion_analytics_app"
    }
  },
  {
    title: "Sales Data Dashboard",
    techStack: ["Python", "SQL", "MS SQL Server", "Pandas", "Matplotlib"],
    description: [
      "Built a complete data analysis pipeline using Microsoft SQL Server, Python, and Jupyter Notebook.",
      "Queried product sales data with SQL, connected to Python via pyodbc, used pandas for analysis.",
      "Visualized key metrics with matplotlib to help businesses monitor product performance."
    ],
    links: {
      repo: "https://github.com/pulaksaha143/sales-data-dashboard"
    }
  },
  {
    title: "AI Business Report Generator",
    techStack: ["Python", "Pandasql", "FPDF", "Automation"],
    description: [
      "Developed a Python-based automation tool that reads business data from CSV and performs SQL-style analysis.",
      "Generates a professional PDF business report using FPDF, automating manual reporting processes.",
      "Useful for small businesses and analysts to quickly produce ready-to-share reports."
    ],
    links: {
      repo: "https://github.com/pulaksaha143/ai-business-report-generator"
    }
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages & Core",
    skills: ["Python", "SQL", "T-SQL"]
  },
  {
    name: "Data Science & AI",
    skills: ["Pandas", "Matplotlib", "Scikit-learn", "Machine Learning", "Generative AI", "LLMs", "Prompt Engineering", "OpenAI API"]
  },
  {
    name: "Web & Tools",
    skills: ["React", "Gradio", "Git & GitHub", "Power BI", "Tableau", "Vibe Coding", "PDF Automation"]
  },
  {
    name: "Spoken Languages",
    skills: ["English", "Hindi", "Bengali"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Generative AI in Action", issuer: "IBM (Credly badge)" },
  { name: "ChatGPT Prompt Engineering for Developers", issuer: "DeepLearning.AI & OpenAI" },
  { name: "Building Generative AI Applications with Gradio", issuer: "DeepLearning.AI" },
  { name: "Fundamentals of LLMs", issuer: "Hugging Face" },
  { name: "How to Build a Chatbot", issuer: "IBM SkillBuild" },
  { name: "Python Course for Beginners: Mastering the Essentials", issuer: "Scaler" },
  { name: "SQL Course", issuer: "Intellipaat" },
  { name: "scikit-learn for Beginners", issuer: "Simplilearn SkillUp" },
  { name: "Introduction to Machine Learning with scikit-learn", issuer: "Data School" },
  { name: "AI Tools Workshop", issuer: "Be10X" },
  { name: "Power BI for Beginners", issuer: "Simplilearn" },
  { name: "Power BI Full Course", issuer: "Learnit Training (via Cursa)" },
  { name: "Power BI Workshop", issuer: "Office Master" },
  { name: "LangChain for LLM App Development", issuer: "Simplilearn" },
  { name: "Data Analytics", issuer: "NoviTech R&D Private Limited" },
  { name: "Vibe Coding 101 with Replit!", issuer: "DeepLearning.AI" },
  { name: "Microsoft SQL Certification Training", issuer: "Intellipaat" },
  { name: "AI Upskilling Certificate: Technical Foundation", issuer: "Qualcomm Academy" }
];
