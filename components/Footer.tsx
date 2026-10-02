import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Col 1: Bio */}
          <div className="flex flex-col space-y-3">
            <h2 className="text-white text-xl font-bold flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm">S</span>
              Saksit Jittasopee
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              3rd Year Computer Science / Digital Science & Technology student at Faculty of ICT, Mahidol University. Aspiring Data Scientist & Developer.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex flex-col md:items-center">
            <div className="space-y-3">
              <h3 className="text-white text-base font-semibold uppercase tracking-wider text-xs">
                Quick Navigation
              </h3>
              <div className="flex flex-col space-y-2 text-sm">
                <Link href="/" className="hover:text-white hover:underline transition-colors">Home</Link>
                <Link href="/activity" className="hover:text-white hover:underline transition-colors">Activities</Link>
                <Link href="/certificate" className="hover:text-white hover:underline transition-colors">Certificates</Link>
                <Link href="/projects" className="hover:text-white hover:underline transition-colors">Projects</Link>
                <Link href="/education" className="hover:text-white hover:underline transition-colors">Education</Link>
                <Link href="/contact" className="hover:text-white hover:underline transition-colors">Contact</Link>
              </div>
            </div>
          </div>

          {/* Col 3: Social & Connect */}
          <div className="flex flex-col md:items-end space-y-3">
            <h3 className="text-white text-base font-semibold uppercase tracking-wider text-xs">
              Connect With Me
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Saksit-Jittasopee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/saksit-jittasopee-743981382/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com/saksit.jittasopee.1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/saksitjittasopee/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://x.com/theshockedxd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-colors"
                aria-label="X"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
            <p className="text-xs text-slate-500 pt-2">
              Based in Nakhon Pathom, Thailand
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>&copy; {currentYear} Saksit Jittasopee. All rights reserved.</p>
          <p>
            Designed & Built with <span className="text-blue-400">Next.js</span> & <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}