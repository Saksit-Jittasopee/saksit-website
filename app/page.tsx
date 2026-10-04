"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CV from "@/components/CV";
import ProjectCard from '@/components/ProjectCard';
import CertificateCard from "@/components/CertificateCard";
import ActivityCard from "@/components/ActivityCard";
import ContactMapLoader from "@/components/ContactMapLoader";

// Assets
import profileImg from "@/public/assets/Home/image.jpg";

// Certificates
import CCNACertificate from "@/public/assets/Certificate/CCNA-_Introduction_to_Networks.png";
import DataAnalyticsCer from "@/public/assets/Certificate/DataAnalyticsEssentialsCer.png";
import IntroDataScienceCer from "@/public/assets/Certificate/IntroductiontoDataScience.png";
import DataSciencePythonCer from "@/public/assets/Certificate/DataScienceEssentialswithPython.png";
import DataFundamentalCer from "@/public/assets/Certificate/IBM_Data_Fundamentals.png";
import ModernAICer from "@/public/assets/Certificate/Introduction_to_Modern_AI_cer.png";
import AIFundamental4 from "@/public/assets/Certificate/IBM_AI_Fundamentals.png";
import Cybersecurity from "@/public/assets/Certificate/cybersecurity.png";
import ZeroTrust from "@/public/assets/Certificate/Zero Trust Security.png";
import DigitalAwareness from "@/public/assets/Certificate/digital awareness.png";
import Intro2IoT from "@/public/assets/Certificate/Introduction_to_IoT.png";
import Cpp from "@/public/assets/Certificate/CPP_Essentials.png";
import GenAI from "@/public/assets/Certificate/GenAI.png";
import datascience101 from "@/public/assets/Certificate/DataScience101.png";
import databricksai from "@/public/assets/Certificate/DataBricks_GenAI_Certificate.png";
import databricksdataen from "@/public/assets/Certificate/Databricks_Data_Engineering_with_Databricks-1.png";
import databricksdevops from "@/public/assets/Certificate/Databricks_DevOps_Data_Engineering-1.png";

// Projects
import currentchamp1 from "@/public/assets/Projects/Current_Wrestling_Champions_1.png";
import teasmoker from "@/public/assets/Projects/Tea_Smoker_Chart.png";
import webapp1 from "@/public/assets/Projects/Ayema5kon1.png";
import bar from "@/public/assets/Projects/bar.png";
import monday from "@/public/assets/Projects/monday.png";
import chanasorntravel from "@/public/assets/Projects/chanasorn_travel_2025_3.png";
import gender from "@/public/assets/Projects/gender.png";
import age from "@/public/assets/Projects/age_predict.png";
import healthcare from "@/public/assets/Projects/healthcare_fraud.png";
import nlp_email from "@/public/assets/Projects/nlp_email_predict.png";
import shirt_size from "@/public/assets/Projects/shirt_size_recommendation.png";
import ikillair from "@/public/assets/Projects/ikillair.png";
import iot_project from "@/public/assets/Projects/iot_project.png";

// Activities
import themall from "@/public/assets/Activity/themall.png";
import synergy from "@/public/assets/Activity/synergy.png";
import mfeg from "@/public/assets/Activity/mfeg.png";
import people_innovation from "@/public/assets/Activity/people_innovation.png";
import ai_day from "@/public/assets/Activity/Saksit_AI_Days_2.jpg";
import event_1moby from "@/public/assets/Activity/1moby.png";
import skill_to_the_top from "@/public/assets/Activity/skill_to_the_top.png";
import it_audit from "@/public/assets/Activity/it_audit.png";
import soft_en from "@/public/assets/Activity/soft_en.png";
import data_science from "@/public/assets/Activity/data_science.png";
import scg_jwd from "@/public/assets/Activity/scg_jwd.png";
import sec_data_en from "@/public/assets/Activity/sec_data_en.png";
import bank from "@/public/assets/Activity/bank_of_thailand.png";
import itax from "@/public/assets/Activity/itax.png";
import tcc from "@/public/assets/Activity/tcc.png";
import pricewatercooper from "@/public/assets/Activity/pricewater.png";
import asce from "@/public/assets/Activity/hackathon.jpg";

