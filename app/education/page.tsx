import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaCalendarAlt, FaGraduationCap, FaMapMarkerAlt, FaAward } from "react-icons/fa";

export const metadata = {
  title: 'Education - Saksit Jittasopee',
  description: 'Academic background and educational journey of Saksit Jittasopee at Mahidol University and Kanchanapisek Wittayalai.',
};

export default function Education() {
  return (
    <div className='min-h-screen flex flex-col bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100'>
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 text-sm font-semibold mb-4">
            <FaGraduationCap size={18} />
            <span>Academic Background</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Education</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Educational milestones and academic achievements throughout high school and university.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-blue-500/40 dark:border-blue-500/30 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-12">
          
          {/* Item 1: Mahidol University */}
          <div className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-blue-600 ring-4 ring-white dark:ring-[#0b1120] flex items-center justify-center transition-transform group-hover:scale-125">
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </div>

            <div className="p-6 sm:p-7 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/40 w-fit">
                  <FaCalendarAlt size={12} />
                  2024 - Present
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50 w-fit">
                  <FaAward size={13} />
                  GPA: 3.63
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1.5">
                Mahidol University
              </h3>
              
              <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                Bachelor of Science in Digital Science & Technology (B.Sc DST)
              </h4>

              <div className="space-y-1.5 text-slate-600 dark:text-slate-300 text-sm">
                <p className="font-medium text-slate-700 dark:text-slate-200">
                  Faculty of Information and Communication Technology (MUICT)
                </p>
                <p className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                  <FaMapMarkerAlt className="text-rose-500" />
                  Salaya Campus, Nakhon Pathom, Thailand
                </p>
              </div>
            </div>
          </div>

          {/* Item 2: High School */}
          <div className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-purple-600 ring-4 ring-white dark:ring-[#0b1120] flex items-center justify-center transition-transform group-hover:scale-125">
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </div>

            <div className="p-6 sm:p-7 bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/40 w-fit">
                  <FaCalendarAlt size={12} />
                  2018 - 2024
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50 w-fit">
                  <FaAward size={13} />
                  GPA: 3.94
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1.5">
                Kanchanapisek Wittayalai Nakhon Pathom
              </h3>
              
              <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                High School (Mathematics - English Program)
              </h4>

              <div className="space-y-1.5 text-slate-600 dark:text-slate-300 text-sm">
                <p className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
                  <FaMapMarkerAlt className="text-rose-500" />
                  Salaya, Nakhon Pathom, Thailand
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}