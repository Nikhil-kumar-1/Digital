import { useState } from "react";

export default function GeneralKnowledge() {
  const [openSection, setOpenSection] = useState(null);
  const [openSubSection, setOpenSubSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
    setOpenSubSection(null);
  };

  const toggleSubSection = (index) => {
    setOpenSubSection(openSubSection === index ? null : index);
  };

  const gkTopics = [
    {
      title: "1. Awards and Honours (National & International)",
      content: "Recognitions and accolades conferred for exceptional achievements in various fields at national and international levels.",
      subsections: [
        {
          title: "Bharat Ratna",
          content: "India's highest civilian award, awarded for exceptional service towards the advancement of Art, Literature, Science, and Public Services."
        },
        {
          title: "Padma Awards",
          content: "Padma Vibhushan, Padma Bhushan, and Padma Shri - India's second-highest civilian awards for distinguished service in various fields."
        },
        {
          title: "Nobel Prize",
          content: "International awards bestowed in several categories by Swedish and Norwegian institutions for academic, cultural, and scientific advances."
        },
        {
          title: "Gallantry Awards",
          content: "Param Vir Chakra, Maha Vir Chakra, Vir Chakra - India's military decorations awarded for valor and bravery in combat."
        },
        {
          title: "International Awards",
          content: "Pulitzer Prize, Oscar Awards, Grammy Awards, Booker Prize, Ramon Magsaysay Award, and other prestigious international recognitions."
        }
      ]
    },
    {
      title: "2. Important Schemes (Key Government Schemes and Programs)",
      content: "Government initiatives and programs aimed at socio-economic development and welfare of citizens.",
      subsections: [
        {
          title: "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
          content: "Financial inclusion program to provide affordable access to financial services like banking, credit, insurance, and pensions."
        },
        {
          title: "Ayushman Bharat Yojana",
          content: "World's largest health protection scheme providing health insurance coverage to economically vulnerable families."
        },
        {
          title: "Swachh Bharat Abhiyan",
          content: "National campaign to eliminate open defecation and improve solid waste management across India."
        },
        {
          title: "Make in India",
          content: "Initiative to encourage companies to manufacture their products in India and boost the manufacturing sector."
        },
        {
          title: "Digital India",
          content: "Program to transform India into a digitally empowered society and knowledge economy."
        },
        {
          title: "Pradhan Mantri Awas Yojana (PMAY)",
          content: "Housing for All scheme aimed at providing affordable housing to urban and rural poor by 2022."
        }
      ]
    },
    {
      title: "3. History of India (Modern)",
      content: "Historical events and developments in India from the 18th century to the present day.",
      subsections: [
        {
          title: "British Colonial Rule",
          content: "Establishment and expansion of British East India Company, Battle of Plassey (1757), and subsequent British dominance."
        },
        {
          title: "Indian Independence Movement",
          content: "First War of Independence (1857), Formation of Indian National Congress (1885), Non-Cooperation Movement, Civil Disobedience Movement, Quit India Movement."
        },
        {
          title: "Partition of India",
          content: "Division of British India in 1947 into two independent dominions: India and Pakistan, accompanied by widespread violence and mass migrations."
        },
        {
          title: "Post-Independence Era",
          content: "Integration of princely states, linguistic reorganization of states, wars with Pakistan and China, Green Revolution, Economic Liberalization (1991)."
        },
        {
          title: "Important Leaders",
          content: "Mahatma Gandhi, Jawaharlal Nehru, Sardar Patel, Subhas Chandra Bose, Bhagat Singh, and other key figures in modern Indian history."
        }
      ]
    },
    {
      title: "4. National and International Organizations",
      content: "Important institutions and bodies that operate at national and global levels for various purposes.",
      subsections: [
        {
          title: "United Nations (UN)",
          content: "International organization founded in 1945 to maintain international peace and security, develop friendly relations among nations, and promote social progress."
        },
        {
          title: "World Bank and IMF",
          content: "International financial institutions that provide loans and financial assistance to countries for development programs and economic stability."
        },
        {
          title: "World Trade Organization (WTO)",
          content: "International organization that regulates and facilitates international trade between nations."
        },
        {
          title: "BRICS",
          content: "Association of five major emerging national economies: Brazil, Russia, India, China, and South Africa."
        },
        {
          title: "SAARC",
          content: "South Asian Association for Regional Cooperation promoting development and economic integration in South Asia."
        },
        {
          title: "Indian Organizations",
          content: "NABARD, SEBI, RBI, CBI, NITI Aayog, ISRO, DRDO, and other important national institutions."
        }
      ]
    },
    {
      title: "5. Science and Technology",
      content: "Basic scientific concepts and recent developments that shape our understanding of the world and drive innovation.",
      subsections: [
        {
          title: "Space Technology",
          content: "ISRO missions (Chandrayaan, Mangalyaan, Gaganyaan), satellite technology, space exploration, and astronomical discoveries."
        },
        {
          title: "Information Technology",
          content: "Computer science, artificial intelligence, machine learning, blockchain, cybersecurity, and digital innovations."
        },
        {
          title: "Biotechnology",
          content: "Genetic engineering, CRISPR technology, vaccines, pharmaceutical advancements, and agricultural biotechnology."
        },
        {
          title: "Renewable Energy",
          content: "Solar power, wind energy, electric vehicles, sustainable technologies, and climate change mitigation efforts."
        },
        {
          title: "Nuclear Technology",
          content: "Nuclear power generation, applications in medicine and agriculture, and India's nuclear program."
        },
        {
          title: "Recent Developments",
          content: "COVID-19 vaccines, quantum computing, 5G technology, IoT, nanotechnology, and other cutting-edge innovations."
        }
      ]
    },
    {
      title: "6. Sports",
      content: "Important sports events, renowned players, and significant achievements in the world of sports.",
      subsections: [
        {
          title: "Olympic Games",
          content: "History of Olympics, India's performance in various editions, notable Indian Olympians, and upcoming games."
        },
        {
          title: "Cricket",
          content: "ICC tournaments (World Cup, T20 World Cup, Champions Trophy), IPL, legendary cricketers, and records."
        },
        {
          title: "Hockey",
          content: "India's national sport, India's golden era in hockey, major tournaments, and contemporary players."
        },
        {
          title: "Asian Games and Commonwealth Games",
          content: "Multi-sport events where India has consistently performed well, medal tallies, and memorable moments."
        },
        {
          title: "Individual Sports",
          content: "Tennis, badminton, wrestling, boxing, athletics, and other sports where Indians have excelled internationally."
        },
        {
          title: "Indian Sports Personalities",
          content: "Major Dhyan Chand, Sachin Tendulkar, PV Sindhu, Mary Kom, Viswanathan Anand, Neeraj Chopra, and other sporting legends."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10 py-8">
          <h1 className=" mt-10 text-4xl md:text-5xl font-bold text-orange-500 mb-4 animate-pulse">
            General Knowledge
          </h1>
          <p className="text-orange-200 text-lg max-w-2xl mx-auto">
            Comprehensive guide to important national and international facts, events, and developments
          </p>
        </header>

        <div className="space-y-4">
          {gkTopics.map((topic, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden border-2 border-orange-700 transition-all duration-300 ${
                openSection === index ? 'bg-gray-800' : 'bg-gray-900'
              }`}
            >
              <button
                className="w-full p-4 md:p-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleSection(index)}
              >
                <span className="text-lg md:text-xl font-semibold text-orange-400">
                  {topic.title}
                </span>
                <span className="text-orange-500 text-xl">
                  {openSection === index ? '−' : '+'}
                </span>
              </button>
              
              {openSection === index && (
                <div className="px-4 md:px-6 pb-4 md:pb-6">
                  <p className="text-orange-100 mb-4">{topic.content}</p>
                  
                  {topic.subsections && topic.subsections.length > 0 && (
                    <div className="mt-4 space-y-3">
                      {topic.subsections.map((sub, subIndex) => (
                        <div key={subIndex} className="bg-gray-700 rounded-lg overflow-hidden">
                          <button
                            className="w-full p-3 text-left flex justify-between items-center focus:outline-none"
                            onClick={() => toggleSubSection(`${index}-${subIndex}`)}
                          >
                            <span className="font-medium text-orange-300">{sub.title}</span>
                            <span className="text-orange-500">
                              {openSubSection === `${index}-${subIndex}` ? '−' : '+'}
                            </span>
                          </button>
                          
                          {openSubSection === `${index}-${subIndex}` && (
                            <div className="px-3 pb-3">
                              <p className="text-gray-300">{sub.content}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <footer className="text-center mt-12 py-6 text-orange-200 border-t border-orange-800">
          <p>General Knowledge FAQ • BPIU Syllabus</p>
        </footer>
      </div>
    </div>
  );
}