import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import webapp1 from "@/public/assets/Projects/Ayema5kon1.png";
import currentchamp1 from "@/public/assets/Projects/Current_Wrestling_Champions_1.png";
import teasmoker from "@/public/assets/Projects/Tea_Smoker_Chart.png";
import bar from "@/public/assets/Projects/bar.png"
import monday from "@/public/assets/Projects/monday.png"
import chanasorntravel from "@/public/assets/Projects/chanasorn_travel_2025_3.png"
import ProjectCard from '@/components/ProjectCard';
import { GoProjectRoadmap } from "react-icons/go";

export const metadata = {
  title: 'Projects - Saksit Jittasopee',
  description: 'Projects Page',
}

export default function Projects() {
  return (
    <div className='w-full overflow-x-hidden'>
    <Navbar></Navbar>
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

    <Footer></Footer>
    </div>
  );
}