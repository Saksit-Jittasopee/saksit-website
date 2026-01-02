"use client";

import '../app/globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import image from "@/public/assets/Home/image.jpg";
import mahidol from "@/public/assets/Home/Mahidol.png";
import kpn from "@/public/assets/Home/KPN.png";
import { motion } from "framer-motion";
import ContactMapLoader from "@/components/ContactMapLoader";
import DataAnalyticsCer from "@/public/assets/Certificate/DataAnalyticsEssentialsCer.png";
import DataAnalyticsBadges from "@/public/assets/Certificate/data-analytics-essentials-badges.png"
import IntroDataScienceCer from "@/public/assets/Certificate/IntroductiontoDataScience.png"
import IntroDataScienceBadges from "@/public/assets/Certificate/intro-data-science-badges.png"
import DataSciencePythonCer from "@/public/assets/Certificate/DataScienceEssentialswithPython.png"
import DataSciencePythonBadges from "@/public/assets/Certificate/DataSciencePython.png"
import DataFundamentalCer from "@/public/assets/Certificate/IBM_Data_Fundamentals.png"
import DataFundamentalBadges from "@/public/assets/Certificate/data-fundamentals.png"
import ModernAI from "@/public/assets/Certificate/ModernAI.png"
import ModernAICer from "@/public/assets/Certificate/Introduction_to_Modern_AI_cer.png"
import AIFundamental from "@/public/assets/Certificate/AIFundamentalsIBM.png"
import AIFundamental2 from "@/public/assets/Certificate/Cisco_AI_Fundamentals_with_IBM.png"
import AIFundamental3 from "@/public/assets/Certificate/AI_IBM_Credentials.png"
import AIFundamental4 from "@/public/assets/Certificate/IBM_AI_Fundamentals.png"
import Cybersecurity from "@/public/assets/Certificate/cybersecurity.png";
import ZeroTrust from "@/public/assets/Certificate/Zero Trust Security.png";
import DigitalAwareness from "@/public/assets/Certificate/digital awareness.png";
import CCNABadges from "@/public/assets/Certificate/CCNA_Introduction_to_Networks.png";
import CCNACertificate from "@/public/assets/Certificate/CCNA-_Introduction_to_Networks.png"
import webapp1 from "@/public/assets/Projects/Ayema5kon1.png";
import webapp2 from "@/public/assets/Projects/Ayema5kon2.png";
import webapp3 from "@/public/assets/Projects/Ayema5kon3.png";
import webapp4 from "@/public/assets/Projects/Ayema5kon4.png";
import webapp5 from "@/public/assets/Projects/Ayema5kon5.png";
import webapp6 from "@/public/assets/Projects/Ayema5kon6.png";
import webapp7 from "@/public/assets/Projects/Ayema5kon7.png";
import webapp8 from "@/public/assets/Projects/Ayema5kon8.png";
import currentchamp1 from "@/public/assets/Projects/Current_Wrestling_Champions_1.png";
import currentchamp2 from "@/public/assets/Projects/Current_Wrestling_Champions_2.png";
import teasmoker from "@/public/assets/Projects/Tea_Smoker_Chart.png";
import scatterplot from "@/public/assets/Projects/ScatterPlot.png";
import boxplot from "@/public/assets/Projects/BoxPlot.png";
import grazedchart from "@/public/assets/Projects/GrazedChart.png";
import histogram from "@/public/assets/Projects/Histogram_Count _Score.png";
import qqgroupa from "@/public/assets/Projects/Q-Q_Plot_A.png";
import qqgroupb from "@/public/assets/Projects/Q-Q_Plot_B.png";
import qqgroupc from "@/public/assets/Projects/Q-Q_Plot_C.png";
import bar from "@/public/assets/Projects/bar.png"
import barh from "@/public/assets/Projects/barh.png";
import scatterplot_python from "@/public/assets/Projects/scatterplot_python.png";
import pie from "@/public/assets/Projects/pie.png";
import line from "@/public/assets/Projects/line.png";
import histogram_python from "@/public/assets/Projects/histogram.png";
import CV from "@/components/CV"
import { IoMdMail} from "react-icons/io";
import { IoLogoJavascript, IoLogoCss3, IoLibrary } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaCode, FaDatabase, FaPython, FaJava, FaHtml5, FaReact, FaNodeJs, FaToolbox } from 'react-icons/fa';
import { FaGolang } from "react-icons/fa6";
import { SiCplusplus, SiC, SiTypescript, SiR, SiNumpy, SiPandas, SiScikitlearn, SiPytorch, SiTensorflow, SiOpencv, SiExpress, SiAxios, SiTailwindcss, SiLooker, SiTableau, SiGooglesheets, SiPostman } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { MdOutlineWebAsset } from "react-icons/md";
import { RiNextjsFill, RiFileExcel2Fill } from "react-icons/ri";
import { DiVisualstudio } from "react-icons/di";
import ProjectCard from '@/components/ProjectCard';

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
                <FaPython size={25} className="cursor-pointer hover:scale-110"/>
                <FaJava size={25} className="cursor-pointer hover:scale-110"/>
                <FaHtml5 size={25} className="cursor-pointer hover:scale-110"/>
                <IoLogoCss3 size={25} className="cursor-pointer hover:scale-110"/>
                <IoLogoJavascript size={25} className="cursor-pointer hover:scale-110"/>
                <SiTypescript size={25} className="cursor-pointer hover:scale-110"/>
                <SiC size={25} className="cursor-pointer hover:scale-110"/>
                <SiCplusplus size={25} className="cursor-pointer hover:scale-110"/>
                <TbBrandCSharp size={25} className="cursor-pointer hover:scale-110"/>
                <SiR size={25} className="cursor-pointer hover:scale-110"/>
                <FaDatabase size={25} className="cursor-pointer hover:scale-110"/>
                <FaGolang size={25} className="cursor-pointer hover:scale-110"/>
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
                <SiNumpy size={25} className="cursor-pointer hover:scale-110"/>
                <SiPandas size={25} className="cursor-pointer hover:scale-110"/>
                <SiScikitlearn size={25} className="cursor-pointer hover:scale-110"/>
                <SiPytorch size={25} className="cursor-pointer hover:scale-110"/>
                <SiTensorflow size={25} className="cursor-pointer hover:scale-110"/>
                <SiOpencv size={25} className="cursor-pointer hover:scale-110"/>
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
                <FaReact size={25} className="cursor-pointer hover:scale-110"/>
                <FaNodeJs size={25} className="cursor-pointer hover:scale-110"/>
                <RiNextjsFill size={25} className="cursor-pointer hover:scale-110"/>
                <SiExpress size={25} className="cursor-pointer hover:scale-110"/>
                <SiAxios size={25} className="cursor-pointer hover:scale-110"/>
                <SiTailwindcss size={25} className="cursor-pointer hover:scale-110"/>
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
                <FaGithub size={25} className="cursor-pointer hover:scale-110"/>
                <DiVisualstudio size={25} className="cursor-pointer hover:scale-110"/>
                <RiFileExcel2Fill size={25} className="cursor-pointer hover:scale-110"/>
                <SiLooker size={25} className="cursor-pointer hover:scale-110"/>
                <SiGooglesheets size={25} className="cursor-pointer hover:scale-110"/>
                <SiTableau size={25} className="cursor-pointer hover:scale-110"/>
                <SiPostman size={25} className="cursor-pointer hover:scale-110"/>
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
      <h1 className="m-5 mt-10 text-4xl font-bold flex justify-center">My Projects</h1>
  </motion.div>

    <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.1 }}
  >
    <div className="flex justify-center"> 
      <ProjectCard 
    title="Current Wrestling Champions"
    description="I'm a wrestling fan. I love watching professional wrestling so I made this website to show the current champions in major promotions like (WWE, NXT, AEW, etc.) by using React & Vite and use GitHub to deploy. This is my very first web project so It may look simple and basic but I am very proud with this work."
    imageSrc={currentchamp1}
    link="https://saksit-jittasopee.github.io/current-champions/"
      />
  </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.1 }}
  >
    <div className="flex justify-center"> 
      <ProjectCard 
    title="R-Assignments-Project"
    description="This is an in-class lab assignment for 'Applied Statistics for Computing' by using R with the group of 2. We have assigned an assignment to make histogram, scatterplot, qqplot, boxplot and many more using R to read a data from CSV file."
    imageSrc={teasmoker}
    link="https://github.com/Saksit-Jittasopee/R-Programming-Lab-Lesson"
      />
  </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.1 }}
  >
    <div className="flex justify-center"> 
      <ProjectCard 
    title="CD Keys Website"
    description="This is a project for 'Web Technologies and Application' Class. We made the CD-Keys Website using React, Vite, and JavaScript to develop the frontend part and Node.Js and Javascript to develop backend and using MySQL as Database for this project. My role in this project was backend part doing the Authentication using JSON Web Token, Steam API Players Count, Search, MySQL Databases, and also the frontend part by using API to connect with backend and databases."
    imageSrc={webapp1}
    link="https://github.com/WISHERCARTs/Ayema5kon-project"
      />
  </div>
  </motion.div>

