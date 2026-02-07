"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import image from "@/public/assets/Home/image.jpg";
import { motion } from "framer-motion";
import ContactMapLoader from "@/components/ContactMapLoader";
import DataAnalyticsCer from "@/public/assets/Certificate/DataAnalyticsEssentialsCer.png";
import IntroDataScienceCer from "@/public/assets/Certificate/IntroductiontoDataScience.png"
import DataSciencePythonCer from "@/public/assets/Certificate/DataScienceEssentialswithPython.png"
import DataFundamentalCer from "@/public/assets/Certificate/IBM_Data_Fundamentals.png"
import ModernAICer from "@/public/assets/Certificate/Introduction_to_Modern_AI_cer.png"
import AIFundamental4 from "@/public/assets/Certificate/IBM_AI_Fundamentals.png"
import Cybersecurity from "@/public/assets/Certificate/cybersecurity.png";
import ZeroTrust from "@/public/assets/Certificate/Zero Trust Security.png";
import DigitalAwareness from "@/public/assets/Certificate/digital awareness.png";
import CCNACertificate from "@/public/assets/Certificate/CCNA-_Introduction_to_Networks.png"
import Cpp from "@/public/assets/Certificate/CPP_Essentials.png"
import Intro2IoT from "@/public/assets/Certificate/Introduction_to_IoT.png"
import GenAI from "@/public/assets/Certificate/GenAI.png"
import webapp1 from "@/public/assets/Projects/Ayema5kon1.png";
import currentchamp1 from "@/public/assets/Projects/Current_Wrestling_Champions_1.png";
import teasmoker from "@/public/assets/Projects/Tea_Smoker_Chart.png";
import bar from "@/public/assets/Projects/bar.png"
import CV from "@/components/CV"
import monday from "@/public/assets/Projects/monday.png"
import chanasorntravel from "@/public/assets/Projects/chanasorn_travel_2025_3.png"
import { IoMdMail} from "react-icons/io";
import { IoLogoJavascript, IoLogoCss3, IoLibrary } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaCode, FaDatabase, FaPython, FaJava, FaHtml5, FaReact, FaNodeJs, FaToolbox, FaCalendarAlt } from 'react-icons/fa';
import { FaGolang, FaPhone, FaXTwitter } from "react-icons/fa6";
import { SiCplusplus, SiC, SiTypescript, SiR, SiNumpy, SiPandas, SiScikitlearn, SiPytorch, SiTensorflow, SiOpencv, SiExpress, SiAxios, SiTailwindcss, SiLooker, SiTableau, SiGooglesheets, SiPostman } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { MdOutlineWebAsset } from "react-icons/md";
import { RiNextjsFill, RiFileExcel2Fill } from "react-icons/ri";
import { DiVisualstudio } from "react-icons/di";
import ProjectCard from '@/components/ProjectCard';
import CertificateCard from "@/components/CertificateCard";
import { GrCertificate } from "react-icons/gr";
import { GoProjectRoadmap } from "react-icons/go";
import { CiCirclePlus } from "react-icons/ci";

