import Link from "next/link";

export const metadata = {
  title: 'Home - Saksit Jittasopee',
  description: 'Home Page',
}

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center border-b border-gray-500 shadow-sm px-6 py-3 bg-white">
    <Link href="/"><h1 className="text-2xl font-bold ">Saksit Jittasopee</h1></Link>
    <div className="flex flex-col space-y-2 md:flex-row md:space-x-8 md:space-y-0 md:items-center mt-2 md:mt-0">
    <Link href="/"><h1 className="text-xl hover:text-blue-900 hover:underline">Home</h1></Link>
    <Link href="/certificate"><h1 className="text-xl hover:text-blue-900 hover:underline">Certificate</h1></Link>
    <Link href="/projects"><h1 className="text-xl hover:text-blue-900 hover:underline">Projects</h1></Link>
    <Link href="/education"><h1 className="text-xl hover:text-blue-900 hover:underline">Education</h1></Link>
    <Link href="/contact"><h1 className="text-xl hover:text-blue-900 hover:underline">Contact</h1></Link>
  </div>
</nav>
  );
}