import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CertificateCard from '@/components/CertificateCard';
import { GrCertificate } from "react-icons/gr";

import DataAnalyticsCer from "@/public/assets/Certificate/DataAnalyticsEssentialsCer.png";
import IntroDataScienceCer from "@/public/assets/Certificate/IntroductiontoDataScience.png";
import DataSciencePythonCer from "@/public/assets/Certificate/DataScienceEssentialswithPython.png";
import DataFundamentalCer from "@/public/assets/Certificate/IBM_Data_Fundamentals.png";
import ModernAICer from "@/public/assets/Certificate/Introduction_to_Modern_AI_cer.png";
import AIFundamental4 from "@/public/assets/Certificate/IBM_AI_Fundamentals.png";
import Cybersecurity from "@/public/assets/Certificate/cybersecurity.png";
import ZeroTrust from "@/public/assets/Certificate/Zero Trust Security.png";
import DigitalAwareness from "@/public/assets/Certificate/digital awareness.png";
import CCNACertificate from "@/public/assets/Certificate/CCNA-_Introduction_to_Networks.png";
import Intro2IoT from "@/public/assets/Certificate/Introduction_to_IoT.png";
import Cpp from "@/public/assets/Certificate/CPP_Essentials.png";
import GenAI from "@/public/assets/Certificate/GenAI.png";
import datascience101 from "@/public/assets/Certificate/DataScience101.png";
import databricksai from "@/public/assets/Certificate/DataBricks_GenAI_Certificate.png";
import databricksdataen from "@/public/assets/Certificate/Databricks_Data_Engineering_with_Databricks-1.png";
import databricksdevops from "@/public/assets/Certificate/Databricks_DevOps_Data_Engineering-1.png";

export const metadata = {
  title: 'Certificates - Saksit Jittasopee',
  description: 'Verified professional certifications, digital credentials, and academic badges earned by Saksit Jittasopee.',
};