export default function Home() {
  return (
    <div className='w-full overflow-x-hidden'>
  <Navbar></Navbar>
  
  <div className="mt-20 flex flex-col items-center justify-center m-5 md:flex-row md:items-start md:justify-start">
  <div className="mt-5 ml-0 text-center md:ml-10 pt-2 md:text-left">
    <h1 className="text-5xl font-bold">Hi, I'm <span className="text-blue-600">Saksit Jittasopee</span></h1>
    <br></br>
    <h2 className="mt-4 text-5xl font-bold">I'm a 2nd Year Student at Mahidol University.</h2>
    <br></br>
    <p className="mt-4 text-lg">I'm studying B.Sc in Digital Science & Technology (DST) at Faculty of Information and Communication Technology. In the future I would like to study in Data Science's majors and work in Data Science role.</p>
  </div>
  <Image src={image} alt="Me" width={250} height={150} className="mt-5 ml-0 rounded-xl hover:scale-105 md:ml-10"></Image>
</div>
  
  <div className="flex flex-row justify-center ml-0 md:justify-start md:ml-10">
    <CV></CV>
  </div>
  
  <motion.div
    className="mt-20 text-center grid grid-cols-1"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div>
      <h1 className="m-5 text-4xl font-bold">About Me</h1>
      <h1 className="m-5 text-xl flex justify-center text-center ml-0 md:justify-start md:ml-20 md:text-left">
        I'm a 2nd Year Student at Mahidol University. Currently, I'm studying B.Sc in Digital Science & Technology (DST) at Faculty of Information and Communication Technology. I can write various programming languages such as Python, Java, HTML, CSS (Bootstrap & Tailwind), JavaScript, TypeScript, C, C++, C#, R, SQL and Go. In Python I can also write NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, PyTorch, Tensorflow and OpenCV. I'm interested in Data Science and wish to study more in the future. I can use various software such as Microsoft Word, Powerpoint, Excel, Power BI, Google Looker Studio, Tableau Public, Visual Studio Code, IBM SPSS Statistics, Postman, Oracle VirtualBox and more.
      </h1>
    </div>
  </motion.div>

  <motion.div
    className="mt-20 text-center grid grid-cols-1"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-5">
          <div className="rounded-2xl p-8 shadow-sm border border-blue-600 transition hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                 <FaCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                <a href="https://www.python.org/"><FaPython size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://www.java.com/"><FaJava size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><FaHtml5 size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><IoLogoCss3 size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><IoLogoJavascript size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://www.typescriptlang.org/"><SiTypescript size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://learn.microsoft.com/en-us/cpp/c-language/c-programming-language-overview"><SiC size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://cplusplus.com/"><SiCplusplus size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://learn.microsoft.com/en-us/dotnet/csharp/"><TbBrandCSharp size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://www.r-project.org/"><SiR size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://www.mysql.com/"><FaDatabase size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://golang.org/"><FaGolang size={25} className="cursor-pointer hover:scale-110"/></a>
                <CiCirclePlus size={25} className="cursor-pointer hover:scale-110"/>
            </div>
          </div>

          <div className="rounded-2xl p-8 shadow-sm border border-blue-600 transition hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                 <IoLibrary className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Machine Learning / AI Libraries</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                <a href="https://numpy.org/"><SiNumpy size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://pandas.pydata.org/"><SiPandas size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://scikit-learn.org/"><SiScikitlearn size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://pytorch.org/"><SiPytorch size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://www.tensorflow.org/"><SiTensorflow size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://opencv.org/"><SiOpencv size={25} className="cursor-pointer hover:scale-110"/></a>
                <CiCirclePlus size={25} className="cursor-pointer hover:scale-110"/>
            </div>
          </div>

          <div className="rounded-2xl p-8 shadow-sm border border-blue-600 transition hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                 <MdOutlineWebAsset className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Web Frameworks & APIs</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                <a href="https://react.dev/"><FaReact size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://nodejs.org/en/"><FaNodeJs size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://nextjs.org/"><RiNextjsFill size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://expressjs.com/"><SiExpress size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://axios-http.com/"><SiAxios size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://tailwindcss.com/"><SiTailwindcss size={25} className="cursor-pointer hover:scale-110"/></a>
                <CiCirclePlus size={25} className="cursor-pointer hover:scale-110"/>
            </div>
          </div>

          <div className="rounded-2xl p-8 shadow-sm border border-blue-600 transition hover:shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                 <FaToolbox className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Tools & Platforms</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                <a href="https://github.com/Saksit-Jittasopee"><FaGithub size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://visualstudio.microsoft.com/"><DiVisualstudio size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://www.microsoft.com/en-us/microsoft-365/excel"><RiFileExcel2Fill size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://lookerstudio.google.com/"><SiLooker size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://sheets.google.com/"><SiGooglesheets size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://www.tableau.com/"><SiTableau size={25} className="cursor-pointer hover:scale-110"/></a>
                <a href="https://www.postman.com/"><SiPostman size={25} className="cursor-pointer hover:scale-110"/></a>
                <CiCirclePlus size={25} className="cursor-pointer hover:scale-110"/>
            </div>
          </div>
  </div>
  </motion.div>
  
  <motion.div
    className="mt-20 text-center"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="mt-20 flex justify-center items-center gap-3 mb-8">
      <span className="p-2 bg-blue-100 text-blue-600 rounded-lg dark:bg-blue-900 dark:text-blue-300">
            <GoProjectRoadmap size={25}/>
        </span>
      <h1 className="text-3xl font-bold">My Projects</h1>
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ProjectCard 
    title="Current Wrestling Champions"
    description="I'm a wrestling fan. I love watching professional wrestling so I made this website to show the current champions in major promotions like (WWE, NXT, AEW, etc.) by using React & Vite and use GitHub to deploy. This is my very first web project so It may look simple and basic but I am very proud with this work."
    imageSrc={currentchamp1}
    link="https://saksit-jittasopee.github.io/current-champions/"
    imageFile="/saksit-website/Current_Wrestling_Champions.pdf"
    tags={['React', 'JavaScript', 'HTML / CSS', 'Vite']}
      />
    </div>
  </motion.div>

  <motion.div
    className="mt-20 text-center"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="flex justify-center flex-wrap"> 
      <ProjectCard 
    title="R-Assignments-Project"
    description="This is an in-class lab assignment for 'Applied Statistics for Computing' by using R with the group of 2. We have assigned an assignment to make histogram, scatterplot, qqplot, boxplot and many more using R to read a data from CSV file."
    imageSrc={teasmoker}
    link="https://github.com/Saksit-Jittasopee/R-Programming-Lab-Lesson"
    imageFile="/saksit-website/R-Project.pdf"
    tags={['R', 'Data Science', 'ggplot2', 'tidyverse']}
      />
      </div>
  </motion.div>

  <motion.div
    className="mt-20 text-center"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="flex justify-center flex-wrap"> 
      <ProjectCard 
    title="CD Keys Website"
    description="This is a project for 'Web Technologies and Application' Class. We made the CD-Keys Website using React, Vite, and JavaScript to develop the frontend part and Node.Js and Javascript to develop backend and using MySQL as Database for this project. My role in this project was backend part doing the Authentication using JSON Web Token, Steam API Players Count, Search, MySQL Databases, and also the frontend part by using API to connect with backend and databases."
    imageSrc={webapp1}
    link="https://github.com/Saksit-Jittasopee/Ayema5kon-project"
    imageFile="/saksit-website/Ayema5kon.pdf"
    tags={['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL']}
      />
      </div>
    </motion.div>
  

<motion.div
    className="mt-20 text-center"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.1 }}
  >
  <div className="flex justify-center"> 
      <ProjectCard 
    title="Python-Charts"
    description="This project using Python libraries (Pandas, Matplotlib) to create each type of charts from movies.csv like Bar Chart, Horizontal Bar Chart, Scatter Plot, Pie Chart, Line Chart, and Histogram."
    imageSrc={bar}
    link="https://github.com/Saksit-Jittasopee/python-charts"
    imageFile="/saksit-website/Python-Chart.pdf"
    tags={['Python', 'Pandas', 'Matplotlib']}
      />
  </div>
  </motion.div>

  <motion.div
    className="mt-20 text-center"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.1 }}
  >
  <div className="flex justify-center"> 
      <ProjectCard 
    title="chanasorn-travel-2025"
    description="My friend Chanasorn / Sugus. He's travelled a lot. So, we make this project to collect his data and making charts to show the results of his data in 2025 by using Python, Pandas, NumPy, Matplotlib, Scikit-Learn for this project."
    imageSrc={chanasorntravel}
    link="https://github.com/Saksit-Jittasopee/chanasorn-travel-2025"
    imageFile="/saksit-website/chanasorn-travel-2025.pdf"
    tags={['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-Learn', 'Linear-Regression']}
      />
  </div>
  </motion.div>

  <motion.div
    className="mt-20 text-center"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.1 }}
  >
  <div className="flex justify-center"> 
      <ProjectCard 
    title="class-discord-bot"
    description="This project A discord bot that remind class every weekday (Monday-Friday) at 7 AM. This bot is made with Go and Discord. You can invite this bot to your server and use it for free."
    imageSrc={monday}
    link="https://github.com/Saksit-Jittasopee/class-discord-bot"
    imageFile="/saksit-website/class-discord-bot.pdf"
    tags={['Go', 'Bot', 'Discord Bot']}
      />
  </div>
  </motion.div>
  
  <motion.div
    className="mt-20 text-center"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="mt-10 flex justify-center items-center gap-3 mb-8">
            <span className="p-2 bg-blue-100 text-blue-600 rounded-lg dark:bg-blue-900 dark:text-blue-300">
            <GrCertificate size={25}/>
            </span>
            <h1 className="text-3xl font-bold">My Certificate</h1>
          </div>

          <div className="flex justify-center"> 
      <CertificateCard 
      title="CCNA: Introduction to Networks"
      description="The first in a three-course series to build your networking skills and get ready for CCNA certification and associate-level jobs. Earner has knowledge of networking including IP addressing, how physical, data link protocols support Ethernet, can configure connectivity between switches, routers and end devices to provide access to local and remote resources."
      imageSrc={CCNACertificate}
      link="https://www.credly.com/badges/15a5588a-98df-45aa-986b-7a12a01a8d61"
      imageFile="/saksit-website/CCNA-_Introduction_to_Networks.pdf"
      />
      </div>
        </motion.div>
                  
              <motion.div
                  className="mt-20 text-center"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
              >
                  <div className="flex justify-center"> 
      <CertificateCard 
      title="Data Analytics Essentials"
      description="This course teaches you the fundamental tools of a data analyst. You will learn to transform, organize, and visualize data with spreadsheet tools such as Excel, SQL, and Tableau."
      imageSrc={DataAnalyticsCer}
      link="https://www.credly.com/badges/7f404bd4-6060-4068-bea8-4b0b54b097f5"
      imageFile="/saksit-website/DataAnalyticsEssentials.pdf"
      />
      </div>
                </motion.div>
                
                    <motion.div
                  className="mt-20 text-center"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
              >  
                        <div className="flex justify-center"> 
      <CertificateCard 
      title="Introduction to Data Science"
      description="This course introduces the basics of data science. You will learn what data science is, the different types of data, and broad understanding in basic concepts of Data Analytics, Data Engineering, Data Science and AI/ML related job functions."
      imageSrc={IntroDataScienceCer}
      link="https://www.credly.com/badges/635db776-1c4a-4a16-9832-46edb22453c3"
      imageFile="/saksit-website/Introduction_to_Data_Science_certificate.pdf"
      />
      </div>
                    </motion.div>
                          
                          <motion.div
                      className="mt-20 text-center"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true, amount: 0.3 }}
                      >  
                          <div className="flex justify-center"> 
      <CertificateCard 
      title="Data Science Essentials With Python"
      description="This course teaches you the foundational data science skills needed to begin a career in data science. You will learn how to work with data, perform data analysis, and create data visualizations using Python."
      imageSrc={DataSciencePythonCer}
      link="https://www.credly.com/badges/085c5d2f-107f-467c-b76d-4986637e4a81"
      imageFile="/saksit-website/DataScienceEssentialswithPython.pdf"
      />
      </div>
                        </motion.div>

                        <motion.div
                      className="mt-20 text-center"
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true, amount: 0.3 }}
                      >  
                          <div className="flex justify-center"> 
      <CertificateCard 
      title="Data Fundamentals"
      description="This course introduces you to the foundational concepts of data. You will learn about data types, data structures, and data management techniques. The individual has a conceptual understanding of how to clean, refine, and visualize data using IBM Watson Studio."
      imageSrc={DataFundamentalCer}
      link="https://www.credly.com/badges/a13c435a-1106-4015-9bff-18d7702b5d89"
      imageFile="/saksit-website/IBMDesign20251129-31-s9ks8h.pdf"
      />
      </div>
                      </motion.div>
                
                <motion.div
                  className="mt-20 text-center"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
              >
                  <div className="flex justify-center"> 
      <CertificateCard 
      title="Introduction to Modern AI"
      description="This course introduces you to the core concepts of modern artificial intelligence (AI). You will learn about machine learning, deep learning, natural language processing, and computer vision. The individual has a conceptual understanding of how AI is applied in various industries and use cases."
      imageSrc={ModernAICer}
      link="https://www.credly.com/badges/c0d60c22-c3e0-4ac4-bfa2-dc37e7ab4d36"
      imageFile="/saksit-website/Introduction_to_Modern_AI_certificate.pdf"
      />
      </div>
                </motion.div>
                
              <motion.div
                  className="mt-20 text-center"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex justify-center"> 
      <CertificateCard 
      title="AI Fundamentals"
      description="This course introduces you to the core concepts of modern artificial intelligence (AI). You will learn about machine learning, deep learning, natural language processing, and computer vision. The individual has a conceptual understanding of how AI is applied in various industries and use cases."
      imageSrc={AIFundamental4}
      link="https://www.credly.com/badges/e9e43c65-8c14-4ea8-843a-1a8c44ed1002"
      imageFile="/saksit-website/AI_Fundamentals_with_IBM_SkillsBuild_certificate.pdf"
      />
      </div>
                    </motion.div>

                    <motion.div
                  className="mt-20 text-center"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
              >
                  <div className="flex justify-center"> 
                    <CertificateCard 
                    title="Introduction to IoT"
                    description="The holder of this student-level credential has introductory knowledge of IoT and has an understanding how it enables the Digital Transformation along with emerging technologies such as data analytics, AI/ML and the increased attention on cybersecurity. They understand the importance of Intent Based Networking to be able to connect and secure tens of billions of new devices with ease."
                    imageSrc={Intro2IoT}
                    link="https://www.credly.com/badges/26a17b1c-4272-4842-bd8f-163d66e643e1"
                    imageFile="/saksit-website/Introduction_to_IoT_certificate.pdf"
                  />
                  </div>
              </motion.div>

                    <motion.div
                  className="mt-20 text-center"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
              >
                  <div className="flex justify-center"> 
                    <CertificateCard 
                    title="C++ Essentials 1"
                    description="Earners will know the syntax and semantics of the C++ language, including: data types, flow control, arrays and pointers, memory management and structure concepts, the fundamental programming techniques characteristic of the C++ language, and the use of the most basic standard library functions."
                    imageSrc={Cpp}
                    link="https://www.credly.com/badges/013a96b1-e24c-4a34-a119-a3e787281e93"
                    imageFile="/saksit-website/C--_Essentials_1_certificate.pdf"
                  />
                  </div>
              </motion.div>
                    
                  <motion.div
                  className="mt-20 text-center"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
              >
                  <div className="flex justify-center"> 
                    <CertificateCard 
                    title="Cybersecurity Fundamentals"
                    description="This course introduces you to the core concepts of cybersecurity. You will learn about network security, threat detection, and risk management. The individual has a conceptual understanding of how cybersecurity is applied in various industries, use cases and it audits."
                    imageSrc={Cybersecurity}
                    link=""
                    imageFile="/saksit-website/cybersecurity.pdf"
                  />
                  </div>
              </motion.div>

                    <motion.div
                  className="mt-20 text-center"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
              >
                  <div className="flex justify-center"> 
                    <CertificateCard 
                    title="Zero Trust Security"
                    description="This course introduces you to the core concepts of Zero Trust Security. You will learn about Zero Trust architecture, principles, and implementation strategies. The individual has a conceptual understanding of how Zero Trust Security is applied in various industries and use cases."
                    imageSrc={ZeroTrust}
                    link=""
                    imageFile="/saksit-website/Zero_Trust_Security.pdf"
                  />
                  </div>
              </motion.div>

                      <motion.div
                  className="mt-20 text-center"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
              >
                  <div className="flex justify-center"> 
                    <CertificateCard 
                    title="Digital Awareness"
                    description="This course introduces you to the core concepts of Digital Awareness. You will learn about digital literacy, cybersecurity, and responsible digital citizenship. The individual has a conceptual understanding of how digital awareness is applied in various industries and use cases."
                    imageSrc={DigitalAwareness}
                    link=""
                    imageFile="/saksit-website/digital_awareness.pdf"
                  />
                  </div>
              </motion.div>

              <motion.div
                  className="mt-20 text-center"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.3 }}
              >
                  <div className="flex justify-center"> 
                    <CertificateCard 
                    title="GenAI: เสริมทักษะนักวิจัยยุคดิจิทัล"
                    description="This course introduces you to the core concepts of Generative AI. You will learn about the fundamentals of generative AI, including machine learning, neural networks, and prompt engineering. The individual has a conceptual understanding of how generative AI is applied in various industries and use cases."
                    imageSrc={GenAI}
                    link=""
                    imageFile="/saksit-website/GenAI.pdf"
                  />
                  </div>
              </motion.div>
                
  <motion.div
  className="mt-20 ml-5"
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.3 }}
>
  <div className="mt-20 flex justify-center items-center gap-3 mb-8">
        <span className="p-2 bg-blue-100 text-blue-600 rounded-lg dark:bg-blue-900 dark:text-blue-300">
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
        </span>
        <h1 className="text-3xl flex font-bold">Education</h1>
      </div>

      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-5">                  
        
        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full -left-2 ring-4 ring-white dark:ring-gray-900">
            </span>
            
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition-shadow m-2 mr-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            Mahidol University
                        </h3>
                        <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">
                            Bachelor Degree in Digital Science & Technology (B.Sc)
                        </p>
                    </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <FaCalendarAlt className="mr-2" />
                    2024 - Now
                </div>
                
                <div className="text-gray-600 dark:text-gray-300 space-y-1">
                    <p>GPA: <span className="font-semibold text-gray-900 dark:text-white">3.56</span></p>
                    <p>Faculty of Information and Communication Technology</p>
                    <p className="text-sm text-gray-500">Mahidol University, Salaya Campus, Thailand</p>
                </div>
            </div>
        </li>

        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full -left-2 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            </span>

            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition-shadow m-2 mr-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            Kanchanapisek Wittayalai Nakhon Pathom, Thailand
                        </h3>
                        <p className="text-base font-semibold text-purple-600 dark:text-purple-400 mb-2">
                            High School (Mathematics - English)
                        </p>
                    </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <FaCalendarAlt className="mr-2" />
                    2018 - 2024
                </div>

                <div className="text-gray-600 dark:text-gray-300 space-y-1">
                    <p>GPA: <span className="font-semibold text-gray-900 dark:text-white">3.94</span></p>
                    <p className="text-sm text-gray-500">Kanchanapisek Wittayalai Nakhon Pathom, Salaya, Thailand</p>
                </div>
            </div>
        </li>
      </ol>
