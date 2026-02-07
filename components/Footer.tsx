import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const metadata = {
  title: 'Home - Saksit Jittasopee',
  description: 'Home Page',
}

export default function Footer() {
  return (
    <footer className="bg-blue-950 border-t border-gray-500 shadow-lg">
      <div className="grid grid-cols-3 gap-4 py-8">
        <div className="text-center">
          <h1 className="text-white text-xl font-semibold mb-2 ml-5">Saksit&apos;s Personal Website</h1>
        </div>
        <div className="flex flex-col items-center justify-start">
          <h1 className="text-white text-xl font-bold mb-4">Quick Links</h1>
          <div className="flex flex-col space-y-2">
            <Link href="/"><span className="text-white text-lg hover:underline text-center">Home</span></Link>
            <Link href="/certificate"><span className="text-white text-lg hover:underline text-center">Certificate</span></Link>
            <Link href="/projects"><span className="text-white text-lg hover:underline text-center">Projects</span></Link>
            <Link href="/education"><span className="text-white text-lg hover:underline text-center">Education</span></Link>
            <Link href="/contact"><span className="text-white text-lg hover:underline text-center">Contact</span></Link>
          </div>
        </div>
        <div className="grid grid-cols 4 text-center flex justify-center mb-2">
          <h1 className="text-white text-xl font-semibold">Connect</h1>
            <a href="https://www.facebook.com/saksit.jittasopee.1" className='ml-5 text-white hover:text-black' target="_blank"><FaFacebook size={20}/></a>
            <a href="https://www.instagram.com/saksitjittasopee/" className='ml-5 text-white hover:text-black' target="_blank"><FaInstagram size={20}/></a>
            <a href="https://github.com/Saksit-Jittasopee" className='ml-5 text-white hover:text-black' target="_blank"><FaGithub size={20}/></a>
            <a href="https://www.linkedin.com/in/saksit-jittasopee-743981382/" className='ml-5 text-white hover:text-black' target="_blank"><FaLinkedin size={20}/></a>
            <a href="https://x.com/theshockedxd" className='ml-5 text-white hover:text-black' target="_blank"><FaXTwitter size={20}/></a>
        </div>
      </div>
      <div className="border-t border-gray-400 py-4">
        <h1 className="text-white text-center text-sm">
          &copy; 2025 Saksit Jittasopee. All rights reserved.
        </h1>
        <Link href="https://www.iconpacks.net/free-icon/user-3296.html" className="text-white text-center block text-sm hover:text-green-400">Icons are designed by Icon Packs</Link>
      </div>
    </footer>
  );
}