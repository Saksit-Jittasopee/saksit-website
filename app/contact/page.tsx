import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactMapLoader from "@/components/ContactMapLoader";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const metadata = {
  title: 'Contact - Saksit Jittasopee',
  description: 'Contact Page',
}

export default function Contact() {
  return (
    <div className='w-full overflow-x-hidden'>
      <Navbar />
      <div className="mt-10 text-center">
          <h1 className="m-5 text-3xl font-bold">Contact Information</h1>
        </div>
      
        <div className="mt-5 px-4 flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <a href="https://github.com/Saksit-Jittasopee" target="_blank" className="mt-2 hover:scale-110 transition-transform"><FaGithub size={75} /></a>
            <h1 className="mt-5 text-2xl font-bold">GitHub</h1>
            <h1 className="mt-2 text-sm font-bold text-gray-600">Link To Website:</h1>
            <a href="https://github.com/Saksit-Jittasopee" target="_blank" className="mt-1 text-blue-500 break-all hover:underline">View GitHub</a>
          </div>
      
          <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <a href="https://www.facebook.com/saksit.jittasopee.1" target="_blank" className="mt-2 hover:scale-110 transition-transform"><FaFacebook size={75} /></a>
            <h1 className="mt-5 text-2xl font-bold">Facebook</h1>
            <h1 className="mt-2 text-sm font-bold text-gray-600">Link To Website:</h1>
            <a href="https://www.facebook.com/saksit.jittasopee.1" target="_blank" className="mt-1 text-blue-500 break-all hover:underline">View Facebook</a>
          </div>
      
          <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <a href="https://www.instagram.com/saksitjittasopee" target="_blank" className="mt-2 hover:scale-110 transition-transform"><FaInstagram size={75} /></a>
            <h1 className="mt-5 text-2xl font-bold">Instagram</h1>
            <h1 className="mt-2 text-sm font-bold text-gray-600">Link To Website:</h1>
            <a href="https://www.instagram.com/saksitjittasopee" target="_blank" className="mt-1 text-blue-500 break-all hover:underline">View Instagram</a>
          </div>
      
          <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <a href="https://www.linkedin.com/in/saksit-jittasopee-743981382/" target="_blank" className="mt-2 hover:scale-110 transition-transform"><FaLinkedin size={75} /></a>
            <h1 className="mt-5 text-2xl font-bold">LinkedIn</h1>
            <h1 className="mt-2 text-sm font-bold text-gray-600">Link To Website:</h1>
            <a href="https://www.linkedin.com/in/saksit-jittasopee-743981382/" target="_blank" className="mt-1 text-blue-500 break-all hover:underline">View LinkedIn</a>
          </div>
      
          <div className="w-full sm:w-80 bg-gray-100 border border-blue-500 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <a href="mailto:saksitjittasopee@gmail.com" target="_blank" className="mt-2 hover:scale-110 transition-transform"><IoMdMail size={75} /></a>
            
            <div className="w-full text-center mt-4">
              <h1 className="text-sm font-bold text-gray-600">University Outlook:</h1>
              <a href="mailto:saksit.jit@student.mahidol.ac.th" className="text-blue-500 text-sm break-all hover:underline">saksit.jit@student.mahidol.ac.th</a>
            </div>
            
            <div className="w-full text-center mt-2">
              <h1 className="text-sm font-bold text-gray-600">University Gmail:</h1>
              <a href="mailto:saksit.jit@student.mahidol.edu" className="text-blue-500 text-sm break-all hover:underline">saksit.jit@student.mahidol.edu</a>
            </div>
            
            <div className="w-full text-center mt-2">
              <h1 className="text-sm font-bold text-gray-600">Personal Gmail:</h1>
              <a href="mailto:saksitjittasopee@gmail.com" className="text-blue-500 text-sm break-all hover:underline">saksitjittasopee@gmail.com</a>
            </div>
          </div>
      
        </div>
      
        <div className="mt-10 text-center">
          <h1 className="m-5 text-3xl font-bold">ICT Mahidol University</h1>
        </div>
        <div className="m-5 flex justify-center">
          <ContactMapLoader/>
        </div>
      <Footer />
    </div>
  );
}