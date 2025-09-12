import { useState } from "react";

export default function ComputerScience() {
  const [openSection, setOpenSection] = useState(null);
  const [openSubSection, setOpenSubSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
    setOpenSubSection(null);
  };

  const toggleSubSection = (index) => {
    setOpenSubSection(openSubSection === index ? null : index);
  };

  const computerScienceTopics = [
    {
      title: "1. Fundamentals of Computers",
      content: "Basic concepts and components that form the foundation of computer systems.",
      subsections: [
        {
          title: "Computer Architecture",
          content: "Understanding the basic structure of computers including CPU, memory, input/output devices, and storage systems. The von Neumann architecture forms the basis of most modern computers with its stored-program concept."
        },
        {
          title: "Data Representation",
          content: "How computers represent and process data using binary number system (0s and 1s). Concepts include bits, bytes, binary, octal, hexadecimal number systems, and character encoding standards like ASCII and Unicode."
        },
        {
          title: "Computer Hardware",
          content: "Physical components of a computer system including motherboard, processor, RAM, storage devices, input devices (keyboard, mouse), output devices (monitor, printer), and peripheral devices."
        },
        {
          title: "Computer Software",
          content: "Programs and operating systems that enable computers to perform tasks. Includes system software (operating systems, device drivers) and application software (word processors, web browsers, games)."
        }
      ]
    },
    {
      title: "2. Operating Systems",
      content: "Software that manages computer hardware and software resources and provides common services for computer programs.",
      subsections: [
        {
          title: "OS Functions and Types",
          content: "Key functions include process management, memory management, file system management, device management, and security. Types of OS include batch, time-sharing, distributed, real-time, and networked operating systems."
        },
        {
          title: "Process Management",
          content: "How OS manages processes including process scheduling, synchronization, communication, and deadlock handling. Common scheduling algorithms include FCFS, SJF, Round Robin, and Priority Scheduling."
        },
        {
          title: "Memory Management",
          content: "Techniques for managing primary memory including partitioning, paging, segmentation, and virtual memory. Memory management ensures efficient allocation and protection of memory space."
        },
        {
          title: "File Systems",
          content: "How OS organizes and manages files on storage devices. Concepts include file attributes, operations, directory structures, allocation methods (contiguous, linked, indexed), and protection mechanisms."
        }
      ]
    },
    {
      title: "3. MS Office and Productivity Tools",
      content: "Suite of applications designed for productivity, documentation, and data management.",
      subsections: [
        {
          title: "Word Processing (MS Word)",
          content: "Creating, editing, formatting, and printing documents. Features include styles, templates, tables, mail merge, reviewing tools, and collaboration features."
        },
        {
          title: "Spreadsheets (MS Excel)",
          content: "Data organization, calculation, analysis, and visualization. Key concepts include worksheets, cells, formulas, functions, charts, pivot tables, data validation, and conditional formatting."
        },
        {
          title: "Presentations (MS PowerPoint)",
          content: "Creating engaging presentations with slides, animations, transitions, multimedia elements, and speaker notes. Design principles for effective visual communication."
        },
        {
          title: "Database Management (MS Access)",
          content: "Creating and managing databases with tables, queries, forms, and reports. Understanding relational database concepts and basic SQL operations."
        }
      ]
    },
    {
      title: "4. Database Management Systems",
      content: "Software for storing, retrieving, and managing data in a structured way.",
      subsections: [
        {
          title: "Database Concepts",
          content: "Introduction to databases, data models (hierarchical, network, relational, object-oriented), database architecture, and advantages of DBMS over file systems."
        },
        {
          title: "Relational Database Model",
          content: "Based on tables (relations), rows (tuples), and columns (attributes). Concepts include keys (primary, foreign, candidate), integrity constraints, and normalization (1NF, 2NF, 3NF, BCNF)."
        },
        {
          title: "SQL (Structured Query Language)",
          content: "Standard language for relational database management. Includes DDL (CREATE, ALTER, DROP), DML (SELECT, INSERT, UPDATE, DELETE), DCL (GRANT, REVOKE), and TCL (COMMIT, ROLLBACK) commands."
        },
        {
          title: "Database Design",
          content: "Process of designing database structure including ER modeling, normalization, and schema refinement. Ensuring data integrity, minimizing redundancy, and optimizing performance."
        }
      ]
    },
    {
      title: "5. Networking and Internet Technologies",
      content: "Technologies and protocols that enable computers to communicate and share resources.",
      subsections: [
        {
          title: "Network Fundamentals",
          content: "Basic concepts including network types (LAN, MAN, WAN), topologies (bus, star, ring, mesh), transmission media, and network devices (hubs, switches, routers, modems)."
        },
        {
          title: "Network Protocols",
          content: "Rules governing data communication including TCP/IP model, HTTP, HTTPS, FTP, SMTP, DNS, and DHCP. Understanding OSI reference model and its seven layers."
        },
        {
          title: "Internet Technologies",
          content: "How the internet works including IP addressing (IPv4, IPv6), domain name system, web technologies (HTML, CSS, JavaScript), and client-server architecture."
        },
        {
          title: "Network Security",
          content: "Protecting networks and data from threats. Concepts include firewalls, encryption, VPNs, authentication methods, and common security threats (viruses, worms, phishing, DDoS attacks)."
        }
      ]
    },
    {
      title: "6. Programming Fundamentals",
      content: "Basic concepts and principles of computer programming.",
      subsections: [
        {
          title: "Programming Concepts",
          content: "Algorithms, flowcharts, pseudocode, programming paradigms (procedural, object-oriented, functional), and program development lifecycle."
        },
        {
          title: "Data Types and Structures",
          content: "Primitive data types (integer, float, character, boolean), arrays, strings, and basic data structures (stacks, queues, linked lists). Understanding variables, constants, and operators."
        },
        {
          title: "Control Structures",
          content: "Sequential, selection (if-else, switch), and iteration (for, while, do-while) structures. Controlling program flow and implementing logic."
        },
        {
          title: "Functions and Modular Programming",
          content: "Creating reusable code through functions/methods. Concepts include parameters, return values, scope, recursion, and modular program design."
        }
      ]
    },
    {
      title: "7. Web Technologies",
      content: "Technologies used for developing websites and web applications.",
      subsections: [
        {
          title: "HTML and CSS",
          content: "HTML for creating web page structure and content. CSS for styling and layout. Responsive design principles and modern CSS features like Flexbox and Grid."
        },
        {
          title: "JavaScript",
          content: "Client-side scripting for interactive web pages. Concepts include DOM manipulation, events, functions, objects, and modern JavaScript features (ES6+)."
        },
        {
          title: "Web Development Frameworks",
          content: "Introduction to popular frameworks and libraries like React, Angular, Vue.js for frontend development, and Node.js, Django, Flask for backend development."
        },
        {
          title: "Web Security",
          content: "Common web vulnerabilities (XSS, CSRF, SQL injection) and best practices for secure web development. HTTPS, content security policy, and authentication mechanisms."
        }
      ]
    },
    {
      title: "8. Cybersecurity Essentials",
      content: "Principles and practices for protecting computer systems and data from digital attacks.",
      subsections: [
        {
          title: "Cyber Threats",
          content: "Types of cyber threats including malware, phishing, ransomware, social engineering, and DDoS attacks. Understanding attack vectors and threat actors."
        },
        {
          title: "Security Measures",
          content: "Implementing security controls including antivirus software, firewalls, intrusion detection systems, encryption, and access control mechanisms."
        },
        {
          title: "Security Best Practices",
          content: "Password policies, regular software updates, data backup strategies, user education, and incident response planning."
        },
        {
          title: "Ethical Hacking",
          content: "Introduction to ethical hacking concepts including penetration testing, vulnerability assessment, and security auditing. Legal and ethical considerations."
        }
      ]
    },
    {
      title: "9. Emerging Technologies",
      content: "Latest technological advancements shaping the future of computing.",
      subsections: [
        {
          title: "Artificial Intelligence and Machine Learning",
          content: "AI concepts including neural networks, natural language processing, computer vision, and machine learning algorithms. Applications in various domains."
        },
        {
          title: "Cloud Computing",
          content: "Delivery of computing services over the internet. Service models (IaaS, PaaS, SaaS), deployment models (public, private, hybrid), and major cloud providers."
        },
        {
          title: "Internet of Things (IoT)",
          content: "Network of physical objects embedded with sensors and software for connectivity. Applications in smart homes, healthcare, agriculture, and industrial automation."
        },
        {
          title: "Blockchain Technology",
          content: "Decentralized, distributed ledger technology. Concepts include cryptocurrencies, smart contracts, and applications beyond digital currencies."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10 py-8">
          <h1 className=" mt-10 text-4xl md:text-5xl font-bold text-orange-500 mb-4 animate-pulse">
            Computer Science Knowledge
          </h1>
          <p className="text-orange-200 text-lg max-w-2xl mx-auto">
            Comprehensive guide to computer science concepts, technologies, and applications
          </p>
        </header>

        <div className="space-y-4">
          {computerScienceTopics.map((topic, index) => (
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
          <p>Computer Science Knowledge • BPIU Syllabus</p>
        </footer>
      </div>
    </div>
  );
}