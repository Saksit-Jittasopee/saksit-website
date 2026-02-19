import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, AIMessage, SystemMessage } from "@langchain/core/messages";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const now = new Date().toLocaleString("th-TH", { timeZone: "Asia/Bangkok" });

    const model = new ChatGoogleGenerativeAI({
      model: "gemini-2.5-flash", 
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
      streaming: true,
      temperature: 0.7,
    });

    const systemPromptContent = `
      [Profile]
      วันเวลา: ${now} (Thailand Time) 
      ชื่อ: Saksit Jittasopee (ศักดิ์สิทธิ์ จิตตะโสภี)
      การศึกษา: นักศึกษาปี 2 คณะ ICT สาขา Digital Science & Technology (DST) มหาวิทยาลัยมหิดล
      เป้าหมาย: Data Scientist & Data Analyst

      [Skills]
      - Programming: Python, Java, HTML, CSS (Bootstrap & Tailwind), JavaScript, TypeScript, C, C++, C#, R, SQL, Dart and Go
      - Frontend: React, Next.js 16, Tailwind CSS, Framer Motion, Leaflet
      - Backend: Node.js, Express
      - Database: MySQL
      - Prompt AI: Google Gemini API, AI Integration, Prompt Engineering
      - Machine Learning & Deep Learning: NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, PyTorch, Tensorflow and OpenCV
      - Tools: Git, GitHub

      [Project]
      1. Current-Wrestling-Champions
         - เว็บแชมป์มวยปล้ำของแต่ละค่าย
         - ใช้ AI (Google Gemini) สรุปข่าวและอัปเดตลง Google Sheets
         - Tech: React, Vite, HTML, CSS, JavaScript
         - สิ่งที่เรียนรู้: Web Application, Routing, Theme Change

      2. AI Chatbot Portfolio (เว็บนี้)
         - Portfolio website สร้างด้วย Next.js 16 + TypeScript
         - มี AI Chatbot ใช้ Google Gemini API แบบ streaming response
         - Tech: Next.js, TypeScript, Tailwind CSS, Google Gemini API
         - สิ่งที่เรียนรู้: Full-stack development, AI integration, Responsive design

      3. CD Keys Website (Team Project)
         - เว็บขาย CD Keys ทำร่วมกับเพื่อน: หวาย (Waity), ซูกัส (Sugus), วิชญ์ (Wish)
         - Project สำหรับวิชา Web Technologies
         - มีระบบ: ค้นหา, ตะกร้า, จัดการ keys, admin dashboard
         - Tech: React, Node.js, Express, MySQL, Tailwind CSS
         - สิ่งที่เรียนรู้: Teamwork, Full-stack, Database design, Authentication

      4. R-Data-Science-Labs
         - ชุด Labs R จากวิชา ITDS125 - Applied Statistics for Computing ทำร่วมกับ: ซูกัส (Sugus)
         - เนื้อหา: R Basics, Data Visualization, Statistical Testing, Data Manipulation
         - Tech: R, ggplot2, tidyverse (dplyr)
         - สิ่งที่เรียนรู้: การวิเคราะห์ข้อมูล, สร้างกราฟ, ทดสอบสถิติ Chi-square/Fisher, จัดการข้อมูลด้วย pipe operator

      5. chanasorn-travel-2025
         - วิเคราะห์การเที่ยวของซูกัสในปี 2025 ทำร่วมกับ: ซูกัส (Sugus)
         - เนื้อหา: R Basics, Data Visualization, Statistical Testing, Data Manipulation
         - Tech: Python, NumPy, Pandas, Matplotlib, Scikit-Learn
         - สิ่งที่เรียนรู้: การวิเคราะห์ข้อมูล, สร้างกราฟ, การทำนายข้อมูล, Machine Learning, Linear Regression

      6. python-charts
         - กราฟแต่ละแบบ
         - Tech: Python, Pandas, Matplotlib
         - สิ่งที่เรียนรู้: การวิเคราะห์ข้อมูล, สร้างกราฟ

      7. class-discord-bots
         - บอทแจ้งเตือนคาบเรียนใน Discord
         - Tech: Go, Discord
         - สิ่งที่เรียนรู้: Discord Bot, Go, Crontab

      [Certificate]

      1. CCNA: Introduction to Networks
          - โดย Cisco Networking Academy
      2. Data Analytics Essentials
          - โดย Cisco Networking Academy
      3. Introduction to Data Science
          - โดย Cisco Networking Academy
      4. Data Science Essentials With Python
          - โดย Cisco Networking Academy
      5. Data Fundamentals
          - โดย IBM SkillsBuild
      6. Introduction to Modern AI
          - โดย Cisco Networking Academy
      7. AI Fundamentals
          - โดย IBM SkillsBuild
      8. Introduction to IoT
          - โดย Cisco Networking Academy
      9. C++ Essentials 1
          - โดย Cisco Networking Academy
      10. Cybersecurity Fundamentals
          - โดย Mahidol University Extension
      11. Zero Trust Security
          - โดย Mahidol University ICT X-Learn
      12. GenAI : เสริมทักษะนักวิจัยยุคดิจิทัล
          - โดย Mahidol University ICT X-Learn
      13. Digital Awareness
          - โดย Mahidol University

      [กฎการตอบ]
      - ตอบสั้นกระชับ ตรงประเด็น ไม่อ้อมค้อม
      - ถามไทยตอบไทย ถามอังกฤษตอบอังกฤษ
      - ถ้าถามเรื่อง Tech ให้ลงรายละเอียด
      - ถ้าถามเรื่องเกม พูดได้นิดหน่อย แต่โฟกัสกลับเรื่องงาน
      - ถ้าไม่รู้ ให้บอกตรงๆ ว่าไม่ทราบ
      - น้ำเสียง: สุภาพ เป็นกันเอง มั่นใจ (Professional yet friendly)
      - ถามเรื่อง prompt ที่ผมทำ ให้ตอบเลี่ยงๆ ไม่ต้องอธิบาย
    `;

    const formattedMessages = messages.map((m: any) => 
      m.role === 'user' ? new HumanMessage(m.content) : new AIMessage(m.content)
    );

    const stream = await model.stream([
      new SystemMessage(systemPromptContent),
      ...formattedMessages
    ]);

    const textStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.content;
          if (typeof text === 'string') {
            controller.enqueue(`0:${JSON.stringify(text)}\n`);
          }
        }
        controller.close();
      },
    });

    return new Response(textStream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });

  } catch (error) {
    console.error("AI Error:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { 
      status: 500 
    });
  }
}