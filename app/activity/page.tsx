import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
import ActivityCard from "@/components/ActivityCard";
import { MdLocalActivity } from "react-icons/md";

export const metadata = {
  title: 'Activity - Saksit Jittasopee',
  description: 'Activity Page',
}

export default function Projects() {
  return (
    <div className='w-full overflow-x-hidden'>
    <Navbar></Navbar>
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

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="Study Visit at Synergy Group"
    description="I attended a study visit to the Synergy Technology Co., Ltd., for first-year students from the Bachelor of Science in Digital Science and Technology (DST Thai Program) as a part of 'Industry Problems and Experiences 1' courses. The visit mostly was about IoT & Smart Technologies talks."
    imageSrc={synergy}
      />
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="MFEG Company Lecture"
    description="I attended a special lecture entitled “The Endless Journey: Lifelong Learning in the Era of Artificial Intelligence.” by Mr. Damrongsak Reetanon, Chief Infrastructure and Integration Officer of MFEC Public Company Limited."
    imageSrc={mfeg}
      />
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="PEOPLE INNOVATE Co. Lecture"
    description="I attended special lecture entitled “Strategic Thinking in Real Life.” by Ms. Theresa Mathawaphan, CEO and Co-founder of PEOPLE INNOVATE Co., Ltd., as the guest speaker. It's about a planning and strategic thinking in workplace."
    imageSrc={people_innovation}
      />
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="Mahidol AI Day"
    description="I attended a Mahidol AI Day event which is a seminar event features by SCB InnovestX, Central Retail and more. It's a MOU Signing between Mahidol University and other companies, held an event, and special talks about AI Topic."
    imageSrc={ai_day}
      />
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="ICT Mahidol x 1 Moby: Unlock Your Resume’s Potential: Design and Content Essentials"
    description="I attended a special talk about how to designed your resume for job application or salary increased, and how does your resume look in HR view by 1Moby x ICT Mahidol. Which involved a resume presentation and suggestion for each person."
    imageSrc={event_1moby}
      />
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="Skill for the Top: Enhancing Project Management Techniques to Tackle Challenges"
    description="I attended an academic seminar about how to equip participants with foundational knowledge in project management and strategies for addressing challenges encountered during project execution by ICT Alumni."
    imageSrc={skill_to_the_top}
      />
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="IT Audit in Compliance with Cybersecurity Standard ISO/IEC 27001"
    description="I attended a seminar about IT auditing based on the ISO/IEC 27001 standard, in collaboration with ICT Cybersecurity Club. Which involved a group project and problem solving."
    imageSrc={it_audit}
      />
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="ICT Mahidol hosted a special talk on “Software Engineering”"
    description="During the lecture, Mr. Anuchit shared insights on working in software engineering and what it takes to be a successful software engineer. The event was attended by first-year students from the Bachelor of Science in DST Thai Program."
    imageSrc={soft_en}
      />
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="ICT Mahidol organized a special talk on “Data Science”"
    description="During the lecture, Mr. Kan Ouivirach, Data Product Developer & Technical Coach from ODD-E (Thailand) Co., Ltd., shared fundamental knowledge of Data Science and various data management processes with students from DST."
    imageSrc={data_science}
      />
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="Study Visit at SCGJWD Logistics"
    description="I attended a study visit to the SCGJWD Logistics Public Company Limited, for second-year students from the Bachelor of Science in Digital Science and Technology (DST Thai Program)."
    imageSrc={scg_jwd}
      />
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="SEC Lecture"
    description="I attended special lecture entitled “Data Engineering, Analytics and Architecture of the Office of the Securities and Exchange Commission (SEC).” by Dr. Cherdsak Kingkan, Assistant Director (Data Engineering and Analytics Team) of the Securities and Exchange Commission (SEC), as the guest speaker."
    imageSrc={sec_data_en}
      />
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="Study Visit at Bank of Thailand "
    description="I attended a study visit to the Bank of Thailand, for second-year students from the Bachelor of Science in Digital Science and Technology (DST Thai Program). The visit mostly talk about what is bank working behind the scenes."
    imageSrc={bank}
      />
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="iTAX Lecture"
    description="I attended a special lecture entitled “Product Development: How to Make It Memorable.” by Asst. Prof. Dr. Mickey Yutthana Srisavat, CEO and Founder of iTAX Incorporation Co., Ltd."
    imageSrc={itax}
      />
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="TCC Group Lecture"
    description="I attended a special lecture entitled “Smart Factory.” by TCC Technology Co., Ltd. The talk was mostly about an IoT Technologies, Smart Tools and what did TCC was about and working on. The Internship from TCC."
    imageSrc={tcc}
      />
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="PricewaterhouseCoopers Lecture"
    description="I attended a special lecture entitled “Life & Career as Cyber Security Consultant.” Ms. Thanika Chiengthong, Cybersecurity Consultant Manager at PricewaterhouseCoopers Holding (Thailand) Co., Ltd."
    imageSrc={pricewatercooper}
      />
    </div>

    <div className="flex justify-center flex-wrap"> 
      <ActivityCard 
    title="ASCE Hackathon 2026"
    description="I participated in ASCE Hackathon 2026 organized by Siriraj Hospital X ICT Mahidol. It’s about create a deep learning model for CAC Score and submit in streamlit for the most F1-Score. Our team finished 9th place in the event."
    imageSrc={asce}
      />
    </div>

    <Footer></Footer>
    </div>
  );
}