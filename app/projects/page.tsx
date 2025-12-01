import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
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

export const metadata = {
  title: 'Projects - Saksit Jittasopee',
  description: 'Projects Page',
}

export default function Projects() {
  return (
    <div className='w-full overflow-x-hidden'>
    <Navbar></Navbar>
    <div>
      <h1 className="m-5 mt-10 text-4xl font-bold flex justify-center">My Projects</h1>

    <div className="flex justify-center"> 
    <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
      <div className="w-full sm:w-1/2 p-2">
        <Image src={currentchamp1} alt="Current Wrestling Champions 1" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={currentchamp2} alt="Current Wrestling Champions 2" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div>
        <a href="https://saksit-jittasopee.github.io/current-champions/" target="_blank" className="m-5 mt-5 text-l italic flex justify-center underline hover:scale-105">Current Wrestling Champions Website</a>
      </div>

      <div>
        <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">I'm a wrestling fan. I love watching professional wrestling so I made this website to show the current champions in major promotions like (WWE, NXT, AEW, etc.) by using React & Vite and use GitHub to deploy. This is my very first web project so It may look simple and basic but I am very proud with this work.</h1>
      </div>
    </div>
  </div>

<div className="flex justify-center"> 
    <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
      <div className="w-full sm:w-1/2 p-2">
        <Image src={teasmoker} alt="Lab 2" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={scatterplot} alt="Lab 3" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={boxplot} alt="Lab 3" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={grazedchart} alt="Lab 3" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={histogram} alt="Lab 4" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={qqgroupa} alt="Lab 4" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={qqgroupb} alt="Lab 4" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={qqgroupc} alt="Lab 4" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div>
        <a href="https://github.com/Saksit-Jittasopee/R-Programming-Lab-Lesson" target="_blank" className="m-5 mt-5 text-l italic flex justify-center underline hover:scale-105">Assignment Link</a>
      </div>
      <div>
        <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">This is an in-class lab assignment for "Applied Statistics for Computing" by using R with the group of 2. We have assigned an assignment to make histogram, scatterplot, qqplot, boxplot and many more using R to read a data from CSV file.</h1>
      </div>
    </div>
  </div>
</div>

  <div className="flex justify-center"> 
    <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
      <div className="w-full sm:w-1/2 p-2">
        <Image src={webapp1} alt="Ayema5kon1" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={webapp2} alt="Ayema5kon2" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={webapp3} alt="Ayema5kon3" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={webapp4} alt="Ayema5kon4" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={webapp5} alt="Ayema5kon5" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={webapp6} alt="Ayema5kon6" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={webapp7} alt="Ayema5kon7" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={webapp8} alt="Ayema5kon8" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div>
        <a href="https://drive.google.com/drive/folders/1MGfRxQvCkzua-zsm7XosIgSfb_nGPLRe" target="_blank" className="m-5 mt-5 text-l italic flex justify-center underline hover:scale-105">CD Keys Drive</a>
      </div>
      <div>
        <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">This is a project for "Web Technologies and Application" Class. We made the CD-Keys Website using React, Vite, and JavaScript to develop the frontend part and Node.Js and Javascript to develop backend and using MySQL as Database for this project. My role in this project was backend part doing the Authentication using JSON Web Token, Steam API Players Count, Search, MySQL Databases, and also the frontend part by using API to connect with backend and databases.</h1>
      </div>
    </div>
  </div>

  <div className="flex justify-center"> 
    <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
      <div className="w-full sm:w-1/2 p-2">
        <Image src={bar} alt="Lab 2" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={barh} alt="Lab 3" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={scatterplot_python} alt="Lab 3" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={pie} alt="Lab 3" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={line} alt="Lab 4" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div className="w-full sm:w-1/2 p-2">
        <Image src={histogram_python} alt="Lab 4" width={500} height={460} className='w-full h-auto shadow-l'></Image>
      </div>
      <div>
        <a href="https://github.com/Saksit-Jittasopee/python-charts" target="_blank" className="m-5 mt-5 text-l italic flex justify-center underline hover:scale-105">GitHub Link</a>
      </div>
      <div>
        <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">This project using Python libraries (Pandas, Matplotlib) to create each type of charts from movies.csv like Bar Chart, Horizontal Bar Chart, Scatter Plot, Pie Chart, Line Chart, and Histogram.</h1>
      </div>
    </div>
  </div>
  
    <Footer></Footer>
    </div>
  );
}