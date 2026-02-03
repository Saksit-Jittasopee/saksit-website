import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaCalendarAlt } from "react-icons/fa";

export const metadata = {
  title: 'Education - Saksit Jittasopee',
  description: 'Education Page',
}

export default function Education() {
  return (
    <div className='w-full overflow-x-hidden'>
    <Navbar></Navbar>
    <div className="mt-20 flex justify-center items-center gap-3 mb-8">
        <span className="p-2 bg-blue-100 text-blue-600 rounded-lg dark:bg-blue-900 dark:text-blue-300">
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
        </span>
        <h1 className="text-3xl font-bold">Education</h1>
      </div>

      <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-5">                  
        
        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full -left-2 ring-4 ring-white dark:ring-gray-900">
            </span>
            
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition-shadow m-2 mr-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            Mahidol University
                        </h3>
                        <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mb-2">
                            Bachelor Degree in Digital Science & Technology (B.Sc)
                        </p>
                    </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <FaCalendarAlt className="mr-2" />
                    2024 - Now
                </div>
                
                <div className="text-gray-600 dark:text-gray-300 space-y-1">
                    <p>GPA: <span className="font-semibold text-gray-900 dark:text-white">3.42</span></p>
                    <p>Faculty of Information and Communication Technology</p>
                    <p className="text-sm text-gray-500">Mahidol University, Salaya Campus, Thailand</p>
                </div>
            </div>
        </li>

        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full -left-2 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            </span>

            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-md transition-shadow m-2 mr-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            Kanchanapisek Wittayalai Nakhon Pathom, Thailand
                        </h3>
                        <p className="text-base font-semibold text-purple-600 dark:text-purple-400 mb-2">
                            High School (Mathematics - English)
                        </p>
                    </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <FaCalendarAlt className="mr-2" />
                    2018 - 2024
                </div>

                <div className="text-gray-600 dark:text-gray-300 space-y-1">
                    <p>GPA: <span className="font-semibold text-gray-900 dark:text-white">3.94</span></p>
                    <p className="text-sm text-gray-500">Kanchanapisek Wittayalai Nakhon Pathom, Salaya, Thailand</p>
                </div>
            </div>
        </li>
      </ol>
    <Footer></Footer>
    </div>
  );
}