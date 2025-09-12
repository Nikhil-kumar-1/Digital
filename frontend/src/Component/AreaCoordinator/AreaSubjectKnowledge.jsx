import { useState } from "react";

export default function AreaSubjectKnowledge() {
  const [openSection, setOpenSection] = useState(null);
  const [openSubSection, setOpenSubSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
    setOpenSubSection(null);
  };

  const toggleSubSection = (index) => {
    setOpenSubSection(openSubSection === index ? null : index);
  };

  const ruralDevelopmentTopics = [
    {
      title: "1. Understanding Rural Development",
      content: "Comprehensive overview of rural development concepts, historical context, and key institutions driving development in rural areas.",
      subsections: [
        {
          title: "Concept and Definition of Rural Development",
          content: `Rural Development kya hai?
Rural Development ka matlab hota hai gaon ke logon ki living standard ko improve karna.

👉 Iska main focus hota hai:

Employment (job opportunities dena)

Good education provide karna

Health aur medical facilities dena

Infrastructure develop karna (roads, electricity, water supply)

Kyun zaroori hai?

Kyunki India ki economy tabhi grow karegi jab gaon develop honge.

2011 ke census ke hisaab se, India ki 68% population gaon me rehti hai.

Agar rural areas backward rahenge to country ki economy kabhi develop nahi hogi.

🟢 Panchayati Raj aur Rural Development

Rural development ke liye government ne Panchayati Raj system introduce kiya.

👉 Ye ek three-tier structure of Indian Administration hai jo mainly rural areas ke liye banaya gaya hai.

Panchayati Raj ke Levels

Gram Panchayat (Village level) – directly election hota hai

Panchayat Samiti (Block/Taluk level) – executive body

Zila Parishad (District level) – supervise aur advice deta hai

👉 Panchayati Raj ka main kaam hai:

Education, agriculture, health aur employment ko promote karna

Local level pe logon ke issues solve karna

Development schemes ko ground level pe implement karna

🟢 Panchayati Raj ki Origin

Balwant Rai Mehta ko Father of Panchayati Raj kaha jata hai.

1957 me unhone ek Committee banayi thi jisme Panchayati Raj ka idea diya.

Uske baad different committees bani jinhone is system ko aur strong banane ke suggestions diye.

🟢 Committees on Panchayati Raj
1. Balwant Rai Mehta Committee (1957)

Ye pehli committee thi jisne Panchayati Raj suggest kiya.

Isne kaha ki ek 3-tier system hona chahiye:

Gram Panchayat – directly elected body

Panchayat Samiti – executive body

Zila Parishad – supervise aur advice ka kaam kare

Zila Parishad ka chairman hota tha District Collector.

Main aim tha: rural development ko monitor karna.

2. Ashok Mehta Committee (1977)

1970s ke time Panchayati Raj weak ho gaya tha, isliye is committee ko banaya gaya.

Isne bola ki sirf 2 bodies ho:

Zila Parishad

Mandal Panchayat (jo kuch villages ko combine karke banta hai)

Zila Parishad ko executive body banaya gaya jiske paas decision power ho.

Governing bodies ko taxation ka power diya gaya.

3. GVK Rao Committee (1985)

Is committee ka main aim tha Panchayati Raj ko strengthen karna.

Zila Parishad ko sabse powerful body banaya gaya.

Regular elections ko compulsory banaya gaya.

Important decisions sirf Zila Parishad ke through lene ki baat ki gayi.

Ek naya post introduce kiya gaya: CEO of Zila Parishad.

4. LM Singhvi Committee (1986)

Government of India ne ye committee appoint ki.

Suggestions diye:

Har state me Judicial Tribunals ho election disputes solve karne ke liye.

Panchayati Raj ko Constitutional recognition milna chahiye.

🟢 Objectives of Rural Development Department

Infrastructure develop karna – roads, electricity, water supply

Poverty reduce karna – logon ki income badhakar

Employment create karna – naye jobs aur wages increase karna

Health facilities provide karna

Quality education dena

Agriculture development – seeds, fertilizers, irrigation ke liye help

Small scale irrigation schemes develop karna

Electricity supply in rural areas

Female literacy improve karna – girls ko padhai ke liye encourage karna

🟢 Importance of Rural Development

Overall development – Country ka growth tabhi hoga jab gaon develop honge.

Basic needs fulfill karna – food, clothes, medicines provide karna rural population ko.

Agriculture sector support karna – India ek agricultural country hai aur 75% population agriculture pe dependent hai.

Economic growth – Agar rural logon ki income badhegi to overall economy bhi grow karegi.

🟢 Conclusion

Rural Development ek country ke progress ke liye bahut important hai.

Iske liye Panchayati Raj system banaya gaya jo 3-level structure hai (Gram Panchayat, Panchayat Samiti, Zila Parishad).

Committees (Balwant Rai Mehta, Ashok Mehta, GVK Rao, LM Singhvi) ne isko strong banane ke liye alag-alag suggestions diye.

Rural Development ke objectives clear hain – jobs, education, health, agriculture, infrastructure, poverty reduction.

Agar gaon develop hoga to poore India ki economy strong hogi.`
        },
        {
          title: "Historical Background of Rural Development Initiatives",
          content: "India's rural development initiatives have evolved significantly since independence. Key milestones include: Community Development Programme (1952), Intensive Agricultural District Programme (1960), Green Revolution (1960s), Integrated Rural Development Programme (1978), Watershed Development Programme (1990s), and the current focus on sustainable livelihoods and digital inclusion."
        },
        {
          title: "Characteristics of Rural Economy",
          content: "The rural economy is characterized by: Agriculture as the primary occupation, Seasonal employment patterns, High dependence on natural resources, Low capital formation, Traditional methods of production, Limited market access, High incidence of poverty, and Informal nature of economic activities. Understanding these characteristics is crucial for designing effective development interventions."
        },
        {
          title: "Panchayati Raj Institutions and its Role in Development",
          content: "The Panchayati Raj System is a three-tier structure of local self-government: Gram Panchayat (village level), Panchayat Samiti (block level), and Zila Parishad (district level). Established through the 73rd Constitutional Amendment Act (1992), these institutions play a vital role in planning and implementing development schemes, mobilizing resources, and ensuring people's participation in the development process."
        },
        {
          title: "Cooperatives and their Importance",
          content: "Cooperatives are member-owned, member-governed businesses that operate for the benefit of their members according to common principles. In rural development, cooperatives play a crucial role in: Providing agricultural credit (Primary Agricultural Credit Societies), Marketing agricultural produce, Input supply (seeds, fertilizers), Dairy development (Amul model), and facilitating collective bargaining power for small producers."
        }
      ]
    },
    {
      title: "2. Key Government Schemes for Poverty Alleviation",
      content: "Overview of major central and state government initiatives aimed at poverty reduction and rural development.",
      subsections: [
        {
          title: "Central Government Schemes",
          content: "",
          points: [
            "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) - Guarantees 100 days of wage employment per year to rural households",
            "Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM) - Focuses on organizing rural poor into self-help groups",
            "Pradhan Mantri Awaas Yojana - Gramin (PMAY-G) - Aims to provide 'Housing for All' by 2022",
            "Pradhan Mantri Gram Sadak Yojana (PMGSY) - Provides connectivity to unconnected habitations",
            "National Social Assistance Programme (NSAP) - Provides financial assistance to elderly, widows and disabled persons",
            "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi) - Provides income support to all landholding farmers",
            "Rashtriya Krishi Vikas Yojana (RKVY) - Aims to achieve 4% annual growth in agriculture sector",
            "Social Security Schemes - Including Pradhan Mantri Jeevan Jyoti Bima Yojana, Pradhan Mantri Suraksha Bima Yojana, and Atal Pension Yojana"
          ]
        },
        {
          title: "State Government Schemes (Bihar)",
          content: "",
          points: [
            "JEEViKA – Bihar Rural Livelihoods Promotion Society - Focuses on social and economic empowerment through SHGs",
            "Satat Jeevikoparjan Yojana (SJY) – Bihar's ultra-poor graduation approach targeting the most vulnerable households",
            "Kushal Yuva Program (KYP) – Skilling youth under Bihar Skill Development Mission to enhance employability",
            "Mukhyamantri Udyami Yojana – Provides support for rural entrepreneurs through subsidies and credit linkage",
            "Mukhyamantri Awas Yojana - Gramin (MAY-G) – For BPL families not covered under PMAY-G",
            "Industrial policies - Focus on promoting investment and creating employment opportunities",
            "Social Security Schemes - Including old age pension, disability pension, and widow pension schemes",
            "Other Schemes - Including student credit card, bicycle scheme for girls, and universal health care program"
          ]
        }
      ]
    },
    {
      title: "3. Community Institutions (SHGs, VOs, CLFs)",
      content: "Understanding the role and functioning of community-based organizations in rural development.",
      subsections: [
        {
          title: "Elements of Self Help Groups (SHGs)",
          content: "Self Help Groups are small voluntary associations of poor people, preferably from the same socio-economic background. Key elements include: Regular meetings, Savings and credit activities, Collective decision making, Mutual trust and support, Democratic functioning, and Transparent financial transactions. SHGs serve as platforms for members to mobilize savings, access credit, and engage in collective enterprises."
        },
        {
          title: "Elements of Higher Level Federations (VOs and CLFs)",
          content: "Village Organizations (VOs) are federations of SHGs at the village level, while Cluster Level Federations (CLFs) represent multiple VOs. These higher-level structures provide: Capacity building support, Financial intermediation services, Market linkages, Negotiation power, and Interface with government agencies and banks. They help scale up the impact of SHGs and address larger community issues."
        },
        {
          title: "Importance of SHG Bank Linkage",
          content: "The SHG-Bank Linkage Program connects self-help groups with formal financial institutions. Different financial products in rural areas include: Savings accounts, Recurring deposits, Fixed deposits, Kisan Credit Cards, General Credit Cards, Agricultural loans, Microenterprise loans, Housing loans, and Insurance products. This linkage helps reduce dependence on informal moneylenders and promotes financial inclusion."
        },
        {
          title: "Insurance and Digital Financing Models",
          content: "Insurance products tailored for rural poor include: Life insurance, Health insurance, Crop insurance, Livestock insurance, and Asset insurance. Digital financing models leveraging technology include: Mobile banking, USSD-based banking, AEPS (Aadhaar Enabled Payment System), UPI payments, and Business Correspondent models. These innovations help overcome geographical barriers and improve access to financial services."
        }
      ]
    },
    {
      title: "4. Basic Bookkeeping and Financial Literacy",
      content: "Essential financial management skills for community institutions and individuals in rural areas.",
      subsections: [
        {
          title: "Bookkeeping at SHG/VO/CLF Level",
          content: "Proper bookkeeping is essential for transparency and accountability. Key records include: Cash book (records all cash transactions), Ledger (records transactions account-wise), Meeting register (records minutes and decisions), Membership register (details of members), Savings and loan register (tracks members' transactions), and Bank transaction register. Regular updating and auditing of these records ensures financial discipline."
        },
        {
          title: "Basics of Credit and Savings",
          content: "Understanding credit involves: Principal amount, Interest rates, Repayment schedules, Collateral requirements, and Creditworthiness. Savings fundamentals include: Regular savings habit, Power of compounding, Different savings instruments (bank deposits, post office schemes, etc.), Emergency funds, and Goal-based savings. Financial literacy helps individuals make informed decisions about borrowing and saving."
        },
        {
          title: "Budgeting and Expense Tracking",
          content: "Budgeting involves: Estimating income, Prioritizing expenses, Allocating funds for different needs, and Planning for future requirements. Expense tracking includes: Recording all expenditures, Categorizing expenses (essential vs. non-essential), Identifying spending patterns, and Finding opportunities for savings. These practices help households avoid debt traps and achieve financial stability."
        }
      ]
    },
    {
      title: "5. Livelihood Promotion",
      content: "Strategies and approaches for enhancing livelihoods in rural areas through various sectors.",
      subsections: [
        {
          title: "Farm-based Livelihoods",
          content: "Agriculture: Involves cultivation of crops, soil management, irrigation techniques, and adoption of modern practices. Horticulture: Focuses on fruits, vegetables, flowers, spices, and medicinal plants with higher income potential. Livestock: Includes dairy farming, poultry, goat rearing, piggery, and fisheries. Characteristics include: Dependence on natural resources, Seasonal variations, Price fluctuations, and Need for technical knowledge."
        },
        {
          title: "Non-Farm and Off-Farm Livelihoods",
          content: "Non-farm livelihoods: Activities not related to agriculture such as handicrafts, pottery, weaving, tailoring, and small enterprises. Off-farm livelihoods: Activities related to agriculture but not directly involved in production, such as processing, transportation, storage, and marketing of agricultural produce. Characteristics include: Less dependence on seasons, Higher value addition, and Potential for regular income throughout the year."
        },
        {
          title: "Value Chain and Market Linkages",
          content: "Value chain approach involves: Analyzing all activities from production to consumption, Identifying constraints and opportunities, Adding value at each stage, and Enhancing overall efficiency. Market linkages include: Direct market access, Contract farming, Farmer Producer Organizations (FPOs), Agri-business centers, and Digital market platforms. These approaches help farmers get better prices and reduce post-harvest losses."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4 animate-pulse">
            Rural Development Knowledge
          </h1>
          <p className="text-orange-200 text-lg max-w-2xl mx-auto">
            Comprehensive guide to rural development concepts, schemes, and practices for effective implementation
          </p>
        </header>

        <div className="space-y-4">
          {ruralDevelopmentTopics.map((topic, index) => (
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
                              <p className="text-gray-300 mb-2">{sub.content}</p>
                              {sub.points && (
                                <ul className="text-gray-300 list-disc pl-5 mt-2">
                                  {sub.points.map((point, pointIndex) => (
                                    <li key={pointIndex} className="mb-1">{point}</li>
                                  ))}
                                </ul>
                              )}
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
          <p>Rural Development Knowledge • BPIU Syllabus</p>
        </footer>
      </div>
    </div>
  );
}