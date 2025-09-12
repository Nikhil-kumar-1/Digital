import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Accountant() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const subjects = [
    { 
      title: "📘 Subject Knowledge", 
      desc: "Accounting, Auditing, Taxation", 
      link: "/accountant/subject-knowledge", 
      color: "bg-orange-500 hover:bg-orange-600" 
    },
    { 
      title: "🌍 General Knowledge", 
      desc: "History, Reasoning, Current Affairs", 
      link: "/gk", 
      color: "bg-orange-600 hover:bg-orange-700" 
    },
    { 
      title: "💻 Computer Science", 
      desc: "MS-Office, DBMS, Networking", 
      link: "/computer-science", 
      color: "bg-orange-700 hover:bg-orange-800" 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl mt-20 font-bold text-center mb-8 pt-10 text-orange-500 animate-pulse">
          Accountant <span className="text-white">(BPIU)</span> Syllabus
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16 ">
          {subjects.map((s, idx) => (
            <Link 
              key={idx} 
              to={s.link}
              className={`transform transition-all duration-500  ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className={`p-4 rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${s.color} h-48 flex flex-col justify-center items-center text-center border-2 border-orange-400 hover:border-orange-300 hover:scale-105 hover:shadow-2xl`}>
                <div className="text-4xl mb-4 transform hover:scale-110 transition-transform">
                  {s.title.split(' ')[0]}
                </div>
                <h2 className="text-xl font-semibold mb-2">{s.title.split(' ').slice(1).join(' ')}</h2>
                <p className="text-gray-100 mt-2">{s.desc}</p>
                <div className="mt-4 text-sm font-medium text-white bg-black bg-opacity-30 px-3 py-1 rounded-full">
                  Explore Now →
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-16 mb-10 opacity-80">
          <p className="text-orange-300">Select a subject to explore detailed syllabus and resources</p>
        </div>
      </div>
    </div>
  );
}