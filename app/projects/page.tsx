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
import gender from "@/public/assets/Projects/gender.png";
import age from "@/public/assets/Projects/age_predict.png";
import healthcare from "@/public/assets/Projects/healthcare_fraud.png";
import nlp_email from "@/public/assets/Projects/nlp_email_predict.png";
import shirt_size from "@/public/assets/Projects/shirt_size_recommendation.png";
import ikillair from "@/public/assets/Projects/ikillair.png";
import iot_project from "@/public/assets/Projects/iot_project.png";

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
    imageFile="Current_Wrestling_Champions.pdf"
    tags={['React', 'JavaScript', 'HTML / CSS', 'Vite']}
      />
    </div>

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

  <div className="flex justify-center"> 
      <ProjectCard 
    title="Full-Stacks-IoT-Project"
    description="This project is about developing an IoT Smart Devices using various software and tools from tech stacks like NodeRED, Netpie, Thingsboard, and InfluxDB from Docker to develop and Arduino to implemented."
    imageSrc={iot_project}
    link=""
    imageFile="iot_project.pdf"
    tags={['Arduino', 'Node-RED', 'Netpie', 'Thingsboard', 'Fritzing', 'ESP32', 'Python', 'InfluxDB', 'Telegram']}
      />
  </div>

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

    <Footer></Footer>
    </div>
  );
}