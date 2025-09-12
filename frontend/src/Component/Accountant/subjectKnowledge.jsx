import { useState } from "react";

export default function SubjectKnowledge() {
  const [openSection, setOpenSection] = useState(null);
  const [openSubSection, setOpenSubSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
    setOpenSubSection(null);
  };

  const toggleSubSection = (index) => {
    setOpenSubSection(openSubSection === index ? null : index);
  };

  const accountingTopics = [
    {
      title: "1. Meaning and Scope of Accounting",
      content: "Accounting is the process of identifying, measuring, recording, and communicating financial information about an entity to permit informed judgments and decisions by users of the information.",
      subsections: [
        {
          title: "Meaning of Accounting",
          content: "Accounting is often called the 'language of business' because it communicates financial information about a business entity to various stakeholders. It involves summarizing, analyzing, and reporting financial transactions to oversight agencies, regulators, and tax collection entities."
        },
        {
          title: "Scope of Accounting",
          content: "The scope of accounting includes: financial accounting, cost accounting, management accounting, tax accounting, auditing, accounting systems, and forensic accounting. It covers all financial activities of an organization from recording to interpretation."
        }
      ]
    },
    {
      title: "2. Accounting Concepts, Principles, Conventions and Policies",
      content: "These are the fundamental assumptions, rules, and guidelines that prepare financial statements consistently and meaningfully.",
      subsections: [
        {
          title: "Accounting Concepts",
          content: "Basic assumptions: Entity Concept, Money Measurement Concept, Going Concern Concept, Accounting Period Concept."
        },
        {
          title: "Accounting Principles",
          content: "How to apply concepts: Historical Cost, Revenue Recognition, Matching, Full Disclosure."
        },
        {
          title: "Accounting Conventions",
          content: "Customs and traditions: Consistency, Conservatism, Materiality, Full Disclosure."
        },
        {
          title: "Accounting Policies",
          content: "Specific principles and methods selected by a company to prepare and present financial statements."
        }
      ]
    },
    {
      title: "3. Capital and Revenue Expenditures & Receipts",
      content: "Understanding the distinction between capital and revenue items is crucial for proper accounting treatment.",
      subsections: [
        {
          title: "Capital Expenditure",
          content: "Expenditure that results in acquisition of permanent assets or improvement in their earning capacity. Benefits extend beyond one accounting period."
        },
        {
          title: "Revenue Expenditure",
          content: "Expenditure whose benefit is exhausted within the current accounting year. It is incurred for day-to-day operations."
        },
        {
          title: "Capital Receipts",
          content: "Receipts that create liabilities or reduce assets, such as loans, issue of shares, or sale of fixed assets."
        },
        {
          title: "Revenue Receipts",
          content: "Receipts that do not create liabilities or reduce assets, such as sales revenue, interest received, or commission earned."
        }
      ]
    },
    {
      title: "4. Accounting Process",
      content: "The sequence of accounting procedures used to record, classify, and summarize accounting information.",
      subsections: [
        {
          title: "Journal Entries",
          content: "The first step where transactions are recorded chronologically with debits and credits."
        },
        {
          title: "Ledger",
          content: "A collection of accounts that shows changes made to each account as a result of past transactions."
        },
        {
          title: "Trial Balance",
          content: "A statement of all debits and credits in double-entry account books to verify mathematical accuracy."
        },
        {
          title: "Subsidiary Books",
          content: "Books of original entry where transactions of similar nature are recorded (e.g., Sales Book, Purchase Book)."
        },
        {
          title: "Cash Book",
          content: "A financial journal that contains all cash receipts and payments, including bank deposits and withdrawals."
        },
        {
          title: "Bank Reconciliation Statement",
          content: "A statement that reconciles the balance in the company's records with the bank statement balance."
        },
        {
          title: "Rectification of Errors",
          content: "The process of identifying and correcting mistakes in accounting records."
        }
      ]
    },
    {
      title: "5. Inventories",
      content: "Assets held for sale in the ordinary course of business, in the process of production, or in the form of materials to be consumed in production.",
      subsections: [
        {
          title: "Inventory Valuation Methods",
          content: "FIFO (First-In, First-Out), LIFO (Last-In, First-Out), Weighted Average Cost, and Specific Identification."
        },
        {
          title: "Inventory Management",
          content: "Techniques for maintaining optimal inventory levels to meet customer demand while minimizing holding costs."
        }
      ]
    },
    {
      title: "6. Depreciation and Amortization of Fixed Assets",
      content: "Systematic allocation of the cost of tangible and intangible assets over their useful lives.",
      subsections: [
        {
          title: "Depreciation Methods",
          content: "Straight-line method, Reducing balance method, Units of production method, Sum-of-the-years'-digits method."
        },
        {
          title: "Amortization",
          content: "The process of allocating the cost of intangible assets over their useful lives."
        }
      ]
    },
    {
      title: "7. Preparation of Financial Statements",
      content: "The process of creating formal records of financial activities and position of a business.",
      subsections: [
        {
          title: "Non-profit Organizations",
          content: "Preparation of Receipt and Payment Account, Income and Expenditure Account, and Balance Sheet."
        },
        {
          title: "Profit-making Organizations",
          content: "Preparation of Trading Account, Profit and Loss Account, and Balance Sheet."
        }
      ]
    },
    {
      title: "8. Accounts from Incomplete Records",
      content: "Preparation of financial statements when proper accounting records are not maintained.",
      subsections: [
        {
          title: "Single Entry System",
          content: "An incomplete recording system where some transactions are recorded with both aspects, some with one aspect, and some not recorded at all."
        }
      ]
    },
    {
      title: "9. Accounting of Producer Companies",
      content: "Special accounting practices for producer companies as defined under the Companies Act.",
      subsections: [
        {
          title: "Features of Producer Companies",
          content: "Voluntary association of producers, registered under Companies Act, object is production, harvesting, procurement, etc."
        },
        {
          title: "Financial Statements",
          content: "Preparation of financial statements following the format prescribed for producer companies."
        }
      ]
    },
    {
      title: "10. Auditing",
      content: "The systematic examination of books, accounts, documents, and vouchers of an organization.",
      subsections: [
        {
          title: "Introduction to Auditing",
          content: "Meaning: Independent examination of financial information. Objectives: True and fair view, detection of errors and frauds."
        },
        {
          title: "Types of Audits",
          content: "Internal Audit: By employees. Statutory Audit: Required by law. AG Audit: Audit by Auditor General."
        },
        {
          title: "Audit Process",
          content: "Audit Programme, Audit Notebook, Working Papers, Evidence, Preparation before commencing Audit."
        },
        {
          title: "Internal Check System",
          content: "Routine Checking, Internal Check and Test Checking."
        },
        {
          title: "Internal Control",
          content: "Policies and procedures to ensure reliability of financial reporting, compliance with laws, and effective operations."
        },
        {
          title: "Company Audit",
          content: "Special considerations when auditing companies registered under Companies Act."
        },
        {
          title: "Vouching",
          content: "The process of examining documentary evidence to verify transactions."
        },
        {
          title: "Verification of Assets and Liabilities",
          content: "Confirming existence, ownership, valuation, and disclosure of assets and liabilities."
        }
      ]
    },
    {
      title: "11. Labour Law and Economic Law",
      content: "Legal framework governing employment and economic activities.",
      subsections: [
        {
          title: "Previous Year and Assessment Year",
          content: "Previous Year: Financial year in which income is earned. Assessment Year: Year following previous year in which income is assessed."
        },
        {
          title: "Basis of Charge and Rates of Tax",
          content: "Income is taxed based on residential status. Different tax rates for individuals, companies, etc."
        },
        {
          title: "Residential Status",
          content: "Determines scope of taxable income: Resident, Resident but Not Ordinarily Resident, Non-Resident."
        },
        {
          title: "Heads of Income",
          content: "Salaries, House Property, Business/Profession, Capital Gains, Other Sources."
        },
        {
          title: "Assessment of Different Persons",
          content: "Association of Persons, Co-operative Societies, Trusts, Charitable and Religious Institutions."
        },
        {
          title: "Assessment Procedure",
          content: "Types of returns, Due dates, E-filing, Different forms, Demand and Recovery."
        },
        {
          title: "TDS and TCS",
          content: "Tax Deducted at Source, Tax Collected at Source, Advance payment of Tax."
        },
        {
          title: "Penalty and Prosecution",
          content: "Provisions for imposition of penalty, fines, and prosecution for non-compliance."
        },
        {
          title: "Goods and Service Tax (GST)",
          content: "Introduction, Background, Models, Registration, Returns, Rate of Tax, Computation, Filing of returns."
        },
        {
          title: "EPF Act and Gratuity Act",
          content: "Provisions under Employee Provident Fund Act and Payment of Gratuity Act."
        },
        {
          title: "Statutory Compliances",
          content: "Secretarial Practices related to Producer Companies and other statutory requirements."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10 py-8">
          <h1 className="text-4xl mt-10 md:text-5xl font-bold text-orange-500 mb-4 animate-pulse">
            Accounting Subject Knowledge
          </h1>
          <p className="text-orange-200 text-lg max-w-2xl mx-auto">
            Comprehensive guide to accounting principles, practices, and regulations for professional accountants
          </p>
        </header>

        <div className="space-y-4">
          {accountingTopics.map((topic, index) => (
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
          <p>Accounting Subject Knowledge FAQ • BPIU Syllabus</p>
        </footer>
      </div>
    </div>
  );
}