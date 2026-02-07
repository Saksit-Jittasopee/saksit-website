import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
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
import { GrCertificate } from "react-icons/gr";
import Intro2IoT from "@/public/assets/Certificate/Introduction_to_IoT.png"
import Cpp from "@/public/assets/Certificate/CPP_Essentials.png"
import GenAI from "@/public/assets/Certificate/GenAI.png"
import CertificateCard from '@/components/CertificateCard';

export const metadata = {
  title: 'Certificate - Saksit Jittasopee',
  description: 'Certificate Page',
}

export default function Certificate() {
  return (
    <div className='w-full overflow-x-hidden'>
    <Navbar></Navbar>
    <div className="mt-20 flex justify-center items-center gap-3 mb-8">
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
      imageFile="/saksit-website/CCNA_Introduction_to_Networks.pdf"
      />
      </div>

                  <div className="flex justify-center"> 
      <CertificateCard 
      title="Data Analytics Essentials"
      description="This course teaches you the fundamental tools of a data analyst. You will learn to transform, organize, and visualize data with spreadsheet tools such as Excel, SQL, and Tableau."
      imageSrc={DataAnalyticsCer}
      link="https://www.credly.com/badges/7f404bd4-6060-4068-bea8-4b0b54b097f5"
      imageFile="/saksit-website/DataAnalyticsEssentialsUpdate2023.pdf"
      />
      </div>

                        <div className="flex justify-center"> 
      <CertificateCard 
      title="Introduction to Data Science"
      description="This course introduces the basics of data science. You will learn what data science is, the different types of data, and broad understanding in basic concepts of Data Analytics, Data Engineering, Data Science and AI/ML related job functions."
      imageSrc={IntroDataScienceCer}
      link="https://www.credly.com/badges/635db776-1c4a-4a16-9832-46edb22453c3"
      imageFile="/saksit-website/Introduction_to_Data_Science_certificate.pdf"
      />
      </div>

                          <div className="flex justify-center"> 
      <CertificateCard 
      title="Data Science Essentials With Python"
      description="This course teaches you the foundational data science skills needed to begin a career in data science. You will learn how to work with data, perform data analysis, and create data visualizations using Python."
      imageSrc={DataSciencePythonCer}
      link="https://www.credly.com/badges/085c5d2f-107f-467c-b76d-4986637e4a81"
      imageFile="/saksit-website/DataScienceEssentialsWithPython.pdf"
      />
      </div>

                          <div className="flex justify-center"> 
      <CertificateCard 
      title="Data Fundamentals"
      description="This course introduces you to the foundational concepts of data. You will learn about data types, data structures, and data management techniques. The individual has a conceptual understanding of how to clean, refine, and visualize data using IBM Watson Studio."
      imageSrc={DataFundamentalCer}
      link="https://www.credly.com/badges/a13c435a-1106-4015-9bff-18d7702b5d89"
      imageFile="/saksit-website/IBMDesign20251129-31-s9ks8h.pdf"
      />
      </div>

                  <div className="flex justify-center"> 
      <CertificateCard 
      title="Introduction to Modern AI"
      description="This course introduces you to the core concepts of modern artificial intelligence (AI). You will learn about machine learning, deep learning, natural language processing, and computer vision. The individual has a conceptual understanding of how AI is applied in various industries and use cases."
      imageSrc={ModernAICer}
      link="https://www.credly.com/badges/c0d60c22-c3e0-4ac4-bfa2-dc37e7ab4d36"
      imageFile="/saksit-website/Introduction_to_Modern_AI_certificate.pdf"
      />
      </div>

                <div className="flex justify-center"> 
      <CertificateCard 
      title="AI Fundamentals"
      description="This course introduces you to the core concepts of modern artificial intelligence (AI). You will learn about machine learning, deep learning, natural language processing, and computer vision. The individual has a conceptual understanding of how AI is applied in various industries and use cases."
      imageSrc={AIFundamental4}
      link="https://www.credly.com/badges/e9e43c65-8c14-4ea8-843a-1a8c44ed1002"
      imageFile="/saksit-website/AI_Fundamentals_with_IBM_SkillsBuild_certificate.pdf"
      />
      </div>
                  <div className="flex justify-center"> 
                    <CertificateCard 
                    title="Introduction to IoT"
                    description="The holder of this student-level credential has introductory knowledge of IoT and has an understanding how it enables the Digital Transformation along with emerging technologies such as data analytics, AI/ML and the increased attention on cybersecurity. They understand the importance of Intent Based Networking to be able to connect and secure tens of billions of new devices with ease."
                    imageSrc={Intro2IoT}
                    link="https://www.credly.com/badges/26a17b1c-4272-4842-bd8f-163d66e643e1"
                    imageFile="/saksit-website/Introduction_to_IoT_certificate.pdf"
                  />
                  </div>

                  <div className="flex justify-center"> 
                    <CertificateCard 
                    title="C++ Essentials 1"
                    description="Earners will know the syntax and semantics of the C++ language, including: data types, flow control, arrays and pointers, memory management and structure concepts, the fundamental programming techniques characteristic of the C++ language, and the use of the most basic standard library functions."
                    imageSrc={Cpp}
                    link="https://www.credly.com/badges/013a96b1-e24c-4a34-a119-a3e787281e93"
                    imageFile="/saksit-website/C--_Essentials_1_certificate.pdf"
                  />
                  </div>

                  <div className="flex justify-center"> 
                    <CertificateCard 
                    title="Cybersecurity Fundamentals"
                    description="This course introduces you to the core concepts of cybersecurity. You will learn about network security, threat detection, and risk management. The individual has a conceptual understanding of how cybersecurity is applied in various industries, use cases and it audits."
                    imageSrc={Cybersecurity}
                    link=""
                    imageFile="/saksit-website/cybersecurity.pdf"
                  />
                  </div>

                  <div className="flex justify-center"> 
                    <CertificateCard 
                    title="Zero Trust Security"
                    description="This course introduces you to the core concepts of Zero Trust Security. You will learn about Zero Trust architecture, principles, and implementation strategies. The individual has a conceptual understanding of how Zero Trust Security is applied in various industries and use cases."
                    imageSrc={ZeroTrust}
                    link=""
                    imageFile="/saksit-website/Zero_Trust_Security.pdf"
                  />
                  </div>

                  <div className="flex justify-center"> 
                    <CertificateCard 
                    title="Digital Awareness"
                    description="This course introduces you to the core concepts of Digital Awareness. You will learn about digital literacy, cybersecurity, and responsible digital citizenship. The individual has a conceptual understanding of how digital awareness is applied in various industries and use cases."
                    imageSrc={DigitalAwareness}
                    link=""
                    imageFile="/saksit-website/digital_awareness.pdf"
                  />
                  </div>

                  <div className="flex justify-center"> 
                    <CertificateCard 
                    title="GenAI: เสริมทักษะนักวิจัยยุคดิจิทัล"
                    description="This course introduces you to the core concepts of Generative AI. You will learn about the fundamentals of generative AI, including machine learning, neural networks, and prompt engineering. The individual has a conceptual understanding of how generative AI is applied in various industries and use cases."
                    imageSrc={GenAI}
                    link=""
                    imageFile="/saksit-website/GenAI.pdf"
                  />
                  </div>                   
    <Footer></Footer>
    </div>
  );
}