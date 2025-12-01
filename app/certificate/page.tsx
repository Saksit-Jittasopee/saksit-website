import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
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

export const metadata = {
  title: 'Certificate - Saksit Jittasopee',
  description: 'Certificate Page',
}

export default function Certificate() {
  return (
    <div className='w-full overflow-x-hidden'>
    <Navbar></Navbar>
    <div className="mt-10 text-center">
        <h1 className="m-5 mt-10 text-4xl font-bold flex justify-center">My Certificate</h1>
          </div>

          <h1 className="mt-5 ml-5 text-3xl font-bold text-blue-700 border-b-2 w-300 flex justify-start">Computer Networks</h1>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start">
              <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
                    <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                      <Image src={CCNACertificate} alt="Computer Networks CCNA Certificate" width={200} height={50} className='mt-2 ml-0 sm:ml-5'></Image>
                      <Image src={CCNABadges} alt="Computer Networks CCNA Badges" width={200} height={50} className='mt-2 ml-0 sm:ml-5'></Image>
                  </div>
                  <div>
                  <h1 className="mt-5 ml-5 mb-5 text-2xl font-bold">Cisco Networking Academy - CCNA: Introduction to Networks</h1>
                  <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500 flex sm:flex-col">Ready for a career in the world of technology? People around the world depend on the Internet to work, meet, educate, play, and even order dinner — and none of this would be possible without networking professionals. So if you’re thinking about changing careers or pursuing new opportunities, think about IT! Build the skills you need for associate-level job roles like Network Administrator, System Administrator, or Network Engineer in this three-course series. You will also get ready to take the Cisco Certified Network Associate (CCNA) certification exam, an industry-recognized credential that validates your expertise and opens doors to exciting professional opportunities. Start here with CCNA: Introduction to Networks, the first course in the series. From understanding network architectures and protocols to mastering IP addressing and Ethernet fundamentals, you'll develop foundational knowledge and build your networking basics. This course also includes interactive labs and real-world scenarios to help you gain practical experience in building local area networks (LANs), implementing network security measures, and configuring routers and switches.</h1>
              </div>
              </div>
              </div>
                  
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
                
                  <h1 className="mt-5 ml-5 text-3xl font-bold text-purple-700 border-b-2 w-300">AI / Machine Learning</h1>
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

                <div className="flex flex-col sm:flex-row justify-center sm:justify-start">
                    <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
                    <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                      <Image src={AIFundamental2} alt="AI Fundamentals with IBM SkillsBuild" width={320} height={60} className='mt-2 ml-0 sm:ml-5'></Image>
                      <Image src={AIFundamental} alt="AI Fundamentals with IBM SkillsBuild" width={200} height={50} className='mt-2 ml-0 sm:ml-5'></Image>
                      <Image src={AIFundamental4} alt="AI Fundamentals with IBM SkillsBuild" width={320} height={60} className='mt-2 ml-0 sm:ml-5'></Image>
                      <Image src={AIFundamental3} alt="AI Fundamentals with IBM SkillsBuild" width={200} height={50} className='mt-2 ml-0 sm:ml-5'></Image>
                  </div>
                  <h1 className="mt-5 ml-5 mb-5 text-2xl font-bold">Cisco Networking Academy & IBM SkillsBuild: AI Fundamentals with IBM SkillsBuild</h1>
                  <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">Artificial Intelligence (AI) is among the hottest technologies reshaping the future of work! Here's your opportunity to build your knowledge, understand what AI can mean for your future, and visualize yourself in an AI-driven career. You'll begin by exploring AI's history, then discover how it can change the world around you. As you progress, you will delve into how AI understands language, interprets images, and learns using neural networks modeled after the human brain. You'll complete a series of simulations to build and test a machine learning model using IBM Watson Studio, then you'll learn about AI ethics and finish with tips on how to navigate the fast growing AI job market.</h1>
                  </div>
                </div>
                  
                  <h1 className="mt-5 ml-5 text-3xl font-bold text-pink-700 border-b-2 w-300">Cybersecurity</h1>
                  <div className="flex flex-col sm:flex-row justify-center sm:justify-start">
                      <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
                    <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                      <Image src={Cybersecurity} alt="Cybersecurity MU" width={320} height={60} className='mt-2 ml-0 sm:ml-5'></Image>
                    </div> 
                    <h1 className="mt-5 ml-5 mb-5 text-2xl font-bold">MUX: Cybersecurity</h1>
                    <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">This certificate earned from completing "Cybersecurity Fundamentals" course in Mahidol University Extension (MUX).</h1>
                    </div>

                    <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
                    <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                      <Image src={ZeroTrust} alt="Zero Trust Security MU" width={320} height={60} className='mt-2 ml-0 sm:ml-5'></Image>
                      </div>
                      <h1 className="mt-5 ml-5 mb-5 text-2xl font-bold">ICT Xlearn: Zero Trust Security</h1>
                      <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">This certificate earned from completing "Zero Trust Security" course in ICT Xlearn.</h1>
                      </div>

                      <div className="m-5 flex flex-row flex-wrap justify-center border border-blue-500 rounded-xl text-center bg-gray-100 p-5 max-w-4xl lg:max-w-6xl shadow-xl">
                      <div className="m-2 flex flex-col items-center sm:flex-row sm:justify-center">
                      <Image src={DigitalAwareness} alt="Digital Awareness MU" width={320} height={60} className='mt-2 ml-0 sm:ml-5'></Image>
                    </div>
                    <h1 className="mt-5 ml-5 mb-5 text-2xl font-bold">MUX: Digital Awareness</h1>
                    <h1 className="mt-2 ml-5 mb-5 mr-5 text-l text-gray-500">This certificate earned from completing "Digital Awareness" course in Mahidol University Extension (MUX)</h1>
                  </div>
                   

                </div>            
    <Footer></Footer>
    </div>
  );
}