// Icons
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaCode, FaDatabase, FaPython, FaJava, FaHtml5, FaReact, FaNodeJs, FaToolbox, FaCalendarAlt, FaGraduationCap, FaMapMarkerAlt, FaAward, FaArrowRight } from 'react-icons/fa';
import { FaGolang, FaPhone, FaXTwitter } from "react-icons/fa6";
import { SiCplusplus, SiC, SiTypescript, SiR, SiNumpy, SiPandas, SiScikitlearn, SiPytorch, SiTensorflow, SiOpencv, SiExpress, SiAxios, SiTailwindcss, SiLooker, SiTableau, SiGooglesheets, SiPostman } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { MdOutlineWebAsset, MdLocalActivity } from "react-icons/md";
import { RiNextjsFill, RiFileExcel2Fill } from "react-icons/ri";
import { DiVisualstudio } from "react-icons/di";
import { GrCertificate } from "react-icons/gr";
import { GoProjectRoadmap } from "react-icons/go";
import { IoLogoJavascript, IoLogoCss3, IoLibrary } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

export default function Home() {
  const projects = [
    {
      title: "Current Wrestling Champions",
      description: "I'm a wrestling fan. I love watching professional wrestling so I made this website to show the current champions in major promotions like (WWE, NXT, AEW, etc.) by using React & Vite and use GitHub to deploy.",
      imageSrc: currentchamp1,
      link: "https://saksit-jittasopee.github.io/current-champions/",
      imageFile: "/assets/Projects/Current_Wrestling_Champions.pdf",
      tags: ['React', 'JavaScript', 'HTML / CSS', 'Vite'],
    },
    {
      title: "R-Assignments-Project",
      description: "This is an in-class lab assignment for 'Applied Statistics for Computing' by using R with the group of 2. Making histogram, scatterplot, qqplot, boxplot using R to read data from CSV.",
      imageSrc: teasmoker,
      link: "https://github.com/Saksit-Jittasopee/R-Programming-Lab-Lesson",
      imageFile: "/assets/Projects/R-Project.pdf",
      tags: ['R', 'Data Science', 'ggplot2', 'tidyverse'],
    },
    {
      title: "CD Keys Website",
      description: "CD-Keys Website using React, Vite, and JavaScript to develop frontend, and Node.js & MySQL for backend authentication with JWT and Steam API player counts.",
      imageSrc: webapp1,
      link: "https://github.com/Saksit-Jittasopee/Ayema5kon-project",
      imageFile: "/assets/Projects/Ayema5kon.pdf",
      tags: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'MySQL'],
    },
    {
      title: "Python-Charts",
      description: "Python data visualization project using Pandas & Matplotlib to create Bar Charts, Scatter Plots, Pie Charts, Line Charts, and Histograms from movies.csv dataset.",
      imageSrc: bar,
      link: "https://github.com/Saksit-Jittasopee/python-charts",
      imageFile: "/assets/Projects/Python-Chart.pdf",
      tags: ['Python', 'Pandas', 'Matplotlib'],
    },
    {
      title: "chanasorn-travel-2025",
      description: "Data analysis and prediction project tracking travel trends using Python, Pandas, NumPy, Matplotlib, and Scikit-Learn with Linear Regression modeling.",
      imageSrc: chanasorntravel,
      link: "https://github.com/Saksit-Jittasopee/chanasorn-travel-2025",
      imageFile: "/assets/Projects/chanasorn-travel-2025.pdf",
      tags: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-Learn'],
    },
    {
      title: "class-discord-bot",
      description: "Discord reminder bot written in Go that sends notifications for university classes every weekday at 7 AM. Deployed and active.",
      imageSrc: monday,
      link: "https://github.com/Saksit-Jittasopee/class-discord-bot",
      imageFile: "/assets/Projects/class-discord-bot.pdf",
      tags: ['Go', 'Bot', 'Discord Bot'],
    },
    {
      title: "gender-classification-deep-learning",
      description: "Deep learning system classifying gender using OpenCV DNN and MobileNet_v2 PyTorch model with webcam live feed and Streamlit UI.",
      imageSrc: gender,
      link: "https://github.com/Saksit-Jittasopee/gender-classification-deep-learning",
      imageFile: "/assets/Projects/gender-classification-deep-learning.pdf",
      tags: ['Python', 'OpenCV', 'PyTorch', 'Streamlit', 'Deep Learning'],
    },
    {
      title: "age-prediction-deep-learning",
      description: "CNN model predicting ages from facial imagery using PyTorch and OpenCV CascadeClassifier, deployed with Streamlit.",
      imageSrc: age,
      link: "https://github.com/Saksit-Jittasopee/age-prediction-deep-learning",
      imageFile: "/assets/Projects/age_prediction.pdf",
      tags: ['Python', 'OpenCV', 'PyTorch', 'Streamlit', 'CNN'],
    },
    {
      title: "Weather App Mobile Application",
      description: "Mobile weather application built with Flutter & Dart, backed by Node.js, PostgreSQL, Prisma, and Oracle Cloud infrastructure.",
      imageSrc: ikillair,
      link: "https://github.com/Saksit-Jittasopee/ITDS283-IKillAir-6787015-6787077",
      imageFile: "/assets/Projects/ITDS283_Sec2_Group08_Presentation.pdf",
      tags: ['Flutter', 'Dart', 'Node.Js', 'PostgreSQL', 'Oracle Cloud'],
    },
    {
      title: "Full-Stacks-IoT-Project",
      description: "IoT smart device system integrating ESP32 Arduino, Node-RED, Netpie, Thingsboard, and Dockerized InfluxDB with Telegram alerts.",
      imageSrc: iot_project,
      link: "",
      imageFile: "/assets/Projects/iot_project.pdf",
      tags: ['Arduino', 'Node-RED', 'Netpie', 'Thingsboard', 'InfluxDB'],
    },
    {
      title: "healthcare-insurance-fraud-detection",
      description: "Deep learning classification model analyzing insurance fraud records with data preprocessing, TensorFlow/Keras, and Scikit-Learn.",
      imageSrc: healthcare,
      link: "https://github.com/Saksit-Jittasopee/healthcare-insurance-fraud-detection",
      imageFile: "/assets/Projects/healthcare_fraud_detection.pdf",
      tags: ['Python', 'Tensorflow', 'Keras', 'Deep Learning'],
    },
    {
      title: "nlp-spam-email-detection",
      description: "NLP transformer pipeline using AutoModelForSequenceClassification to detect spam emails with high classification accuracy.",
      imageSrc: nlp_email,
      link: "https://github.com/Saksit-Jittasopee/nlp-spam-email-detection",
      imageFile: "/assets/Projects/nlp_email.pdf",
      tags: ['Python', 'Transformers', 'NLP', 'Scikit-Learn'],
    },
    {
      title: "shirt-size-recommendation",
      description: "Deep learning model predicting appropriate shirt sizing based on body measurements using TensorFlow, Keras, and Streamlit.",
      imageSrc: shirt_size,
      link: "https://github.com/Saksit-Jittasopee/shirt-size-recommendation",
      imageFile: "/assets/Projects/shirt_size_recommendation.pdf",
      tags: ['Python', 'Tensorflow', 'Streamlit', 'Deep Learning'],
    },
  ];

  const certificates = [
    {
      title: "CCNA: Introduction to Networks",
      description: "Networking fundamentals, IP addressing, Ethernet protocols, and switch/router configuration.",
      imageSrc: CCNACertificate,
      link: "https://www.credly.com/badges/15a5588a-98df-45aa-986b-7a12a01a8d61",
      imageFile: "/assets/Certificate/CCNA-_Introduction_to_Networks.pdf",
    },
    {
      title: "Data Analytics Essentials",
      description: "Data transformation, organization, and visualization using Excel, SQL, and Tableau.",
      imageSrc: DataAnalyticsCer,
      link: "https://www.credly.com/badges/7f404bd4-6060-4068-bea8-4b0b54b097f5",
      imageFile: "/assets/Certificate/DataAnalyticsEssentials.pdf",
    },
    {
      title: "Introduction to Data Science",
      description: "Core data science principles, data engineering concepts, and AI/ML job functions.",
      imageSrc: IntroDataScienceCer,
      link: "https://www.credly.com/badges/635db776-1c4a-4a16-9832-46edb22453c3",
      imageFile: "/assets/Certificate/Introduction_to_Data_Science_certificate.pdf",
    },
    {
      title: "Data Science Essentials With Python",
      description: "Foundational Python skills for data analysis, cleaning, and statistical visualizations.",
      imageSrc: DataSciencePythonCer,
      link: "https://www.credly.com/badges/085c5d2f-107f-467c-b76d-4986637e4a81",
      imageFile: "/assets/Certificate/DataScienceEssentialswithPython.pdf",
    },
    {
      title: "Data Fundamentals",
      description: "Data management techniques and data refining using IBM Watson Studio.",
      imageSrc: DataFundamentalCer,
      link: "https://www.credly.com/badges/a13c435a-1106-4015-9bff-18d7702b5d89",
      imageFile: "/assets/Certificate/IBMDesign-Data.pdf",
    },
    {
      title: "Introduction to Modern AI",
      description: "Machine learning, computer vision, natural language processing, and deep neural networks.",
      imageSrc: ModernAICer,
      link: "https://www.credly.com/badges/c0d60c22-c3e0-4ac4-bfa2-dc37e7ab4d36",
      imageFile: "/assets/Certificate/Introduction_to_Modern_AI_certificate.pdf",
    },
    {
      title: "Data Science 101",
      description: "Foundations of data science, predictive modeling, and analytics pipelines.",
      imageSrc: datascience101,
      link: "https://www.credly.com/badges/9e618b24-5cdb-4999-9ca1-12ef88d1dcaf",
      imageFile: "/assets/Certificate/DataScience101.pdf",
    },
    {
      title: "AI Fundamentals",
      description: "Core concepts of artificial intelligence and machine learning applications across industries.",
      imageSrc: AIFundamental4,
      link: "https://www.credly.com/badges/e9e43c65-8c14-4ea8-843a-1a8c44ed1002",
      imageFile: "/assets/Certificate/IBMDesign-AI.pdf",
    },
    {
      title: "Introduction to IoT",
      description: "Connecting smart devices, intent-based networking, and edge sensor telemetry.",
      imageSrc: Intro2IoT,
      link: "https://www.credly.com/badges/26a17b1c-4272-4842-bd8f-163d66e643e1",
      imageFile: "/assets/Certificate/Introduction_to_IoT_certificate.pdf",
    },
    {
      title: "C++ Essentials 1",
      description: "C++ syntax, memory pointers, control structures, and standard library components.",
      imageSrc: Cpp,
      link: "https://www.credly.com/badges/013a96b1-e24c-4a34-a119-a3e787281e93",
      imageFile: "/assets/Certificate/C--_Essentials_1_certificate.pdf",
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Network defenses, encryption, risk assessments, and ISO/IEC 27001 IT auditing.",
      imageSrc: Cybersecurity,
      link: "",
      imageFile: "/assets/Certificate/cybersecurity.pdf",
    },
    {
      title: "Zero Trust Security",
      description: "Zero trust architecture, identity verification, and perimeterless defense.",
      imageSrc: ZeroTrust,
      link: "",
      imageFile: "/assets/Certificate/Zero_Trust_Security.pdf",
    },
    {
      title: "Digital Awareness",
      description: "Digital literacy, responsible digital citizenship, and information protection.",
      imageSrc: DigitalAwareness,
      link: "",
      imageFile: "/assets/Certificate/digital_awareness.pdf",
    },
    {
      title: "GenAI: เสริมทักษะนักวิจัยยุคดิจิทัล",
      description: "Generative AI models, prompt engineering, and digital research techniques.",
      imageSrc: GenAI,
      link: "",
      imageFile: "/assets/Certificate/GenAI.pdf",
    },
    {
      title: "Generative AI Fundamentals",
      description: "Databricks generative AI credentials covering LLMs and retrieval pipelines.",
      imageSrc: databricksai,
      link: "https://credentials.databricks.com/f36d665b-a3ca-472a-ba77-d4d358ef0e1d#acc.5y3vJLUu",
      imageFile: "/assets/Certificate/DataBricks_GenAI_Certificate.pdf",
    },
    {
      title: "Get Started with Databricks for Data Engineering",
      description: "Lakehouse medallion architecture, Delta Lake tables, and Databricks workflows.",
      imageSrc: databricksdataen,
      link: "https://credentials.databricks.com/afc04fce-aec3-4175-8628-cf9f15646ab0#acc.5hPuryTG",
      imageFile: "/assets/Certificate/Databricks_Data_Engineering_with_Databricks.pdf",
    },
    {
      title: "DevOps Essentials for Data Engineering",
      description: "PySpark modularity, automated unit testing with pytest, and Databricks Git pipelines.",
      imageSrc: databricksdevops,
      link: "https://credentials.databricks.com/3dcf15c1-a6ab-4ecd-b9d6-5d4f476c1de2#acc.6fhODaqB",
      imageFile: "/assets/Certificate/Databricks_DevOps_Data_Engineering.pdf",
    },
  ];

  const activities = [
    {
      title: "The Mall Group x Mahidol University",
      description: "Attended seminar on 'Future-Proof Marketing: Loyalty / AI / Sustainability' organized by The Mall Group and Faculty of ICT.",
      imageSrc: themall,
    },
    {
      title: "Study Visit at Synergy Group",
      description: "Educational study tour to Synergy Technology Co., Ltd. learning about IoT devices and smart industrial technologies.",
      imageSrc: synergy,
    },
    {
      title: "MFEG Company Lecture",
      description: "Special keynote lecture on 'The Endless Journey: Lifelong Learning in the Era of AI' by Mr. Damrongsak Reetanon.",
      imageSrc: mfeg,
    },
    {
      title: "PEOPLE INNOVATE Co. Lecture",
      description: "Lecture on 'Strategic Thinking in Real Life' by Ms. Theresa Mathawaphan, CEO & Co-founder of PEOPLE INNOVATE Co.",
      imageSrc: people_innovation,
    },
    {
      title: "Mahidol AI Day",
      description: "MOU signing and summit featuring talks by SCB InnovestX, Central Retail, and enterprise AI pioneers.",
      imageSrc: ai_day,
    },
    {
      title: "ICT Mahidol x 1 Moby: Resume Design",
      description: "Resume optimization and HR perspective workshop with 1Moby and Faculty of ICT.",
      imageSrc: event_1moby,
    },
    {
      title: "Skill for the Top: Project Management",
      description: "Academic seminar addressing project execution strategies and operational hurdles by ICT alumni.",
      imageSrc: skill_to_the_top,
    },
    {
      title: "IT Audit ISO/IEC 27001",
      description: "Cybersecurity audit seminar exploring ISO/IEC 27001 compliance standards with hands-on problem solving.",
      imageSrc: it_audit,
    },
    {
      title: "Software Engineering Keynote",
      description: "Industry lecture by Mr. Anuchit on essential mindsets and engineering practices for modern software developers.",
      imageSrc: soft_en,
    },
    {
      title: "Data Science Special Talk",
      description: "Lecture by Mr. Kan Ouivirach from ODD-E on data pipelines, exploratory analysis, and product management.",
      imageSrc: data_science,
    },
    {
      title: "Study Visit at SCGJWD Logistics",
      description: "Industry visit to SCGJWD Logistics analyzing supply-chain digital tracking and logistics management.",
      imageSrc: scg_jwd,
    },
    {
      title: "SEC Lecture on Data Architecture",
      description: "Keynote on data engineering, analytics, and architecture at the Securities and Exchange Commission (SEC).",
      imageSrc: sec_data_en,
    },
    {
      title: "Study Visit at Bank of Thailand",
      description: "Behind-the-scenes exploration of banking technologies, financial infrastructure, and monetary policy systems.",
      imageSrc: bank,
    },
    {
      title: "iTAX Product Development Talk",
      description: "Product design and startup journey lecture with Asst. Prof. Dr. Mickey Yutthana Srisavat, CEO of iTAX.",
      imageSrc: itax,
    },
    {
      title: "TCC Group: Smart Factory",
      description: "Industrial IoT automation, connected sensors, and digital manufacturing workflows with TCC Technology.",
      imageSrc: tcc,
    },
    {
      title: "PwC: Cybersecurity Consultant Career",
      description: "Consulting career insights, governance, and threat posture advisory by Ms. Thanika Chiengthong from PwC.",
      imageSrc: pricewatercooper,
    },
    {
      title: "ASCE Hackathon 2026",
      description: "Siriraj Hospital x ICT Mahidol hackathon developing deep learning models for Coronary Artery Calcium (CAC) scoring. Finished 9th.",
      imageSrc: asce,
    },
  ];

  return (
    <div className='min-h-screen flex flex-col bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 overflow-x-hidden'>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-14">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-3.5 py-1.5 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-semibold">
              👋 Welcome to my portfolio
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">Saksit Jittasopee</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-200 mb-5">
              3rd Year DST Student at Mahidol University
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-6">
              I'm studying B.Sc in Digital Science & Technology (DST) at Faculty of Information and Communication Technology, Mahidol University. Former Data Analyst Intern at Beryl8 (June - July 2026). Aspiring Data Scientist & Software Engineer passionate about machine learning, data engineering, and modern web applications.
            </p>

            <CV />
          </div>

          <div className="shrink-0 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-30 group-hover:opacity-70 blur-lg transition duration-500"></div>
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <Image
                  src={profileImg}
                  alt="Saksit Jittasopee"
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700/80 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <span className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 font-bold">
              👤
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">About Me</h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I am a 3rd Year student in the Bachelor of Science in Digital Science & Technology (DST) program at the Faculty of Information and Communication Technology, Mahidol University. I write code in Python, Java, HTML, CSS (Bootstrap & Tailwind), JavaScript, TypeScript, C, C++, C#, R, SQL, and Go. In the Python data ecosystem, I work with NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, PyTorch, TensorFlow, and OpenCV. I am eager to deepen my expertise in data science, predictive modeling, and scalable full-stack software. I also work with enterprise productivity and visualization tools including Microsoft Office, Power BI, Google Looker Studio, Tableau Public & Desktop, Postman, and Oracle VirtualBox.
          </p>
        </div>
      </motion.section>

      {/* Skills Grid */}
      <motion.section
        className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Technical <span className="text-blue-600 dark:text-blue-400">Skillset</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400">Core technologies, libraries, and frameworks I build with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Languages */}
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                <FaCode size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3 text-slate-700 dark:text-slate-300">
              <a href="https://www.python.org/" title="Python" className="hover:text-blue-600 transition-colors"><FaPython size={26}/></a>
              <a href="https://www.java.com/" title="Java" className="hover:text-red-600 transition-colors"><FaJava size={26}/></a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" title="HTML5" className="hover:text-orange-500 transition-colors"><FaHtml5 size={26}/></a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" title="CSS3" className="hover:text-blue-500 transition-colors"><IoLogoCss3 size={26}/></a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript" className="hover:text-amber-500 transition-colors"><IoLogoJavascript size={26}/></a>
              <a href="https://www.typescriptlang.org/" title="TypeScript" className="hover:text-blue-600 transition-colors"><SiTypescript size={24}/></a>
              <a href="https://learn.microsoft.com/en-us/cpp/c-language/" title="C" className="hover:text-blue-700 transition-colors"><SiC size={24}/></a>
              <a href="https://cplusplus.com/" title="C++" className="hover:text-blue-600 transition-colors"><SiCplusplus size={24}/></a>
              <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" title="C#" className="hover:text-purple-600 transition-colors"><TbBrandCSharp size={26}/></a>
              <a href="https://www.r-project.org/" title="R" className="hover:text-blue-700 transition-colors"><SiR size={24}/></a>
              <a href="https://www.mysql.com/" title="SQL / MySQL" className="hover:text-cyan-600 transition-colors"><FaDatabase size={24}/></a>
              <a href="https://golang.org/" title="Go" className="hover:text-cyan-500 transition-colors"><FaGolang size={26}/></a>
            </div>
          </div>

          {/* AI / ML */}
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                <IoLibrary size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">AI / Data Science</h3>
            </div>
            <div className="flex flex-wrap gap-3 text-slate-700 dark:text-slate-300">
              <a href="https://numpy.org/" title="NumPy" className="hover:text-blue-500 transition-colors"><SiNumpy size={24}/></a>
              <a href="https://pandas.pydata.org/" title="Pandas" className="hover:text-indigo-500 transition-colors"><SiPandas size={24}/></a>
              <a href="https://scikit-learn.org/" title="Scikit-Learn" className="hover:text-amber-600 transition-colors"><SiScikitlearn size={24}/></a>
              <a href="https://pytorch.org/" title="PyTorch" className="hover:text-rose-500 transition-colors"><SiPytorch size={24}/></a>
              <a href="https://www.tensorflow.org/" title="TensorFlow" className="hover:text-orange-500 transition-colors"><SiTensorflow size={24}/></a>
              <a href="https://opencv.org/" title="OpenCV" className="hover:text-emerald-500 transition-colors"><SiOpencv size={24}/></a>
            </div>
          </div>

          {/* Web */}
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                <MdOutlineWebAsset size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Web Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-3 text-slate-700 dark:text-slate-300">
              <a href="https://react.dev/" title="React" className="hover:text-cyan-400 transition-colors"><FaReact size={26}/></a>
              <a href="https://nextjs.org/" title="Next.js" className="hover:text-slate-900 dark:hover:text-white transition-colors"><RiNextjsFill size={26}/></a>
              <a href="https://nodejs.org/" title="Node.js" className="hover:text-emerald-600 transition-colors"><FaNodeJs size={26}/></a>
              <a href="https://expressjs.com/" title="Express" className="hover:text-slate-700 dark:hover:text-white transition-colors"><SiExpress size={24}/></a>
              <a href="https://axios-http.com/" title="Axios" className="hover:text-purple-600 transition-colors"><SiAxios size={24}/></a>
              <a href="https://tailwindcss.com/" title="Tailwind CSS" className="hover:text-cyan-500 transition-colors"><SiTailwindcss size={24}/></a>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
                <FaToolbox size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Tools & Analytics</h3>
            </div>
            <div className="flex flex-wrap gap-3 text-slate-700 dark:text-slate-300">
              <a href="https://github.com/Saksit-Jittasopee" title="GitHub" className="hover:text-slate-900 dark:hover:text-white transition-colors"><FaGithub size={24}/></a>
              <a href="https://visualstudio.microsoft.com/" title="VS Code" className="hover:text-blue-500 transition-colors"><DiVisualstudio size={26}/></a>
              <a href="https://www.microsoft.com/en-us/microsoft-365/excel" title="Excel" className="hover:text-emerald-600 transition-colors"><RiFileExcel2Fill size={24}/></a>
              <a href="https://lookerstudio.google.com/" title="Looker Studio" className="hover:text-blue-500 transition-colors"><SiLooker size={24}/></a>
              <a href="https://sheets.google.com/" title="Google Sheets" className="hover:text-emerald-500 transition-colors"><SiGooglesheets size={24}/></a>
              <a href="https://www.tableau.com/" title="Tableau" className="hover:text-blue-600 transition-colors"><SiTableau size={24}/></a>
              <a href="https://www.postman.com/" title="Postman" className="hover:text-orange-500 transition-colors"><SiPostman size={24}/></a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
              <GoProjectRoadmap size={14} />
              <span>Portfolio Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>View All ({projects.length})</span>
            <FaArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.slice(0, 6).map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              link={project.link}
              imageFile={project.imageFile}
              tags={project.tags}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-blue-500/25 transition-all"
          >
            <span>Explore All Projects</span>
            <FaArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
              <GrCertificate size={14} />
              <span>Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Certificates & <span className="text-blue-600 dark:text-blue-400">Badges</span>
            </h2>
          </div>
          <Link
            href="/certificate"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>View All ({certificates.length})</span>
            <FaArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.slice(0, 6).map((cert, idx) => (
            <CertificateCard
              key={idx}
              title={cert.title}
              description={cert.description}
              imageSrc={cert.imageSrc}
              link={cert.link}
              imageFile={cert.imageFile}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/certificate"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-blue-500/25 transition-all"
          >
            <span>Explore All Certificates</span>
            <FaArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
              <MdLocalActivity size={14} />
              <span>Workshops & Seminars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Recent <span className="text-blue-600 dark:text-blue-400">Activities</span>
            </h2>
          </div>
          <Link
            href="/activity"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <span>View All ({activities.length})</span>
            <FaArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {activities.slice(0, 6).map((activity, idx) => (
            <ActivityCard
              key={idx}
              title={activity.title}
              description={activity.description}
              imageSrc={activity.imageSrc}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/activity"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md hover:shadow-blue-500/25 transition-all"
          >
            <span>Explore All Activities</span>
            <FaArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
            <FaGraduationCap size={14} />
            <span>Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Academic <span className="text-blue-600 dark:text-blue-400">Journey</span>
          </h2>
        </div>

        <div className="relative border-l-2 border-blue-500/40 dark:border-blue-500/30 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-blue-600 ring-4 ring-white dark:ring-[#0b1120] flex items-center justify-center transition-transform group-hover:scale-125">
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 flex items-center gap-1.5">
                  <FaCalendarAlt size={12} /> 2024 - Present
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 flex items-center gap-1.5">
                  <FaAward size={12} /> GPA: 3.63
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Mahidol University</h3>
              <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">
                Bachelor of Science in Digital Science & Technology (B.Sc DST)
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <FaMapMarkerAlt className="text-rose-500" /> Salaya Campus, Nakhon Pathom, Thailand
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-purple-600 ring-4 ring-white dark:ring-[#0b1120] flex items-center justify-center transition-transform group-hover:scale-125">
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 flex items-center gap-1.5">
                  <FaCalendarAlt size={12} /> 2018 - 2024
                </span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 flex items-center gap-1.5">
                  <FaAward size={12} /> GPA: 3.94
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Kanchanapisek Wittayalai Nakhon Pathom</h3>
              <p className="text-base font-semibold text-purple-600 dark:text-purple-400 mb-2">
                High School (Mathematics - English Program)
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <FaMapMarkerAlt className="text-rose-500" /> Salaya, Nakhon Pathom, Thailand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-2">
            <FaPhone size={12} />
            <span>Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="p-6 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
              <IoMdMail size={24} />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Email</h3>
            <a href="mailto:saksit.jit@student.mahidol.ac.th" className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline break-all">
              saksit.jit@student.mahidol.ac.th
            </a>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200 flex items-center justify-center mb-3">
              <FaGithub size={24} />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">GitHub</h3>
            <a href="https://github.com/Saksit-Jittasopee" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline">
              @Saksit-Jittasopee
            </a>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
              <FaLinkedin size={24} />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/saksit-jittasopee-743981382/" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline">
              Saksit Jittasopee
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <FaMapMarkerAlt className="text-rose-500" size={18} />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Faculty of ICT, Mahidol University</h3>
          </div>
          <ContactMapLoader />
        </div>
      </section>

      <Footer />
    </div>
  );
}
