import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import mahidol from "@/public/assets/Home/Mahidol.png";
import kpn from "@/public/assets/Home/KPN.png";

export const metadata = {
  title: 'Education - Saksit Jittasopee',
  description: 'Education Page',
}

export default function Education() {
  return (
    <div className='w-full overflow-x-hidden'>
    <Navbar></Navbar>
    <h1 className="m-5 mt-10 text-4xl font-bold flex justify-center">Education</h1>
        <div className="mt-15 text-center mx-auto max-w-7xl px-5"> 
            
            <div className="mt-5 border border-blue-500 rounded-xl bg-gray-100 flex flex-col p-5 shadow-xl">
              <div className='mt-5 flex flex-col items-center md:flex-row md:justify-start md:items-center'>
                <h1 className="m-5 text-2xl font-bold text-blue-500 md:ml-5">Bachelor Degree in Digital Science & Technology (B.Sc)</h1>
                <Image src={mahidol} alt="Mahidol" width={75} height={60} className='ml-5'></Image>
              </div>
          
              <div className="m-5 flex flex-col md:grid-cols-4 gap-4 md:gap-8 text-center md:text-left">
                <h1 className="text-xl text-gray-700 font-bold">2024 - Now</h1>
                <h1 className="text-xl text-gray-500">GPA: 3.42</h1>
                <h1 className="text-xl text-gray-500">Faculty of Information and Communication Technology</h1>
                <h1 className="text-xl text-gray-500">Mahidol University, Salaya Campus, Thailand</h1>
              </div>
            </div>
        
            <div className="mt-5 mb-5 border border-blue-500 rounded-xl bg-gray-100 flex flex-col p-5 shadow-xl">
              <div className='mt-5 flex flex-col items-center md:flex-row md:justify-start md:items-center'>
                <h1 className="m-5 text-2xl font-bold text-purple-500 md:ml-5">Middle - High School</h1>
                <Image src={kpn} alt="KPN" width={60} height={45} className='ml-5'></Image>
              </div>
              
              <div className="m-5 flex flex-col md:grid-cols-4 gap-4 md:gap-8 text-center md:text-left">
                <h1 className="text-xl text-gray-700 font-bold">2018 - 2024</h1>
                <h1 className="text-xl text-gray-500">GPA: 3.94</h1>
                <h1 className="text-xl text-gray-500">Mathematics - English</h1>
                <h1 className="text-xl text-gray-500">Kanchanapisek Wittayalai Nakhon Pathom, Thailand</h1>
              </div>
            </div>
          </div>
    <Footer></Footer>
    </div>
  );
}