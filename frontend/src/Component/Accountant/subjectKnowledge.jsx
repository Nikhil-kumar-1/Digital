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
    "title": "1. Meaning and Scope of Accounting",
    "content": "Accounting is the art of recording, classifying, summarizing, analyzing, and interpreting financial transactions and events, which are primarily financial in nature, and communicating the results to interested users.",
    "subsections": [
      {
        "title": "Meaning of Accounting",
        "content": "Accounting is the art of recording, classifying, summarizing, analyzing, and interpreting financial transactions and events, which are primarily financial in nature, and communicating the results to interested users."
      },
      {
        "title": "Scope of Accounting",
        "content": "The scope of accounting is vast and includes: Bookkeeping, Financial Accounting, Cost Accounting, Management Accounting, Tax Accounting, and Auditing."
      }
    ]
  },
  {
    "title": "2. Accounting Concepts, Principles, Conventions, and Policies",
    "content": "These are the fundamental assumptions, rules, customs, and specific methods that guide how financial information is recorded and presented.",
    "subsections": [
      {
        "title": "Accounting Concepts",
        "content": "The fundamental assumptions: Business Entity Concept, Money Measurement Concept, Going Concern Concept, Accounting Period Concept."
      },
      {
        "title": "Accounting Principles",
        "content": "The rules of action: Full Disclosure Principle, Matching Principle, Revenue Recognition Principle, Objectivity Principle."
      },
      {
        "title": "Accounting Conventions",
        "content": "The customs or traditions: Consistency, Conservatism (Prudence), Materiality."
      },
      {
        "title": "Accounting Policies",
        "content": "The specific principles, bases, conventions, rules, and practices applied by a company in preparing and presenting its financial statements (e.g., method of depreciation chosen)."
      }
    ]
  },
  {
    "title": "3. Capital and Revenue Expenditures & Receipts",
    "content": "Understanding the distinction between capital and revenue items is crucial for correct accounting treatment in the Balance Sheet and Profit & Loss Account.",
    "subsections": [
      {
        "title": "Capital Expenditure",
        "content": "Expenditure that gives benefit for more than one accounting year. It results in the acquisition of a fixed asset or improves the earning capacity of an existing asset. Treated as an asset on the Balance Sheet."
      },
      {
        "title": "Revenue Expenditure",
        "content": "Expenditure whose benefit is exhausted within a year. It is incurred for day-to-day operations. Charged to the Profit & Loss Account."
      },
      {
        "title": "Capital Receipt",
        "content": "Receipts not from the core business operations, often from the sale of fixed assets or raising capital. Shown as a liability or reduction of an asset on the Balance Sheet."
      },
      {
        "title": "Revenue Receipt",
        "content": "Receipts arising from the core business activities or other recurring sources. Credited to the Profit & Loss Account."
      }
    ]
  },
  {
    "title": "4. Accounting Process",
    "content": "This is the cycle of recording a transaction to the preparation of final accounts.",
    "subsections": [
      {
        "title": "Journal Entries",
        "content": "The primary book of record where transactions are recorded chronologically using the double-entry system (Debit and Credit)."
      },
      {
        "title": "Ledger",
        "content": "A book containing all accounts where journal entries are posted and balanced."
      },
      {
        "title": "Trial Balance",
        "content": "A statement listing all ledger account balances to check the arithmetical accuracy of the books (Total Debits = Total Credits)."
      },
      {
        "title": "Subsidiary Books",
        "content": "Books of original entry for specific types of high-volume transactions: Purchase Book, Sales Book, Purchase Returns Book, Sales Returns Book, Bills Receivable Book, Bills Payable Book, Cash Book, Journal Proper."
      },
      {
        "title": "Cash Book",
        "content": "A book that records all cash and bank transactions. It serves as both a journal and a ledger for cash and bank accounts. Types: Simple, Double Column, Three Column, Petty Cash Book."
      },
      {
        "title": "Bank Reconciliation Statement (BRS)",
        "content": "A statement prepared to reconcile the difference between the bank balance as per the Cash Book and the bank balance as per the Pass Book/Bank Statement."
      },
      {
        "title": "Rectification of Errors",
        "content": "The process of correcting accounting errors, either through journal entries or via a Suspense Account."
      }
    ]
  },
  {
    "title": "5. Inventories",
    "content": "Goods held for sale in the ordinary course of business or used in the production process.",
    "subsections": [
      {
        "title": "Valuation of Inventories",
        "content": "Inventories are valued at Lower of Cost or Net Realizable Value."
      },
      {
        "title": "Cost Formulas",
        "content": "Methods to ascertain cost: FIFO (First-In, First-Out), Weighted Average Cost."
      }
    ]
  },
  {
    "title": "6. Depreciation and Amortization",
    "content": "The systematic allocation of the cost of tangible and intangible assets over their useful lives.",
    "subsections": [
      {
        "title": "Depreciation",
        "content": "Allocation of the cost of a tangible fixed asset (e.g., machinery). Causes: Wear and tear, obsolescence. Methods: Straight-Line Method, Written Down Value Method."
      },
      {
        "title": "Amortization",
        "content": "The process of systematically writing off the cost of an intangible asset (e.g., patents, goodwill) over its useful life."
      }
    ]
  },
  {
    "title": "7. Preparation of Financial Statements / Final Accounts",
    "content": "The process of creating formal reports that summarize the financial activities and position of a business.",
    "subsections": [
      {
        "title": "For Profit-Making Organizations",
        "content": "Preparation of Trading Account (Gross Profit), Profit & Loss Account (Net Profit), and Balance Sheet (Assets, Liabilities, Owner's Equity)."
      },
      {
        "title": "For Non-Profit Making Organizations",
        "content": "Preparation of Receipts and Payments A/c, Income and Expenditure A/c (Surplus/Deficit), and Balance Sheet with a Capital Fund."
      }
    ]
  },
  {
    "title": "8. Accounts from Incomplete Records (Single Entry System)",
    "content": "Preparing financial statements when a complete double-entry record is not maintained.",
    "subsections": [
      {
        "title": "Process",
        "content": "Involves preparing a Statement of Affairs to find capital and using the formula: Profit = Closing Capital - Opening Capital + Drawings - Additional Capital Introduced."
      }
    ]
  },
  {
    "title": "9. Accounting of Producer Companies and Financial Statements",
    "content": "Special accounting considerations for Producer Companies formed by primary producers.",
    "subsections": [
      {
        "title": "Accounting Focus",
        "content": "Focuses on transactions with members (e.g., procurement of produce, distribution of profits as patronage bonus)."
      },
      {
        "title": "Financial Statements",
        "content": "Must prepare standard financial statements (Balance Sheet, P&L, Cash Flow) following accounting standards, similar to other companies."
      }
    ]
  },
  {
    "title": "10. Auditing",
    "content": "The independent examination of financial information to express an opinion on its truth and fairness.",
    "subsections": [
      {
        "title": "Introduction: Meaning and Objectives",
        "content": "Meaning: Independent examination of financial information. Objectives: Primary is to express an opinion; Secondary includes detection and prevention of errors and fraud."
      },
      {
        "title": "Types of Audits",
        "content": "Internal Audit, Statutory Audit, AG Audit (Auditor General of India / C&AG Audit)."
      },
      {
        "title": "Audit Process",
        "content": "Involves an Audit Programme, maintaining an Audit Notebook, preparing Working Papers & gathering Evidence, and Preparation before Commencing Audit."
      },
      {
        "title": "Internal Check, Internal Control, and Audit Procedures",
        "content": "Internal Check (arrangement of duties), Internal Control (broad system of controls), Routine Checking, Test Checking, and specific Audit Procedures."
      },
      {
        "title": "Company Audit, Vouching, and Verification",
        "content": "Company Audit (as per Companies Act), Vouching (examining documentary evidence), Verification of Assets and Liabilities (confirming existence, ownership, valuation)."
      }
    ]
  },
  {
    "title": "11. Labour Law and Economic Law (Focus: Income Tax & GST)",
    "content": "Legal framework governing employment, taxation, and economic activities.",
    "subsections": [
      {
        "title": "Concept of Previous Year (PY) and Assessment Year (AY)",
        "content": "PY: The year in which income is earned (April 1 - March 31). AY: The year following PY in which income is assessed."
      },
      {
        "title": "Basis of Charge and Residential Status",
        "content": "Tax is charged on total income. Residential Status (ROR, RNOR, NR) determines the scope of taxable income in India."
      },
      {
        "title": "Heads of Income",
        "content": "Five heads: Salaries, Income from House Property, Profits and Gains of Business or Profession, Capital Gains, Income from Other Sources."
      },
      {
        "title": "Assessment of Different Persons & Assessment Procedure",
        "content": "Assessment of AOPs, Co-op Societies, Trusts. Procedure includes filing Returns (ITR forms, Due Dates, E-filing), and dealing with Demand and Recovery."
      },
      {
        "title": "TDS, TCS, Advance Tax, PAN & TAN",
        "content": "TDS (Tax Deducted at Source), TCS (Tax Collected at Source), Advance Tax, PAN (Permanent Account Number), TAN (Tax Deduction Account Number)."
      },
      {
        "title": "Goods and Service Tax (GST)",
        "content": "A comprehensive, multi-stage, destination-based tax. Includes Registration, Return Filing (GSTR-1, GSTR-3B, GSTR-9), Computation (Output GST - Input GST Credit), and TDS under GST."
      },
      {
        "title": "Provisions under EPF Act and Gratuity Act",
        "content": "EPF Act: Compulsory contributory fund for employees. Gratuity Act: Provides for a lump sum payment to employees upon termination after 5 years."
      },
      {
        "title": "Statutory Compliances for Producer Companies",
        "content": "Must comply with the Companies Act, 2013 (AGM, filing returns), Income Tax Act, GST Law, Labour Laws, and Secretarial Practices."
      }
    ]
  }
]
    

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