</motion.div>
  
  <motion.div
    className="mt-20 text-center"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
  >
  <div className="mt-10 flex justify-center items-center gap-3 mb-8">
      <span className="p-2 bg-blue-100 text-blue-600 rounded-lg dark:bg-blue-900 dark:text-blue-300">
          <FaPhone size={25}/>
      </span>
    <h1 className="text-3xl font-bold">Contact Information</h1>
  </div>

  <div className="mt-5 px-4 flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
    <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <a href="https://github.com/Saksit-Jittasopee" target="_blank" className="mt-2 hover:scale-110 transition-transform text-gray-800"><FaGithub size={75} /></a>
      <h1 className="mt-5 text-2xl font-bold text-gray-800">GitHub</h1>
      <h1 className="mt-2 text-sm font-bold text-gray-600">Link To Website:</h1>
      <a href="https://github.com/Saksit-Jittasopee" target="_blank" className="mt-1 text-blue-500 break-all hover:underline">View GitHub</a>
    </div>

    <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <a href="https://www.facebook.com/saksit.jittasopee.1" target="_blank" className="mt-2 hover:scale-110 transition-transform text-gray-800"><FaFacebook size={75} /></a>
      <h1 className="mt-5 text-2xl font-bold text-gray-800">Facebook</h1>
      <h1 className="mt-2 text-sm font-bold text-gray-600">Link To Website:</h1>
      <a href="https://www.facebook.com/saksit.jittasopee.1" target="_blank" className="mt-1 text-blue-500 break-all hover:underline">View Facebook</a>
    </div>

    <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <a href="https://www.instagram.com/saksitjittasopee" target="_blank" className="mt-2 hover:scale-110 transition-transform text-gray-800"><FaInstagram size={75} /></a>
      <h1 className="mt-5 text-2xl font-bold text-gray-800">Instagram</h1>
      <h1 className="mt-2 text-sm font-bold text-gray-600">Link To Website:</h1>
      <a href="https://www.instagram.com/saksitjittasopee" target="_blank" className="mt-1 text-blue-500 break-all hover:underline">View Instagram</a>
    </div>

    <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <a href="https://www.linkedin.com/in/saksit-jittasopee-743981382/" target="_blank" className="mt-2 hover:scale-110 transition-transform text-gray-800"><FaLinkedin size={75} /></a>
      <h1 className="mt-5 text-2xl font-bold text-gray-800">LinkedIn</h1>
      <h1 className="mt-2 text-sm font-bold text-gray-600">Link To Website:</h1>
      <a href="https://www.linkedin.com/in/saksit-jittasopee-743981382/" target="_blank" className="mt-1 text-blue-500 break-all hover:underline">View LinkedIn</a>
    </div>

    <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <a href="mailto:saksitjittasopee@gmail.com" target="_blank" className="mt-2 hover:scale-110 transition-transform text-gray-800"><IoMdMail size={75} /></a>
      
      <div className="w-full text-center mt-4">
        <h1 className="text-sm font-bold text-gray-800">University Outlook:</h1>
        <a href="mailto:saksit.jit@student.mahidol.ac.th" target="_blank" className="text-blue-500 text-sm break-all hover:underline">saksit.jit@student.mahidol.ac.th</a>
      </div>
      
      <div className="w-full text-center mt-2">
        <h1 className="text-sm font-bold text-gray-800">University Gmail:</h1>
        <a href="mailto:saksit.jit@student.mahidol.edu" target="_blank" className="text-blue-500 text-sm break-all hover:underline">saksit.jit@student.mahidol.edu</a>
      </div>
      
      <div className="w-full text-center mt-2">
        <h1 className="text-sm font-bold text-gray-800">Personal Gmail:</h1>
        <a href="mailto:saksitjittasopee@gmail.com" target="_blank" className="text-blue-500 text-sm break-all hover:underline">saksitjittasopee@gmail.com</a>
      </div>
    </div>

    <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <a href="https://x.com/theshockedxd" target="_blank" className="mt-2 hover:scale-110 transition-transform text-gray-800"><FaXTwitter size={75} /></a>
      <h1 className="mt-5 text-2xl font-bold text-gray-800">X</h1>
      <h1 className="mt-2 text-sm font-bold text-gray-600">Link To Website:</h1>
      <a href="https://x.com/theshockedxd" target="_blank" className="mt-1 text-blue-500 break-all hover:underline">View X</a>
    </div>

  </div>
</motion.div>

<motion.div
    className="mt-20 text-center"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
  >
  <div className="mt-10 text-center">
    <h1 className="m-5 text-3xl font-bold">ICT Mahidol University</h1>
  </div>
  <div className="m-5 flex justify-center">
    <ContactMapLoader/>
  </div>
</motion.div>

      <Footer></Footer>
    </div>
  );

}
