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
import datascience101 from "@/public/assets/Certificate/DataScience101.png"
import databricksai from "@/public/assets/Certificate/DataBricks_GenAI_Certificate.png"
import databricksdataen from "@/public/assets/Certificate/Databricks_Data_Engineering_with_Databricks-1.png"
import databricksdevops from "@/public/assets/Certificate/Databricks_DevOps_Data_Engineering-1.png"
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
import { MdLocalActivity } from "react-icons/md";
import ProjectCard from '@/components/ProjectCard';
import CertificateCard from "@/components/CertificateCard";
import ActivityCard from "@/components/ActivityCard";
import { GrCertificate } from "react-icons/gr";
import { GoProjectRoadmap } from "react-icons/go";
import { CiCirclePlus } from "react-icons/ci";
import gender from "@/public/assets/Projects/gender.png";
import age from "@/public/assets/Projects/age_predict.png";
import healthcare from "@/public/assets/Projects/healthcare_fraud.png";
import nlp_email from "@/public/assets/Projects/nlp_email_predict.png";
import shirt_size from "@/public/assets/Projects/shirt_size_recommendation.png";
import ikillair from "@/public/assets/Projects/ikillair.png";
import iot_project from "@/public/assets/Projects/iot_project.png";
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

export default function Home() {
  return (
    <div className='w-full overflow-x-hidden'>
  <Navbar></Navbar>
  
  <div className="mt-20 flex flex-col items-center justify-center m-5 md:flex-row md:items-start md:justify-start">
  <div className="mt-5 ml-0 text-center md:ml-10 pt-2 md:text-left">
    <h1 className="text-5xl font-bold">Hi, I'm <span className="text-blue-600">Saksit Jittasopee</span></h1>
    <br></br>
    <h2 className="mt-4 text-5xl font-bold">I'm a 3rd Year Student at Mahidol University.</h2>
    <br></br>
    <p className="mt-4 text-lg">I'm studying B.Sc in Digital Science & Technology (DST) at Faculty of Information and Communication Technology. I was work as an intern at Beryl8 as Data Analyst (June 2026 - July 2026), I wish to work in data science role in the future.</p>
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
        I'm a 3rd Year Student at Mahidol University. Currently, I'm studying B.Sc in Digital Science & Technology (DST) at Faculty of Information and Communication Technology. I can write various programming languages such as Python, Java, HTML, CSS (Bootstrap & Tailwind), JavaScript, TypeScript, C, C++, C#, R, SQL and Go. In Python I can also write NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, PyTorch, Tensorflow and OpenCV. I'm interested in Data Science and wish to study more in the future. I can use various software such as Microsoft Word, Powerpoint, Excel, Power BI, Google Looker Studio, Tableau Public & Desktop, Visual Studio Code, IBM SPSS Statistics, Postman, Oracle VirtualBox and more.
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
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-5 mr-5">
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
          <MdLocalActivity size={25}/>
        </span>
      <h1 className="text-3xl font-bold">My Activities</h1>
      </div>

      <div className="flex justify-center flex-wrap"> 
        <ActivityCard 
      title="The Mall Group x Mahidol University"
      description="I attended a seminar under The Mall Group, together with the Faculty of ICT, Mahidol University under the TMG University Networking: MUICT-AST The Series on the topic “Future-Proof Marketing: Loyalty / AI / Sustainability.”"
      imageSrc={themall}
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
        <ActivityCard 
      title="Study Visit at Synergy Group"
      description="I attended a study visit to the Synergy Technology Co., Ltd., for first-year students from the Bachelor of Science in Digital Science and Technology (DST Thai Program)."
      imageSrc={synergy}
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
        <ActivityCard 
      title="MFEG Company Lecture"
      description="I attended a special lecture entitled “The Endless Journey: Lifelong Learning in the Era of Artificial Intelligence.” by Mr. Damrongsak Reetanon, Chief Infrastructure and Integration Officer of MFEC Public Company Limited."
      imageSrc={mfeg}
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
        <ActivityCard 
      title="PEOPLE INNOVATE Co. Lecture"
      description="I attended special lecture entitled “Strategic Thinking in Real Life.” by Ms. Theresa Mathawaphan, CEO and Co-founder of PEOPLE INNOVATE Co., Ltd., as the guest speaker."
      imageSrc={people_innovation}
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
        <ActivityCard 
      title="Mahidol AI Day"
      description="I attended a Mahidol AI Day event which is a seminar event features by SCB InnovestX, Central Retail and more."
      imageSrc={ai_day}
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
        <ActivityCard 
      title="ICT Mahidol x 1 Moby: Unlock Your Resume’s Potential: Design and Content Essentials"
      description="I attended a special talk about designing your resume by 1Moby x ICT Mahidol."
      imageSrc={event_1moby}
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
        <ActivityCard 
      title="Skill for the Top: Enhancing Project Management Techniques to Tackle Challenges"
      description="I attended an academic seminar about how to equip participants with foundational knowledge in project management and strategies for addressing challenges encountered during project execution by ICT Alumni."
      imageSrc={skill_to_the_top}
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
        <ActivityCard 
      title="IT Audit in Compliance with Cybersecurity Standard ISO/IEC 27001"
      description="I attended a seminar about IT auditing based on the ISO/IEC 27001 standard, in collaboration with ICT Cybersecurity Club."
      imageSrc={it_audit}
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
        <ActivityCard 
      title="ICT Mahidol hosted a special talk on “Software Engineering”"
      description="During the lecture, Mr. Anuchit shared insights on working in software engineering and what it takes to be a successful software engineer. The event was attended by first-year students from the Bachelor of Science in DST Thai Program."
      imageSrc={soft_en}
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
        <ActivityCard 
      title="ICT Mahidol organized a special talk on “Data Science”"
      description="During the lecture, Mr. Kan Ouivirach, Data Product Developer & Technical Coach from ODD-E (Thailand) Co., Ltd., shared fundamental knowledge of Data Science and various data management processes with students from DST."
      imageSrc={data_science}
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
        <ActivityCard 
      title="Study Visit at SCGJWD Logistics"
      description="I attended a study visit to the SCGJWD Logistics Public Company Limited, for second-year students from the Bachelor of Science in Digital Science and Technology (DST Thai Program)."
      imageSrc={scg_jwd}
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
        <ActivityCard 
      title="SEC Lecture"
      description="I attended special lecture entitled “Data Engineering, Analytics and Architecture of the Office of the Securities and Exchange Commission (SEC).” by Dr. Cherdsak Kingkan, Assistant Director (Data Engineering and Analytics Team) of the Securities and Exchange Commission (SEC), as the guest speaker."
      imageSrc={sec_data_en}
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
        <ActivityCard 
      title="Study Visit at Bank of Thailand "
      description="I attended a study visit to the Bank of Thailand, for second-year students from the Bachelor of Science in Digital Science and Technology (DST Thai Program)."
      imageSrc={bank}
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
        <ActivityCard 
      title="iTAX Lecture"
      description="I attended a special lecture entitled “Product Development: How to Make It Memorable.” by Asst. Prof. Dr. Mickey Yutthana Srisavat, CEO and Founder of iTAX Incorporation Co., Ltd."
      imageSrc={itax}
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
        <ActivityCard 
      title="TCC Group Lecture"
      description="I attended a special lecture entitled “Smart Factory.” by TCC Technology Co., Ltd."
      imageSrc={tcc}
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
        <ActivityCard 
      title="PricewaterhouseCoopers Lecture"
      description="I attended a special lecture entitled “Life & Career as Cyber Security Consultant.” Ms. Thanika Chiengthong, Cybersecurity Consultant Manager at PricewaterhouseCoopers Holding (Thailand) Co., Ltd."
      imageSrc={pricewatercooper}
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
        <ActivityCard 
      title="ASCE Hackathon 2026"
      description="I participate in ASCE Hackathon 2026 organized by Siriraj Hospital X ICT Mahidol. It’s about create a model for CAC Score and submit for the most F1-Score."
      imageSrc={asce}
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
    imageFile="Current_Wrestling_Champions.pdf"
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
    imageFile="R-Project.pdf"
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
    imageFile="Ayema5kon.pdf"
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
    imageFile="Python-Chart.pdf"
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
    imageFile="chanasorn-travel-2025.pdf"
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
    imageFile="class-discord-bot.pdf"
    tags={['Go', 'Bot', 'Discord Bot']}
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
    title="gender-classification-deep-learning"
    description="This project is about using deep learning to classify the gender of people in photo feed using OpenCV's DNN module. The project utilizes a pre-trained Caffe model for face detection and a trained PyTorch model using mobilenet_v2 model to classify gender. The dataset is from saadpd's Kaggle (Men-Women Classification). The application captures video from the webcam, detects faces, and classifies the gender of the detected faces, displaying the results and confidence in photo using streamlit to deploy the web application."
    imageSrc={gender}
    link="https://github.com/Saksit-Jittasopee/gender-classification-deep-learning"
    imageFile="gender-classification-deep-learning.pdf"
    tags={['Python', 'OpenCV', 'PyTorch', 'Streamlit', 'Machine Learning', 'Deep Learning', 'Classification', 'Neural Networks', 'Jupyter Notebook']}
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
    title="age-prediction-deep-learning"
    description="This project is about using deep learning to predict the age of people in pictures using a CNN (Convolutional Neural Network) and PyTorch. The output layer is a linear regression model. The dataset is from jangedoo's Kaggle (UTKFace). The application captures video from the webcam, detects faces, and predicts the age of the detected faces using CascadeClassifier (haarcascade_frontalface_default) from OpenCV, displaying the results using Streamlit to deploy the web application."
    imageSrc={age}
    link="https://github.com/Saksit-Jittasopee/age-prediction-deep-learning"
    imageFile="age_prediction.pdf"
    tags={['Python', 'OpenCV', 'PyTorch', 'Streamlit', 'Machine Learning', 'Deep Learning', 'CNN', 'Neural Networks', 'Jupyter Notebook', 'Linear Regression']}
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
    title="Weather App Mobile Application"
    description="This project is about developing a mobile application that provides real-time air quality information and weather updates for users in their respective countries. using Flutter and Dart in frontend part and Javascript and Node.js in backend part. Also, PostgreSQL and Prisma are used for database management. Oracle Cloud is used for deployment."
    imageSrc={ikillair}
    link="https://github.com/Saksit-Jittasopee/ITDS283-IKillAir-6787015-6787077"
    imageFile="ITDS283_Sec2_Group08_Presentation.pdf"
    tags={['Flutter', 'Dart', 'JavaScript', 'Node.Js', 'PostgreSQL', 'Prisma', 'Oracle Cloud']}
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
    title="Full-Stacks-IoT-Project"
    description="This project is about developing a IoT Smart Devices using various software and tools."
    imageSrc={iot_project}
    link=""
    imageFile="iot_project.pdf"
    tags={['Arduino', 'Node-RED', 'Netpie', 'Thingsboard', 'Fritzing', 'ESP32', 'Python', 'InfluxDB', 'Telegram']}
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
    title="healthcare-insurance-fraud-detection"
    description="This project is about using deep learning to classify the healthcare insurance fraud detection dataset. The goal is to build a model that can accurately predict whether a healthcare insurance claim is fraudulent or not based on the features provided in the dataset. The project involves data preprocessing, model building, training, and evaluation to achieve high accuracy in fraud detection."
    imageSrc={healthcare}
    link="https://github.com/Saksit-Jittasopee/healthcare-insurance-fraud-detection"
    imageFile="healthcare_fraud_detection.pdf"
    tags={['Python', 'Tensorflow', 'Keras', 'Numpy', 'Pandas', 'Machine Learning', 'Deep Learning', 'Scikit-Learn', 'Matplotlib']}
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
    title="nlp-spam-email-detection"
    description="This project is about using AutoModelForSequenceClassification Model to classify the email spam dataset. The goal is to build a model that can accurately predict whether an email is spam or not based on the features provided in the dataset. The project involves data preprocessing, model building, training, and evaluation to achieve high accuracy in spam detection."
    imageSrc={nlp_email}
    link="https://github.com/Saksit-Jittasopee/nlp-spam-email-detection"
    imageFile="nlp_email.pdf"
    tags={['Python', 'Scikit-Learn', 'Dataset', 'Transformers', 'Pandas', 'NLP']}
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
    title="shirt-size-recommendation"
    description="This project is about using deep learning to recommend shirt sizes. The goal is to build a model that can accurately predict the appropriate shirt size for a user based on the features provided in the dataset. The project involves data preprocessing, model building, training, and evaluation to achieve high accuracy in shirt size recommendation."
    imageSrc={shirt_size}
    link="https://github.com/Saksit-Jittasopee/shirt-size-recommendation"
    imageFile="shirt_size_recommendation.pdf"
    tags={['Python', 'Tensorflow', 'Keras', 'Streamlit', 'Machine Learning', 'Deep Learning', 'Classification']}
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
      imageFile="CCNA-_Introduction_to_Networks.pdf"
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
      imageFile="DataAnalyticsEssentials.pdf"
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
      imageFile="Introduction_to_Data_Science_certificate.pdf"
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
      imageFile="DataScienceEssentialswithPython.pdf"
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
      imageFile="IBMDesign-Data.pdf"
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
      imageFile="Introduction_to_Modern_AI_certificate.pdf"
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
      title="Data Science 101"
      description="This course introduces you to the basics of data science. You will learn what data science is, the different types of data, and broad understanding in basic concepts of Data Analytics, Data Engineering, Data Science and AI/ML related job functions."
      imageSrc={datascience101}
      link="https://www.credly.com/badges/9e618b24-5cdb-4999-9ca1-12ef88d1dcaf"
      imageFile="DataScience101.pdf"
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
      imageFile="IBMDesign-AI.pdf"
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
                    imageFile="Introduction_to_IoT_certificate.pdf"
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
                    imageFile="C--_Essentials_1_certificate.pdf"
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
                    imageFile="cybersecurity.pdf"
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
                    imageFile="Zero_Trust_Security.pdf"
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
                    imageFile="digital_awareness.pdf"
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
                    imageFile="GenAI.pdf"
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
                    title="Generative AI Fundamentals"
                    description="This course introduces you to the core concepts of Generative AI. You will learn about the fundamentals of generative AI, including LLMs, AI, and prompt engineering. The individual has a conceptual understanding of how generative AI is applied in various industries and use cases."
                    imageSrc={databricksai}
                    link="https://credentials.databricks.com/f36d665b-a3ca-472a-ba77-d4d358ef0e1d#acc.5y3vJLUu"
                    imageFile="DataBricks_GenAI_Certificate.pdf"
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
                    title="Get Started with Databricks for Data Engineering"
                    description="This course will have you follow a basic data engineering workflow to perform tasks such as creating and working with tables, ingesting data into Delta Lake, transforming data through the medallion architecture, and using Databricks Workflows to orchestrate data engineering tasks. You’ll also learn how Databricks supports data warehousing needs through the use of Databricks SQL, Lakeflow Spark Declarative Pipelines, and Unity Catalog."
                    imageSrc={databricksdataen}
                    link="https://credentials.databricks.com/afc04fce-aec3-4175-8628-cf9f15646ab0#acc.5hPuryTG"
                    imageFile="Databricks_Data_Engineering_with_Databricks.pdf"
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
                    title="DevOps Essentials for Data Engineering"
                    description="This course apply modularity principles in PySpark to create reusable components and structure code efficiently. Hands-on experience includes designing and implementing unit tests for PySpark functions using the pytest framework, followed by integration testing for Databricks data pipelines with Spark Declarative Pipeline and Jobs to ensure reliability and covers essential Git operations within Databricks, including using Databricks Git Folders to integrate continuous integration practices."
                    imageSrc={databricksdevops}
                    link="https://credentials.databricks.com/3dcf15c1-a6ab-4ecd-b9d6-5d4f476c1de2#acc.6fhODaqB"
                    imageFile="Databricks_DevOps_Data_Engineering.pdf"
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
                    <p>GPA: <span className="font-semibold text-gray-900 dark:text-white">3.63</span></p>
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