<motion.div
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
    <div className="mt-10 text-center">
        <h1 className="m-5 mt-10 text-4xl font-bold flex justify-center">My Certificate</h1>
          </div>

          <h1 className="mt-5 ml-5 text-3xl font-bold text-blue-700 border-b-2 w-300 flex justify-start">Computer Networks</h1>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start">
              <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
                    <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                      <Image src={CCNACertificate} alt="Computer Networks CCNA Certificate" width={320} height={50} className='mt-2 ml-0 sm:ml-5'></Image>
                      <Image src={CCNABadges} alt="Computer Networks CCNA Badges" width={200} height={50} className='mt-2 ml-0 sm:ml-5'></Image>
                  </div>
                  <div>
                  <h1 className="mt-5 ml-5 mb-5 text-2xl font-bold">Cisco Networking Academy - CCNA: Introduction to Networks</h1>
                  <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500 flex sm:flex-col">Ready for a career in the world of technology? People around the world depend on the Internet to work, meet, educate, play, and even order dinner — and none of this would be possible without networking professionals. So if you’re thinking about changing careers or pursuing new opportunities, think about IT! Build the skills you need for associate-level job roles like Network Administrator, System Administrator, or Network Engineer in this three-course series. You will also get ready to take the Cisco Certified Network Associate (CCNA) certification exam, an industry-recognized credential that validates your expertise and opens doors to exciting professional opportunities. Start here with CCNA: Introduction to Networks, the first course in the series. From understanding network architectures and protocols to mastering IP addressing and Ethernet fundamentals, you'll develop foundational knowledge and build your networking basics. This course also includes interactive labs and real-world scenarios to help you gain practical experience in building local area networks (LANs), implementing network security measures, and configuring routers and switches.</h1>
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
                  <h1 className="mt-5 ml-5 text-3xl font-bold text-green-700 border-b-2 w-300 flex justify-start">Data Analytics</h1>
                        <div className="flex flex-col sm:flex-row justify-center sm:justify-start"> 
                          <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
                            <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                              <Image src={DataAnalyticsCer} alt="Data Analytics Certificate" width={320} height={60} className='mt-2 ml-0 sm:ml-5'></Image>
                              <Image src={DataAnalyticsBadges} alt="Data Analytics Badges" width={200} height={50} className='mt-2 ml-0 sm:ml-5'></Image>
                            </div>
                            <h1 className="mt-5 ml-5 mb-5 text-2xl font-bold">Cisco Networking Academy: Data Analytics Essentials</h1>
                            <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500 flex sm:flex-col">This data analytics essentials course teaches you the fundamental tools of a data analyst. You will learn to transform, organize, and visualize data with spreadsheet tools such as Excel. You will also learn how to query data from a relational database using SQL and how to improve your data presentations using powerful business intelligence tools like Tableau. By the end of the course, you will have an analytics portfolio complete with an analysis of the popular movies dataset, showcasing your skills in Excel, SQL and Tableau.</h1>
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
                        <h1 className="mt-5 ml-5 text-3xl font-bold text-red-700 border-b-2 w-300 flex justify-start">Data Science</h1>
                        <div className="flex flex-col sm:flex-row justify-center sm:justify-start">
                          <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
                            <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                              <Image src={IntroDataScienceCer} alt="Introduction to Data Science Certificate" width={320} height={60} className='mt-2 ml-0 sm:ml-5'></Image>
                              <Image src={IntroDataScienceBadges} alt="Introduction to Data Science Badges" width={200} height={50} className='mt-2 ml-0 sm:ml-5'></Image>
                            </div>
                            <h1 className="mt-5 ml-5 mb-5 text-2xl font-bold">Cisco Networking Academy: Introduction to Data Science</h1>
                            <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">This introductory course takes you inside the world of data science. You will learn the basics of data science, data analytics, and data engineering to understand how machine learning is shaping the future of business, healthcare, education, and more. Data science professionals who can provide actionable insights for data-driven decisions are in high demand all over the world.</h1>
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
                          <div className="flex flex-col sm:flex-row justify-center sm:justify-start">
                          <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
                            <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                              <Image src={DataSciencePythonCer} alt="Data Science Essentials with Python Certificate" width={320} height={60} className='mt-2 ml-0 sm:ml-5'></Image>
                              <Image src={DataSciencePythonBadges} alt="Data Science Essentials with Python Badges" width={200} height={20} className='mt-2 ml-0 sm:ml-5'></Image>
                            </div>
                            <h1 className="mt-5 ml-5 mb-5 text-2xl font-bold">Cisco Networking Academy: Data Science Essentials with Python</h1>
                            <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">Step into the world of data science, where you can turn raw numbers and information into compelling stories. In this project-based course, you’ll learn to use Python—along with two of its most popular tools, Pandas and Matplotlib—to explore, organize, and visualize data. This beginner-friendly course starts with easy, hands-on activities and games that teach you the basics of working with data. You’ll then move on to real-world projects, where you can apply what you’ve learned to actual datasets. An AI assistant and step-by-step guidance will help you along the way.</h1>
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
                          <div className="flex flex-col sm:flex-row justify-center sm:justify-start">
                          <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
                              <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                                 <Image src={DataFundamentalCer} alt="Data Fundamentals Certificate" width={320} height={60} className='mt-2 ml-0 sm:ml-5'></Image>
                                 <Image src={DataFundamentalBadges} alt="Data Fundamentals Python Badges" width={200} height={20} className='mt-2 ml-0 sm:ml-5'></Image>
                              </div>
                              <h1 className="mt-5 ml-5 mb-5 text-2xl font-bold">IBM SkillsBuild: Data Fundamentals (Earn a credential!)</h1>
                              <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">Learn the concepts and methods of data science and how its discoveries change the world. Then get hands-on practice cleaning, refining, and visualizing data, in a series of simulations, using IBM Watson Studio with the data refinery tool. Finish by gathering tips and resources that can help you launch a great career in data science. </h1>
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
                  <h1 className="mt-5 ml-5 text-3xl font-bold text-purple-700 border-b-2 w-300 flex justify-start">AI / Machine Learning</h1>
                  <div className="flex flex-col sm:flex-row justify-center sm:justify-start">
                    <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
                    <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                      <Image src={ModernAICer} alt="Introduction to Modern AI Certificate" width={320} height={60} className='mt-2 ml-0 sm:ml-5'></Image>
                      <Image src={ModernAI} alt="Introduction to Modern AI Badges" width={200} height={50} className='mt-2 ml-0 sm:ml-5'></Image>
                  </div>
                  <h1 className="mt-5 ml-5 mb-5 text-2xl font-bold">Cisco Networking Academy: Introduction to Modern AI</h1>
                  <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">AI chatbots are revolutionizing the way we work and learn. Millions of people worldwide use them to simplify tasks like homework and ideating, writing, editing and even career advice. If you are new to AI and ready to give it a try, look no further! Introduction to Modern AI is a beginner-friendly course designed to help you learn key AI concepts and get hands-on practice with AI-enabled apps. You will start with an overview of AI. Then you'll explore computer vision using a photo app and machine translation with an online translation tool. Finally, take a deep-dive into chatbots–full of tips for writing better prompts and hands-on practice with 10+ popular chatbots and AI tools, including ChatGPT, Meta AI, Gemini, Google Translate, Claude, Hugging Chat, NotebookLM and more.</h1>
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
                <div className="flex flex-col sm:flex-row justify-center sm:justify-start">
                    <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
                        <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                            <Image src={AIFundamental2} alt="AI Fundamentals with IBM SkillsBuild" width={320} height={60} className='mt-2 ml-0 sm:ml-5'></Image>
                            <Image src={AIFundamental} alt="AI Fundamentals with IBM SkillsBuild" width={200} height={50} className='mt-2 ml-0 sm:ml-5'></Image>
                        </div>    
                        <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                            <Image src={AIFundamental4} alt="AI Fundamentals with IBM SkillsBuild" width={320} height={60} className='mt-2 ml-0 sm:ml-5'></Image>
                            <Image src={AIFundamental3} alt="AI Fundamentals with IBM SkillsBuild" width={200} height={50} className='mt-2 ml-0 sm:ml-5'></Image>
                        </div>
                          <h1 className="mt-5 ml-5 mb-5 text-2xl font-bold">Cisco Networking Academy & IBM SkillsBuild: AI Fundamentals with IBM SkillsBuild</h1>
                          <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">Artificial Intelligence (AI) is among the hottest technologies reshaping the future of work! Here's your opportunity to build your knowledge, understand what AI can mean for your future, and visualize yourself in an AI-driven career. You'll begin by exploring AI's history, then discover how it can change the world around you. As you progress, you will delve into how AI understands language, interprets images, and learns using neural networks modeled after the human brain. You'll complete a series of simulations to build and test a machine learning model using IBM Watson Studio, then you'll learn about AI ethics and finish with tips on how to navigate the fast growing AI job market.</h1>
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
                  <h1 className="mt-5 ml-5 text-3xl font-bold text-pink-700 border-b-2 w-300 flex justify-start">Cybersecurity</h1>
                  <div className="flex flex-col sm:flex-row justify-center sm:justify-start">
                      <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
                    <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                      <Image src={Cybersecurity} alt="Cybersecurity MU" width={280} height={60} className='mt-2 ml-0 sm:ml-2'></Image>
                    </div> 
                    <h1 className="mt-5 ml-5 mb-5 text-2xl font-bold">MUX: Cybersecurity</h1>
                    <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">This certificate earned from completing "Cybersecurity Fundamentals" course in Mahidol University Extension (MUX).</h1>
                    </div>

                    <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
                    <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                      <Image src={ZeroTrust} alt="Zero Trust Security MU" width={280} height={60} className='mt-2 ml-0 sm:ml-2'></Image>
                      </div>
                      <h1 className="mt-5 ml-5 mb-5 text-2xl font-bold">ICT Xlearn: Zero Trust Security</h1>
                      <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">This certificate earned from completing "Zero Trust Security" course in ICT Xlearn.</h1>
                      </div>

                      <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
                      <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                      <Image src={DigitalAwareness} alt="Digital Awareness MU" width={280} height={60} className='mt-2 ml-0 sm:ml-2'></Image>
                    </div>
                    <h1 className="mt-5 ml-5 mb-5 text-2xl font-bold">MUX: Digital Awareness</h1>
                    <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">This certificate earned from completing "Digital Awareness" course in Mahidol University Extension (MUX)</h1>
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
  <h1 className="m-5 text-4xl font-bold">Education</h1>
  
  <div className="mt-15 text-center mx-auto max-w-7xl px-5"> 
    
    <div className="mt-5 border border-blue-500 rounded-xl bg-gray-100 flex flex-col p-5 shadow-xl">
      <div className='mt-5 flex flex-col items-center md:flex-row md:justify-start md:items-center'>
        <h1 className="m-5 text-2xl font-bold text-blue-500 md:ml-5">Bachelor Degree in Digital Science & Technology (B.Sc)</h1>
        <Image src={mahidol} alt="Mahidol" width={75} height={60} className='ml-5'></Image>
      </div>
  
      <div className="m-5 flex flex-col md:grid-cols-4 gap-4 md:gap-8 text-center md:text-left">
        <h1 className="text-xl text-gray-700 font-bold">2024 - Now</h1>
        <h1 className="text-xl text-gray-500">GPA: 3.42</h1>
        <h1 className="text-xl text-gray-500">Faculty of Information and Communication Technology</h1>
        <h1 className="text-xl text-gray-500">Mahidol University, Salaya Campus, Thailand</h1>
      </div>
    </div>

    <div className="mt-5 mb-5 border border-blue-500 rounded-xl bg-gray-100 flex flex-col p-5 shadow-xl">
      <div className='mt-5 flex flex-col items-center md:flex-row md:justify-start md:items-center'>
        <h1 className="m-5 text-2xl font-bold text-purple-500 md:ml-5">Middle - High School</h1>
        <Image src={kpn} alt="KPN" width={60} height={45} className='ml-5'></Image>
      </div>
      
      <div className="m-5 flex flex-col md:grid-cols-4 gap-4 md:gap-8 text-center md:text-left">
        <h1 className="text-xl text-gray-700 font-bold">2018 - 2024</h1>
        <h1 className="text-xl text-gray-500">GPA: 3.94</h1>
        <h1 className="text-xl text-gray-500">Mathematics - English</h1>
        <h1 className="text-xl text-gray-500">Kanchanapisek Wittayalai Nakhon Pathom, Thailand</h1>
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
  <div className="mt-10 text-center">
    <h1 className="m-5 text-3xl font-bold">Contact Information</h1>
  </div>

  <div className="mt-5 px-4 flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
    <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <a href="https://github.com/Saksit-Jittasopee" target="_blank" className="mt-2 hover:scale-110 transition-transform"><FaGithub size={75} /></a>
      <h1 className="mt-5 text-2xl font-bold">GitHub</h1>
      <h1 className="mt-2 text-sm font-bold text-gray-600">Link To Website:</h1>
      <a href="https://github.com/Saksit-Jittasopee" target="_blank" className="mt-1 text-blue-500 break-all hover:underline">View GitHub</a>
    </div>

    <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <a href="https://www.facebook.com/saksit.jittasopee.1" target="_blank" className="mt-2 hover:scale-110 transition-transform"><FaFacebook size={75} /></a>
      <h1 className="mt-5 text-2xl font-bold">Facebook</h1>
      <h1 className="mt-2 text-sm font-bold text-gray-600">Link To Website:</h1>
      <a href="https://www.facebook.com/saksit.jittasopee.1" target="_blank" className="mt-1 text-blue-500 break-all hover:underline">View Facebook</a>
    </div>

    <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <a href="https://www.instagram.com/saksitjittasopee" target="_blank" className="mt-2 hover:scale-110 transition-transform"><FaInstagram size={75} /></a>
      <h1 className="mt-5 text-2xl font-bold">Instagram</h1>
      <h1 className="mt-2 text-sm font-bold text-gray-600">Link To Website:</h1>
      <a href="https://www.instagram.com/saksitjittasopee" target="_blank" className="mt-1 text-blue-500 break-all hover:underline">View Instagram</a>
    </div>

    <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <a href="https://www.linkedin.com/in/saksit-jittasopee-743981382/" target="_blank" className="mt-2 hover:scale-110 transition-transform"><FaLinkedin size={75} /></a>
      <h1 className="mt-5 text-2xl font-bold">LinkedIn</h1>
      <h1 className="mt-2 text-sm font-bold text-gray-600">Link To Website:</h1>
      <a href="https://www.linkedin.com/in/saksit-jittasopee-743981382/" target="_blank" className="mt-1 text-blue-500 break-all hover:underline">View LinkedIn</a>
    </div>

    <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <a href="mailto:saksitjittasopee@gmail.com" target="_blank" className="mt-2 hover:scale-110 transition-transform"><IoMdMail size={75} /></a>
      
      <div className="w-full text-center mt-4">
        <h1 className="text-sm font-bold text-gray-600">University Outlook:</h1>
        <a href="mailto:saksit.jit@student.mahidol.ac.th" target="_blank" className="text-blue-500 text-sm break-all hover:underline">saksit.jit@student.mahidol.ac.th</a>
      </div>
      
      <div className="w-full text-center mt-2">
        <h1 className="text-sm font-bold text-gray-600">University Gmail:</h1>
        <a href="mailto:saksit.jit@student.mahidol.edu" target="_blank" className="text-blue-500 text-sm break-all hover:underline">saksit.jit@student.mahidol.edu</a>
      </div>
      
      <div className="w-full text-center mt-2">
        <h1 className="text-sm font-bold text-gray-600">Personal Gmail:</h1>
        <a href="mailto:saksitjittasopee@gmail.com" target="_blank" className="text-blue-500 text-sm break-all hover:underline">saksitjittasopee@gmail.com</a>
      </div>
    </div>

  </div>

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
