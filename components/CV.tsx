const CV = () => {
  return (
    <div className="w-full flex flex-row justify-center md:justify-start md:pl-10 gap-5">
      <a href="/Saksit_CV.pdf" download="Saksit_CV.pdf" target="_blank" rel="noopener noreferrer">
      <button className="mt-5 py-2 px-4 text-white bg-blue-500 rounded-xl hover:bg-black cursor-pointer transition-colors">Download CV</button>
      </a>

      <a href="/Saksit_CV.pdf" target="_blank" rel="noopener noreferrer">
        <button id="viewCV" className="mt-5 ml-5 py-2 px-4 text-white bg-green-500 rounded-xl hover:bg-black cursor-pointer transition-colors">View CV</button>
      </a>
    </div>
  );
};

export default CV;