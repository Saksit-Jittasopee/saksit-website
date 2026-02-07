<div align="center">

# Saksit's - Website

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
![Leaflet Badge](https://img.shields.io/badge/Leaflet-199900?logo=leaflet&logoColor=fff&style=for-the-badge)

**A modern, responsive portfolio website**

[🌐 Live Demo](https://saksit-jittasopee.github.io/saksit-website/) • [📧 Contact Me](mailto:saksitjittasopee@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/saksit-jittasopee-743981382/)

</div>

---

## ✨ Features

- 🤖 **AI Chatbot** - Powered by Google Gemini API with real-time streaming responses
- 🌓 **Dark/Light Mode** - Smooth theme switching with next-themes
- 📱 **Responsive Design** - Mobile-first approach, looks great on all devices
- ⚡ **Fast Performance** - Built with Next.js 16 App Router
- 🎨 **Modern UI** - Clean design with Tailwind CSS & Framer Motion animations
- 📄 **Project Showcase** - Interactive project cards with demo images
- 🗺️ **Map** - Map with Leaflet - OpenStreetMap

---

## 🛠️ Tech Stack

| Category       | Technologies                |
| -------------- | --------------------------- |
| **Framework**  | Next.js 16, React 18        |
| **Language**   | TypeScript                  |
| **Styling**    | Tailwind CSS, Framer Motion |
| **Map**        | Leaflet-OpenStreetMap       |
| **AI**         | Google Gemini API, LangChain   |
| **Icons**      | Lucide React, React Icons, Icon Packs (https://www.iconpacks.net/free-icon/user-3296.html)  |
| **Deployment** | GitHub.io                   |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Saksit-Jittasopee/saksit-website.git
   cd saksit-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your Google Gemini API key:

   ```env
   GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** 🎉

---

## 📁 Project Structure

```
my-portfolio/
📦app
 ┣ 📂api
 ┃ ┗ 📜route.tsx
 ┣ 📂certificate
 ┃ ┗ 📜page.tsx
 ┣ 📂contact
 ┃ ┗ 📜page.tsx
 ┣ 📂education
 ┃ ┗ 📜page.tsx
 ┣ 📂projects
 ┃ ┗ 📜page.tsx
 ┣ 📜favicon.ico
 ┣ 📜globals.css
 ┣ 📜layout.tsx
 ┗ 📜page.tsx
📦components
 ┣ 📜CertificateCard.tsx
 ┣ 📜ChatWidget.tsx
 ┣ 📜ContactMap.tsx
 ┣ 📜ContactMapLoader.tsx
 ┣ 📜CV.tsx
 ┣ 📜Footer.tsx
 ┣ 📜Navbar.tsx
 ┣ 📜ProjectCard.tsx
 ┣ 📜providers.tsx
 ┣ 📜ScrollToTopButton.tsx
 ┗ 📜ThemeToggle.tsx
📦public
 ┣ 📂assets
 ┃ ┣ 📂Certificate
 ┃ ┃ ┣ 📜AIFundamentalsIBM.png
 ┃ ┃ ┣ 📜AI_IBM_Credentials.png
 ┃ ┃ ┣ 📜C++_Essentials.png
 ┃ ┃ ┣ 📜CCNA-_Introduction_to_Networks.png
 ┃ ┃ ┣ 📜CCNA_Introduction_to_Networks.png
 ┃ ┃ ┣ 📜Cisco_AI_Fundamentals_with_IBM.png
 ┃ ┃ ┣ 📜CPP_Essentials.png
 ┃ ┃ ┣ 📜cybersecurity.png
 ┃ ┃ ┣ 📜data-analytics-essentials-badges.png
 ┃ ┃ ┣ 📜data-fundamentals.png
 ┃ ┃ ┣ 📜DataAnalyticsEssentialsCer.png
 ┃ ┃ ┣ 📜DataScienceEssentialswithPython.png
 ┃ ┃ ┣ 📜DataSciencePython.png
 ┃ ┃ ┣ 📜digital awareness.png
 ┃ ┃ ┣ 📜GenAI.png
 ┃ ┃ ┣ 📜IBM_AI_Fundamentals.png
 ┃ ┃ ┣ 📜IBM_Data_Fundamentals.png
 ┃ ┃ ┣ 📜intro-data-science-badges.png
 ┃ ┃ ┣ 📜Intro2IoT.png
 ┃ ┃ ┣ 📜IntroductiontoDataScience.png
 ┃ ┃ ┣ 📜Introduction_to_IoT.png
 ┃ ┃ ┣ 📜Introduction_to_Modern_AI_cer.png
 ┃ ┃ ┣ 📜it.png
 ┃ ┃ ┣ 📜ModernAI.png
 ┃ ┃ ┗ 📜Zero Trust Security.png
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📜image.jpg
 ┃ ┃ ┣ 📜KPN.png
 ┃ ┃ ┣ 📜Mahidol.png
 ┃ ┃ ┣ 📜matplotlib.png
 ┃ ┃ ┗ 📜User.png
 ┃ ┗ 📂Projects
 ┃ ┃ ┣ 📜Ayema5kon1.png
 ┃ ┃ ┣ 📜Ayema5kon2.png
 ┃ ┃ ┣ 📜Ayema5kon3.png
 ┃ ┃ ┣ 📜Ayema5kon4.png
 ┃ ┃ ┣ 📜Ayema5kon5.png
 ┃ ┃ ┣ 📜Ayema5kon6.png
 ┃ ┃ ┣ 📜Ayema5kon7.png
 ┃ ┃ ┣ 📜Ayema5kon8.png
 ┃ ┃ ┣ 📜bar.png
 ┃ ┃ ┣ 📜barh.png
 ┃ ┃ ┣ 📜BoxPlot.png
 ┃ ┃ ┣ 📜chanasorn_travel_2025_1.png
 ┃ ┃ ┣ 📜chanasorn_travel_2025_2.png
 ┃ ┃ ┣ 📜chanasorn_travel_2025_3.png
 ┃ ┃ ┣ 📜Current_Wrestling_Champions_1.png
 ┃ ┃ ┣ 📜Current_Wrestling_Champions_2.png
 ┃ ┃ ┣ 📜desktop.ini
 ┃ ┃ ┣ 📜friday.png
 ┃ ┃ ┣ 📜GrazedChart.png
 ┃ ┃ ┣ 📜histogram.png
 ┃ ┃ ┣ 📜Histogram_Count _Score.png
 ┃ ┃ ┣ 📜line.png
 ┃ ┃ ┣ 📜monday.png
 ┃ ┃ ┣ 📜pie.png
 ┃ ┃ ┣ 📜Q-Q_Plot_A.png
 ┃ ┃ ┣ 📜Q-Q_Plot_B.png
 ┃ ┃ ┣ 📜Q-Q_Plot_C.png
 ┃ ┃ ┣ 📜ScatterPlot.png
 ┃ ┃ ┣ 📜scatterplot_python.png
 ┃ ┃ ┣ 📜Tea_Smoker_Chart.png
 ┃ ┃ ┣ 📜thursday.png
 ┃ ┃ ┣ 📜tuesday.png
 ┃ ┃ ┗ 📜wednesday.png
 ┣ 📜.nojekyll
 ┣ 📜AI_Fundamentals_with_IBM_SkillsBuild_certificate.pdf
 ┣ 📜Ayema5kon.pdf
 ┣ 📜C--_Essentials_1_certificate.pdf
 ┣ 📜CCNA-_Introduction_to_Networks.pdf
 ┣ 📜chanasorn-travel-2025.pdf
 ┣ 📜class-discord-bot.pdf
 ┣ 📜Current_Wrestling_Champions.pdf
 ┣ 📜cybersecurity.pdf
 ┣ 📜DataAnalyticsEssentials.pdf
 ┣ 📜DataScienceEssentialswithPython.pdf
 ┣ 📜digital_awareness.pdf
 ┣ 📜file.svg
 ┣ 📜GenAI.pdf
 ┣ 📜globe.svg
 ┣ 📜IBMDesign20251124-31-gi146e.pdf
 ┣ 📜IBMDesign20251129-31-s9ks8h.pdf
 ┣ 📜Introduction_to_Data_Science_certificate.pdf
 ┣ 📜Introduction_to_IoT_certificate.pdf
 ┣ 📜Introduction_to_Modern_AI_certificate.pdf
 ┣ 📜it.pdf
 ┣ 📜next.svg
 ┣ 📜Python-Chart.pdf
 ┣ 📜R-Project.pdf
 ┣ 📜Saksit_CV.pdf
 ┣ 📜vercel.svg
 ┣ 📜window.svg
 ┗ 📜Zero_Trust_Security.pdf
```

---

## 🤝 Connect With Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saksit-jittasopee-743981382/)
[![GitHub](https://img.shields.io/badge/GitHub-white?style=for-the-badge&logo=github&logoColor=black)](https://github.com/Saksit-Jittasopee)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/saksitjittasopee/)
[![X](https://img.shields.io/badge/X-black?style=for-the-badge&logo=x&logoColor=white)](https://x.com/theshockedxd)

**⭐ Star this repo if you like it!**

</div>

---

<div align="center">

Made with ❤️ by **Saksit Jittasopee**

_2nd Year DST Student @ Mahidol University_

</div>