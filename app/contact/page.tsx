import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactMapLoader from "@/components/ContactMapLoader";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone, FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

export const metadata = {
  title: 'Contact - Saksit Jittasopee',
  description: 'Get in touch with Saksit Jittasopee via social media, email, or explore university location details.',
};

export default function Contact() {
  const contactLinks = [
    {
      title: "GitHub",
      handle: "@Saksit-Jittasopee",
      icon: FaGithub,
      iconColor: "text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400",
      href: "https://github.com/Saksit-Jittasopee",
      actionText: "Visit GitHub",
    },
    {
      title: "LinkedIn",
      handle: "Saksit Jittasopee",
      icon: FaLinkedin,
      iconColor: "text-blue-600 dark:text-blue-400 group-hover:scale-110",
      href: "https://www.linkedin.com/in/saksit-jittasopee-743981382/",
      actionText: "Connect on LinkedIn",
    },
    {
      title: "Facebook",
      handle: "Saksit Jittasopee",
      icon: FaFacebook,
      iconColor: "text-blue-600 dark:text-blue-500 group-hover:scale-110",
      href: "https://www.facebook.com/saksit.jittasopee.1",
      actionText: "Follow on Facebook",
    },
    {
      title: "Instagram",
      handle: "@saksitjittasopee",
      icon: FaInstagram,
      iconColor: "text-pink-600 dark:text-pink-400 group-hover:scale-110",
      href: "https://www.instagram.com/saksitjittasopee",
      actionText: "Follow on Instagram",
    },
    {
      title: "X (Twitter)",
      handle: "@theshockedxd",
      icon: FaXTwitter,
      iconColor: "text-slate-800 dark:text-slate-200 group-hover:scale-110",
      href: "https://x.com/theshockedxd",
      actionText: "Follow on X",
    },
  ];

  return (
    <div className='min-h-screen flex flex-col bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100'>
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 text-sm font-semibold mb-4">
            <FaPhone size={16} />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Contact <span className="text-blue-600 dark:text-blue-400">Information</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Feel free to reach out for collaborations, project inquiries, or connect on social platforms.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Email Card (Spans or highlighted) */}
          <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
                <IoMdMail size={30} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Email Addresses</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Direct contact via Outlook or Gmail</p>

              <div className="space-y-3 text-sm">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/40">
                  <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">University Outlook</span>
                  <a href="mailto:saksit.jit@student.mahidol.ac.th" className="text-blue-600 dark:text-blue-400 font-medium hover:underline break-all">
                    saksit.jit@student.mahidol.ac.th
                  </a>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/40">
                  <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">University Gmail</span>
                  <a href="mailto:saksit.jit@student.mahidol.edu" className="text-blue-600 dark:text-blue-400 font-medium hover:underline break-all">
                    saksit.jit@student.mahidol.edu
                  </a>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/40">
                  <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Personal Gmail</span>
                  <a href="mailto:saksitjittasopee@gmail.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline break-all">
                    saksitjittasopee@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          {contactLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center mb-5 transition-transform ${item.iconColor}`}>
                    <Icon size={30} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.handle}</p>
                </div>

                <div className="pt-6 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  <span>{item.actionText}</span>
                  <FiExternalLink size={14} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Map Section */}
        <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
            <div>
              <div className="flex items-center gap-2 text-rose-500 mb-1">
                <FaMapMarkerAlt size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Campus Location</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Faculty of ICT, Mahidol University
              </h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Salaya, Phutthamonthon, Nakhon Pathom, Thailand
            </p>
          </div>

          <ContactMapLoader />
        </div>
      </main>

      <Footer />
    </div>
  );
}