export default function Certificate() {
  const certificates = [
    {
      title: "CCNA: Introduction to Networks",
      description: "The first in a three-course series to build your networking skills and get ready for CCNA certification and associate-level jobs. Earner has knowledge of networking including IP addressing, how physical, data link protocols support Ethernet, can configure connectivity between switches, routers and end devices to provide access to local and remote resources.",
      imageSrc: CCNACertificate,
      link: "https://www.credly.com/badges/15a5588a-98df-45aa-986b-7a12a01a8d61",
      imageFile: "CCNA-_Introduction_to_Networks.pdf",
    },
    {
      title: "Data Analytics Essentials",
      description: "This course teaches you the fundamental tools of a data analyst. You will learn to transform, organize, and visualize data with spreadsheet tools such as Excel, SQL, and Tableau.",
      imageSrc: DataAnalyticsCer,
      link: "https://www.credly.com/badges/7f404bd4-6060-4068-bea8-4b0b54b097f5",
      imageFile: "DataAnalyticsEssentials.pdf",
    },
    {
      title: "Introduction to Data Science",
      description: "This course introduces the basics of data science. You will learn what data science is, the different types of data, and broad understanding in basic concepts of Data Analytics, Data Engineering, Data Science and AI/ML related job functions.",
      imageSrc: IntroDataScienceCer,
      link: "https://www.credly.com/badges/635db776-1c4a-4a16-9832-46edb22453c3",
      imageFile: "Introduction_to_Data_Science_certificate.pdf",
    },
    {
      title: "Data Science Essentials With Python",
      description: "This course teaches you the foundational data science skills needed to begin a career in data science. You will learn how to work with data, perform data analysis, and create data visualizations using Python.",
      imageSrc: DataSciencePythonCer,
      link: "https://www.credly.com/badges/085c5d2f-107f-467c-b76d-4986637e4a81",
      imageFile: "DataScienceEssentialswithPython.pdf",
    },
    {
      title: "Data Fundamentals",
      description: "This course introduces you to the foundational concepts of data. You will learn about data types, data structures, and data management techniques. The individual has a conceptual understanding of how to clean, refine, and visualize data using IBM Watson Studio.",
      imageSrc: DataFundamentalCer,
      link: "https://www.credly.com/badges/a13c435a-1106-4015-9bff-18d7702b5d89",
      imageFile: "IBMDesign-Data.pdf",
    },
    {
      title: "Introduction to Modern AI",
      description: "This course introduces you to the core concepts of modern artificial intelligence (AI). You will learn about machine learning, deep learning, natural language processing, and computer vision. The individual has a conceptual understanding of how AI is applied in various industries and use cases.",
      imageSrc: ModernAICer,
      link: "https://www.credly.com/badges/c0d60c22-c3e0-4ac4-bfa2-dc37e7ab4d36",
      imageFile: "Introduction_to_Modern_AI_certificate.pdf",
    },
    {
      title: "Data Science 101",
      description: "This course introduces you to the basics of data science. You will learn what data science is, the different types of data, and broad understanding in basic concepts of Data Analytics, Data Engineering, Data Science and AI/ML related job functions.",
      imageSrc: datascience101,
      link: "https://www.credly.com/badges/9e618b24-5cdb-4999-9ca1-12ef88d1dcaf",
      imageFile: "DataScience101.pdf",
    },
    {
      title: "AI Fundamentals",
      description: "This course introduces you to the core concepts of modern artificial intelligence (AI). You will learn about machine learning, deep learning, natural language processing, and computer vision. The individual has a conceptual understanding of how AI is applied in various industries and use cases.",
      imageSrc: AIFundamental4,
      link: "https://www.credly.com/badges/e9e43c65-8c14-4ea8-843a-1a8c44ed1002",
      imageFile: "IBMDesign-AI.pdf",
    },
    {
      title: "Introduction to IoT",
      description: "The holder of this student-level credential has introductory knowledge of IoT and has an understanding how it enables the Digital Transformation along with emerging technologies such as data analytics, AI/ML and the increased attention on cybersecurity. They understand the importance of Intent Based Networking to be able to connect and secure tens of billions of new devices with ease.",
      imageSrc: Intro2IoT,
      link: "https://www.credly.com/badges/26a17b1c-4272-4842-bd8f-163d66e643e1",
      imageFile: "Introduction_to_IoT_certificate.pdf",
    },
    {
      title: "C++ Essentials 1",
      description: "Earners will know the syntax and semantics of the C++ language, including: data types, flow control, arrays and pointers, memory management and structure concepts, the fundamental programming techniques characteristic of the C++ language, and the use of the most basic standard library functions.",
      imageSrc: Cpp,
      link: "https://www.credly.com/badges/013a96b1-e24c-4a34-a119-a3e787281e93",
      imageFile: "C--_Essentials_1_certificate.pdf",
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "This course introduces you to the core concepts of cybersecurity. You will learn about network security, threat detection, and risk management. The individual has a conceptual understanding of how cybersecurity is applied in various industries, use cases and it audits.",
      imageSrc: Cybersecurity,
      link: "",
      imageFile: "cybersecurity.pdf",
    },
    {
      title: "Zero Trust Security",
      description: "This course introduces you to the core concepts of Zero Trust Security. You will learn about Zero Trust architecture, principles, and implementation strategies. The individual has a conceptual understanding of how Zero Trust Security is applied in various industries and use cases.",
      imageSrc: ZeroTrust,
      link: "",
      imageFile: "Zero_Trust_Security.pdf",
    },
    {
      title: "Digital Awareness",
      description: "This course introduces you to the core concepts of Digital Awareness. You will learn about digital literacy, cybersecurity, and responsible digital citizenship. The individual has a conceptual understanding of how digital awareness is applied in various industries and use cases.",
      imageSrc: DigitalAwareness,
      link: "",
      imageFile: "digital_awareness.pdf",
    },
    {
      title: "GenAI: เสริมทักษะนักวิจัยยุคดิจิทัล",
      description: "This course introduces you to the core concepts of Generative AI. You will learn about the fundamentals of generative AI, including machine learning, neural networks, and prompt engineering. The individual has a conceptual understanding of how generative AI is applied in various industries and use cases.",
      imageSrc: GenAI,
      link: "",
      imageFile: "GenAI.pdf",
    },
    {
      title: "Generative AI Fundamentals",
      description: "This course introduces you to the core concepts of Generative AI. You will learn about the fundamentals of generative AI, including LLMs, AI, and prompt engineering. The individual has a conceptual understanding of how generative AI is applied in various industries and use cases.",
      imageSrc: databricksai,
      link: "https://credentials.databricks.com/f36d665b-a3ca-472a-ba77-d4d358ef0e1d#acc.5y3vJLUu",
      imageFile: "DataBricks_GenAI_Certificate.pdf",
    },
    {
      title: "Get Started with Databricks for Data Engineering",
      description: "This course will have you follow a basic data engineering workflow to perform tasks such as creating and working with tables, ingesting data into Delta Lake, transforming data through the medallion architecture, and using Databricks Workflows to orchestrate data engineering tasks. You’ll also learn how Databricks supports data warehousing needs through the use of Databricks SQL, Lakeflow Spark Declarative Pipelines, and Unity Catalog.",
      imageSrc: databricksdataen,
      link: "https://credentials.databricks.com/afc04fce-aec3-4175-8628-cf9f15646ab0#acc.5hPuryTG",
      imageFile: "Databricks_Data_Engineering_with_Databricks.pdf",
    },
    {
      title: "DevOps Essentials for Data Engineering",
      description: "This course apply modularity principles in PySpark to create reusable components and structure code efficiently. Hands-on experience includes designing and implementing unit tests for PySpark functions using the pytest framework, followed by integration testing for Databricks data pipelines with Spark Declarative Pipeline and Jobs to ensure reliability and covers essential Git operations within Databricks, including using Databricks Git Folders to integrate continuous integration practices.",
      imageSrc: databricksdevops,
      link: "https://credentials.databricks.com/3dcf15c1-a6ab-4ecd-b9d6-5d4f476c1de2#acc.6fhODaqB",
      imageFile: "Databricks_DevOps_Data_Engineering.pdf",
    },
  ];

  return (
    <div className='min-h-screen flex flex-col bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100'>
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 text-sm font-semibold mb-4">
            <GrCertificate size={18} />
            <span>Credentials</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Certificates</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Professional certifications, badges, and accreditations earned across Data Science, AI, Cybersecurity, Databricks, Cisco, and IBM.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              description={cert.description}
              imageSrc={cert.imageSrc}
              link={cert.link}
              imageFile={cert.imageFile}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}