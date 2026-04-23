export type ScholarshipType = "general" | "girl";
export type ScholarshipSource = "government" | "private";

export type DeadlineDate = string | Array<{ category: string; date: string }>;

export interface Scholarship {
  id: number;
  title: string;
  amount: string;
  type: ScholarshipType;
  source: ScholarshipSource;
  description: string;
  requirements: string[];
  applyLink: string;
  infoLink: string;
  lastDate: DeadlineDate;
}

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: 1,
    title: "AICTE SWANATH Scholarship",
    amount: "₹50,000 per year",
    type: "general",
    source: "government",
    description:
      "Scholarship for students who are orphans, wards of Armed Forces/Police personnel martyred in action, or children of parents who died due to COVID-19.",
    requirements: [
      "Students who are orphans, wards of Armed Forces/Police personnel martyred in action, or children of parents who died due to COVID-19",
      "Family income below ₹8 lakh per year",
    ],
    applyLink: "https://scholarships.gov.in/Students",
    infoLink:
      "https://www.instagram.com/p/DPl--rmk6_7/?igsh=MWxjY3RzejBvZzh0bQ==",
    lastDate: "15/11/25",
  },
  {
    id: 2,
    title: "AICTE Saksham Scholarship",
    amount: "₹50,000 per year",
    type: "general",
    source: "government",
    description:
      "Scholarship for differently-abled students pursuing technical education.",
    requirements: [
      "Differently-abled students (≥40% disability)",
      "Family income below ₹8 lakh per year",
    ],
    applyLink: "https://scholarships.gov.in/Students",
    infoLink:
      "https://www.instagram.com/p/DOBuVWXk4cm/?igsh=Y2NxbThqOGE0cWNz",
    lastDate: "15/11/25",
  },
  {
    id: 3,
    title: "Central Sector Scholarship",
    amount: "₹10,000/year (UG), ₹20,000/year (PG)",
    type: "general",
    source: "government",
    description:
      "Merit-based scholarship for students securing above 80% marks in Class 12.",
    requirements: [
      "Students securing above 80% marks in Class 12",
      "Pursuing regular undergraduate or postgraduate courses",
      "Family income below ₹4.5 lakh per year",
    ],
    applyLink: "https://scholarships.gov.in/Students",
    infoLink:
      "https://www.instagram.com/p/DNH29MlTC0u/?igsh=MWpvankxd3NiNGxlNA==",
    lastDate: "15/11/25",
  },
  {
    id: 4,
    title: "Kotak Kanya Scholarship",
    amount: "Up to ₹1.5 lakh per year",
    type: "girl",
    source: "private",
    description:
      "Scholarship for female students who have passed Class 12 with 65% or more marks.",
    requirements: [
      "Female students who have passed Class 12 with 65% or more marks",
      "Family income below ₹6 lakh per year",
    ],
    applyLink:
      "https://www.buddy4study.com/page/kotak-kanya-scholarship",
    infoLink:
      "https://www.instagram.com/p/DNDw-fczjZj/?igsh=MWljdG01bDFsMXpwdQ==",
    lastDate: "15/11/25",
  },
  {
    id: 5,
    title: "MEA Scholarship",
    amount: "Up to 600 USD per year (₹52,000 per year)",
    type: "general",
    source: "private",
    description:
      "Scholarship for first year engineering students with high academic performance.",
    requirements: [
      "First Year Engineering Students (ranked under 7000 in KEAM or above 110 score in NATA)",
      "Annual income less than ₹1.5 Lakhs",
      "Scored above 85% in X and XII exams",
    ],
    applyLink: "https://meahouston.org/apply-for-scholarship/",
    infoLink:
      "https://www.instagram.com/p/DN-0j1ik68p/?igsh=MXBnOG9ybWZvdGgxdA==",
    lastDate: "Closed",
  },
  {
    id: 6,
    title: "UGO Scholarship",
    amount: "₹60,000 per year",
    type: "girl",
    source: "private",
    description:
      "Scholarship for female students pursuing professional graduation courses.",
    requirements: [
      "Female Students Pursuing Professional Graduation course any year (except Final year)",
      "Annual Family income less than ₹5 lakh",
      "A score at least 70% in Class X and XII exams",
    ],
    applyLink:
      "https://www.buddy4study.com/page/ugo-scholarship-program",
    infoLink:
      "https://www.instagram.com/p/DOTLVd0Ewvz/?igsh=MXVqbWs5d3l6ZHhkOQ==",
    lastDate: "Closed",
  },
  {
    id: 7,
    title: "Loreal India Scholarship",
    amount: "₹1 Lakh/year    (PG), ₹62,500/year (UG)",
    type: "girl",
    source: "private",
    description:
      "Scholarship for female students pursuing UG or PG courses in science.",
    requirements: [
      "Female students pursuing UG Or PG courses in any year (Except Final Year)",
      "For PG students, Score of minimum 60% in UG Course",
      "For UG students, Score of minimum 85% in Class XII (Science)",
      "Annual Income less than ₹6 Lakhs",
    ],
    applyLink:
      "https://www.buddy4study.com/page/loreal-india-for-young-women-in-science-scholarships",
    infoLink:
      "https://www.instagram.com/p/DPjKg7Kk16B/?igsh=Ym5xZ3gyN203NnNi",
    lastDate: "Closed",
  },
  {
    id: 8,
    title: "SBI Platinum Jubilee Scholarship",
    amount: "Up to ₹75,000 per year",
    type: "general",
    source: "private",
    description:
      "Scholarship for Indian students pursuing UG courses with good academic performance.",
    requirements: [
      "Indian Students pursuing a UG course (all years)",
      "Minimum CGPA of 7 or 75% marks in previous academic year",
      "Annual income less than ₹6 Lakhs",
    ],
    applyLink: "https://www.sbiashascholarship.co.in/",
    infoLink:
      "https://www.instagram.com/p/DPWhtahEyAH/?igsh=eHozeXhjaDI4b2tr",
    lastDate: "15/11/25",
  },
  {
    id: 9,
    title: "National Scholarship For PG Students",
    amount: "Up to ₹15,000 per month (₹1,50,000 per year)",
    type: "general",
    source: "government",
    description:
      "Scholarship for PG students enrolled in their first year of program.",
    requirements: [
      "PG Students enrolled in First year of their Program (with no previous PG degrees)",
      "Aged under 30",
    ],
    applyLink: "https://scholarships.gov.in/Students",
    infoLink:
      "https://www.instagram.com/p/DM5IgLATBS7/?igsh=MTh1cTMzeW9uZ3A3Zw==",
    lastDate: "15/11/25",
  },
  {
    id: 10,
    title: "Infosys STEM Stars Scholarship",
    amount: "Up to ₹1,00,000 per year",
    type: "girl",
    source: "private",
    description:
      "Scholarship for first year female students enrolled in STEM-related courses.",
    requirements: [
      "First year female students enrolled in STEM-related courses (B-tech, B-arch, etc.)",
      "2nd-year B.Arch or 5-year Integrated/Dual Degree students are also eligible",
      "Annual family income ≤ ₹8,00,000",
    ],
    applyLink:
      "https://www.buddy4study.com/page/infosys-stem-stars-scholarship",
    infoLink:
      "https://www.instagram.com/p/DNKujNFzSe5/?igsh=MWplZXVnY2xhMGd5Nw==",
    lastDate: "Closed",
  },
  {
    id: 11,
    title: "HDFC Parivartan Scholarship",
    amount: "Up to ₹50,000 per year",
    type: "general",
    source: "private",
    description:
      "Scholarship with preference for students facing recent personal or family crises.",
    requirements: [
      "Minimum 55% in the last exam",
      "Family income ≤ ₹2.5 Lakh/year",
      "Preference for students facing recent personal or family crises",
    ],
    applyLink: "https://www.parivartanecss.com/",
    infoLink:
      "https://www.instagram.com/p/DM8d-CgzpPH/?igsh=YnFtdmJ6NGIzemZz",
    lastDate: "31/12/25",
  },
  {
    id: 12,
    title: "AICTE Pragati Scholarship",
    amount: "Up to ₹50,000 per year",
    type: "girl",
    source: "government",
    description:
      "Scholarship for female students admitted to technical degree/diploma courses.",
    requirements: [
      "Female student admitted to 1st year or 2nd year (lateral entry) of a technical degree/diploma",
      "Two females per family are eligible to apply",
      "Family income ≤ ₹8,00,000",
    ],
    applyLink: "https://scholarships.gov.in/Students",
    infoLink:
      "https://www.instagram.com/p/DM4jBYGT6m-/?igsh=dnh1MGl4MnJyNTZi",
    lastDate: "15/11/25",
  },
  {
    id: 13,
    title: "Amazon Future Engineer (AFE) Scholarship",
    amount: "Up to ₹2,00,000 (₹50,000 per year for up to 4 years)",
    type: "girl",
    source: "private",
    description:
      "Scholarship for Indian female students enrolled in the 1st year of B.E./B.Tech.",
    requirements: [
      "Indian female students",
      "Enrolled in the 1st year of B.E./B.Tech",
      "Family annual income less than ₹3,00,000",
    ],
    applyLink: "https://ffe.org/amazon-future-engineer/#apply",
    infoLink:
      "https://www.instagram.com/p/DM8d-CgzpPH/?igsh=YnFtdmJ6N",
    lastDate: "30/11/25",
  },
  {
    id: 14,
    title: "Nidhi Kadir Watson Memorial Scholarship",
    amount: "₹50,000 per year",
    type: "general",
    source: "private",
    description:
      "Scholarship for Indian students enrolled in the 1st year of a 4-year undergraduate program in Engineering or Medicine.",
    requirements: [
      "Indian students enrolled in the 1st year of a 4-year undergraduate program in Engineering or Medicine",
      "Combined annual family income not exceeding ₹1,00,000 from all sources",
      "KEAM (Kerala Engineering Architecture Medical) rank ≤ 2000",
    ],
    applyLink: "https://nkwprogram.org/application-form.php",
    infoLink:
      "https://www.instagram.com/p/DPS51DIkwNE/?igsh=MWthZHI0MWg5N2dvOQ==",
    lastDate: "30/11/25",
  },
  {
    id: 15,
    title: "Foundation for Excellence (FFE) Scholarship",
    amount:
      "Financial assistance covering tuition fees, hostel/mess charges, and books/study materials",
    type: "general",
    source: "private",
    description:
      "Comprehensive financial assistance for students pursuing B.E./B.Tech, M.Tech, MBBS, or LLB.",
    requirements: [
      "Indian students pursuing B.E./B.Tech, M.Tech, MBBS, or LLB",
      "Family annual income not exceeding ₹3.0 lakh",
    ],
    applyLink: "https://ffe.org/scholarships/",
    infoLink:
      "https://www.instagram.com/p/DM9zTjRTavf/?igsh=MXBmejE1bXd3OXVvdA==",
    lastDate: "31/12/25",
  },
  {
    id: 16,
    title: "Nirankari Rajmata Scholarship Scheme",
    amount: "Full tuition fee waiver up to ₹75,000 per annum",
    type: "general",
    source: "private",
    description:
      "Scholarship for students pursuing professional/technical courses with 50% reservation for female candidates.",
    requirements: [
      "Indian students pursuing professional/technical courses at the undergraduate or postgraduate levels",
      "Family annual income not exceeding ₹3.5 lakh",
    ],
    applyLink: "https://www.nirankarifoundation.org/scholarship/",
    infoLink:
      "https://www.instagram.com/p/DPZbo9GAen8/?igsh=NWU4OWNlNmx0cDA0",
    lastDate: "30/11/25",
  },
  {
    id: 17,
    title: "E-GRANTZ",
    amount: "Varies by category",
    type: "general",
    source: "government",
    description:
      "Kerala government scholarship for all categories and all years with different income limits.",
    requirements: [
      "All categories",
      "All years",
      "OBC & General – ₹1 lakh income limit",
      "OBC (H) – ₹6 lakh income limit",
      "SC / ST / OEC – No income limit",
    ],
    applyLink: "https://egrantz.kerala.gov.in/",
    infoLink:
      "https://drive.google.com/file/d/1UORJo3nszh61tIP3ihgYj8Hhh7BNeJ5d/view?usp=sharing",
    lastDate: [
      { category: "General, OBC (H), OBC & OEC", date: "15/11/25" },
      { category: "ST", date: "20/11/25" },
      { category: "SC", date: "25/03/26" },
    ],
  },
  {
    id: 18,
    title: "Thamkeen Scholarship",
    amount: "₹25,000 per year",
    type: "girl",
    source: "private",
    description: "Scholarship for first year Muslim Girl students.",
    requirements: ["First year Muslim Girl students"],
    applyLink: "https://framewave.info/igm/",
    infoLink:
      "https://www.instagram.com/p/DQEfE_gE2Dl/?igsh=MTlsNnlrYnVpZDJyNg==",
    lastDate: "30/11/25",
  },
  {
    id: 19,
    title: "Vidyasamunnathi Scholarship",
    amount: "₹8,000/year (UG), ₹16,000/year (PG)",
    type: "general",
    source: "government",
    description:
      "Scholarship for students who belong to forward communities (SC, ST, OBC not eligible).",
    requirements: [
      "Students who belong to forward communities (SC, ST, OBC not eligible)",
      "Income limit: ₹4 lakh",
    ],
    applyLink: "https://www.schemes.kswcfc.org/",
    infoLink:
      "https://www.instagram.com/p/DQKHxFeE5br/?igsh=MWJ4YjN2dnV6cHZjMQ==",
    lastDate: "15/11/25",
  },
  {
    id: 20,
    title: "Rolls Royce Wings4Her Scholarship",
    amount: "₹35000",
    type: "girl",
    source: "private",
    description:
      "Scholarship for exceptional female students pursuing engineering degrees. This scholarship is specifically available to female students enrolled in the 1st, 2nd, or 3rd year of undergraduate engineering programs at AICTE-recognised institutions across India.",
    requirements: [
      "Female students in 1st, 2nd, or 3rd year of UG engineering programs.",
      "Over 60% marks in Class 10 and 12.",
      "Annual income below ₹4 lakhs.",
    ],
    applyLink:
      "https://www.buddy4study.com/page/rolls-royce-wings4her-scholarship-for-women-engineering-students",
    infoLink: "https://www.instagram.com/p/DRbidDMExfC",
    lastDate: "30/11/25",
  },
  {
    id: 21,
    title: "Snehapoorvam Scholarship",
    amount: "₹1,000 per month",
    type: "general",
    source: "private",
    description:
      "Scholarship for students from any class who have lost either their father, mother, or both. The application must be submitted online through the head of the institution where the student is studying.",
    requirements: [
      "APL Income Limit - ₹20,000 in rural areas(local body/grama panchayat), ₹22,375 in urban areas(corportaion/municipality)",
    ],
    infoLink:
      "https://www.instagram.com/p/DRHHh9Kk-tj/?igsh=emR0YTZkOGlxNHB1",
    applyLink: "#",
    lastDate: "31/12/24",
  },
  {
    id: 22,
    title: "HOPE PLUS CET SCHOLARSHIP",
    amount: "₹40,000 per year for hostelers, ₹20,000 per year for day scholars",
    type: "general",
    source: "private",
    description:
      "Scholarship from CETA Galaxy Charitable Trust for the upliftment of financially challenged students.",
    requirements: ["First Year B.Tech/B.Arch Students"],
    applyLink: "https://cetagalaxytrust.com/form/hope-plus-cet-application-2025-2",
    infoLink:
      "https://www.instagram.com/p/DRjMwoCkxL2/?igsh=aGtkYzY3Z2I2enA",
    lastDate: "08/12/24",
  },
  {
    id: 23,
    title: "Muthoot M George Higher Education Scholarship",
    amount: "₹1,20,000 for B.Tech and B.Sc Nursing Students, ₹2,40,000 for MBBS Students",
    type: "general",
    source: "private",
    description: "Scholarship for students pursuing B.Tech, B.Sc Nursing, or MBBS.",
    requirements: [
      "First Year students pursuing B.Tech, B.Sc Nursing or MBBS"
    ],
    applyLink: "https://mgmscholarship.muthootgroup.com/",
    infoLink: "https://www.instagram.com/p/DRmwJhaE3a4/",
    lastDate: "30/11/25",
  },
  {
    id: 24,
    title: "Norka Roots Directors Scholarship",
    amount: "₹15,000",
    type: "general",
    source: "private",
    description: "Financial Assistance for children of non-resident Keralites.",
    requirements: [
      "First-year students who are children of non-resident Keralites (returnees or those who worked abroad for at least 2 years)",
      "Annual Income Limit: 3,00,000"
    ],
    applyLink: "https://www.scholarship.norkaroots.org/",
    infoLink:
      "https://www.instagram.com/p/DRqyiCRjPvl/",
    lastDate: "30/11/25",
  },
  {
    id: 25,
    title: "Federal Bank Hormis Foundation Scholarship",
    amount: "₹1,00,000/year for tuition & educational expenses. One-time device support: Laptop ₹40,000 or Tablet ₹30,000",
    type: "general",
    source: "private",
    description: "Upto 100% coverage of Tuition fee(based on fee structure) and other educational expenses, and one-time device reimbursement within overall yearly eligibility.",
    requirements: ["First year BE/B.Tech/B.Arch,MBBS,BDS,BVSc,BSC Nursing,BSC Agriculture,MBA/PGDM students."],
    applyLink: "https://www.federal.bank.in/corporate-social-responsibility",
    infoLink: "https://www.instagram.com/p/DRxD_y_E7dt/",
    lastDate: "31/12/2025",
  },
  {
    id: 26,
    title: "Aditya Birla Capital Scholarship",
    amount: "₹45,000",
    type: "general",
    source: "private",
    description: "Scholarship for students pursuing B.Tech, B.Sc Nursing, or MBBS.",
    requirements: [
      "Minimum 60% marks in previous year of education",
      "Annual Income Limit: ₹6,00,000"
    ],
    applyLink: "https://www.buddy4study.com/page/aditya-birla-capital-scholarship",
    infoLink: "https://www.instagram.com/p/DR4sMJFEzrl",
    lastDate: "7/12/2025",
  },
  {
    id: 27,
    title: "Anandam Senapathi Scholarship",
    amount: "Up to ₹54,000",
    type: "general",
    source: "private",
    description: "Scholarship for students pursuing B.Tech.",
    requirements: [
      "Must have passed +2 from Kerala",
      "Must have secured above 80% in the Plus Two Examination",
      "Income Limit: ₹3,00,000",
      "Good Rank in KEAM/JEE"
    ],
    applyLink: "https://www.pratiksha.org/",
    infoLink: "https://www.instagram.com/p/DR4sMJFEzrl",
    lastDate: "5/1/2026",
  },
  {
    id: 28,
    title: "FFE Synopsis Scholarship Program",
    amount: "Up to ₹50,000",
    type: "general",
    source: "private",
    description: "Scholarship for students pursuing B.Tech.",
    requirements: [
      "Admitted to 1st Year of Professional Course (B.E / B.Tech), through merit-based entrance exam",
      "Minimum 70% marks in 12th Standard",
      "Annual Income Limit: ₹3,00,000",
      "Diploma / Lateral Entry / B.Arch students are not eligible"
    ],
    applyLink: " https://ffe.org/ffe-synopsys-scholarship-program/",
    infoLink: "https://www.instagram.com/p/DS5gswUE-hv/",
    lastDate: "31/12/2025",
  },
  {
    id: 29,
    title: "Kind Circle Scholarship",
    amount: "₹50,000",
    type: "general",
    source: "private",
    description: "Scholarship for meritorious students from Class 1 to Post-Graduation.",
    requirements: [
      "Students from Class 1 to Post-Graduation",
      "Income limit: ₹6 lakh per year",
      "At least 60% in the previous academic year"
    ],
    applyLink: " https://www.buddy4study.com/page/kind-circle-scholarship-for-meritorious-students",
    infoLink: "https://www.instagram.com/p/DS-iZc7E1BJ",
    lastDate: "25/03/2026",
  },
  {
    id: 30,
    title: "Tata Capital Pankh Scholarship 2025-26",
    amount: "Up to ₹18,000",
    type: "general",
    source: "private",
    description: "Scholarship for Class 11-12 students or students pursuing UG programs/Diploma/ITI/Polytechnic from a recognised institute.",
    requirements: [
      "Class 11 and 12 students, OR Students pursuing UG programs/Diploma/ITI/Polytechnic from a recognised institute",
      "Minimum 60% marks in previous academic year",
      "Annual family income ≤ ₹2.5 lakh"
    ],
    applyLink: "https://www.buddy4study.com/page/the-tata-capital-pankh-scholarship-programme",
    infoLink: "https://www.instagram.com/p/DS_8qprk7m4/",
    lastDate: "11/01/2026",
  },
  {
    id: 31,
    title: "Professor Joseph Mundassery Scholarship",
    amount: "₹10,000 for SSLC/THSLC/+2/VHSE, ₹15,000 for Degree/PG",
    type: "general",
    source: "government",
    description: "Scholarship for students who have studied in Government or Aided institutions with high academic performance.",
    requirements: [
      "Must have studied in Government or Aided institutions",
      "Income limit: ₹8 lakh (BPL category has priority)",
      "Must have scored: Full A+ in THSLC/SSLC OR Full A+ in +2/VHSE OR 80% in Degree OR 75% in PG in the previous academic year"
    ],
    applyLink: " https://mwdscholarship.kerala.gov.in",
    infoLink: "https://www.instagram.com/p/DTBHhslE1ln",
    lastDate: "09/01/2026",
  },
  {
    id: 32,
    title: "CH Muhammedkoya Scholarship",
    amount: "Day Scholars: ₹5,000/year (Degree), ₹6,000/year (PG), ₹7,000/year (Professional); Hostellers: ₹13,000/year",
    type: "girl",
    source: "government",
    description: "Scholarship for female students belonging to notified minority communities studying in Kerala.",
    requirements: [
      "Female students belonging to notified minority communities (Muslim, Christian [all sects], Sikh, Buddhist, Jain, and Parsi)",
      "Studying UG, PG or professional courses in Government or Government-aided institutions in Kerala",
      "Income limit: ₹3 lakh (Priority for BPL candidates)"
    ],
    applyLink: "https://mwdscholarship.kerala.gov.in",
    infoLink: "https://www.instagram.com/p/DTE2S_qkwR6",
    lastDate: "09/01/2026",
  },
  {
    id: 33,
    title: "District Merit Scholarship",
    amount: "₹2,000",
    type: "general",
    source: "government",
    description: "Merit scholarship for students who secured A+ in all subjects in SSLC/THSSLC or Higher Secondary/VHSE March 2024 examination.",
    requirements: [
      "Students who studied under the State syllabus of SSLC/THSSLC and appeared for the March 2024 examination, securing A+ in all subjects",
      "Students who studied under the State syllabus of Higher Secondary/VHSE and appeared for the March 2024 examination, securing A+ in all subjects"
    ],
    applyLink: "",
    infoLink: "https://www.instagram.com/p/DUOYAosExd4",
    lastDate: "05/02/2026",
  },
  {
    id: 34,
    title: "Chief Minister's Prathibha Puraskaram (CM Scholarship)",
    amount: "₹1,00,000",
    type: "general",
    source: "government",
    description: "Scholarship for students who completed their degree in 2022-23 from eligible Kerala universities with high academic performance.",
    requirements: [
      "Completed Degree in 2022-23 (3/4/5 year course)",
      "Minimum 75% aggregate marks",
      "Annual family income below ₹2.5 lakh",
      "Studied under eligible Kerala universities (Kerala, Calicut, CUSAT, MG, Kannur, KUHS, KAU, KVASU, KUFOS, NUALS, SSUS, APJ AKTU, Kalamandalam)",
      "Not received Higher Education Scholarship"
    ],
    applyLink: "https://cmprathibhapuraskaram.kerala.gov.in/",
    infoLink: "https://www.instagram.com/p/DU3vRTtk69c",
    lastDate: "20/02/2026",
  },
  {
    id: 35,
    title: "L&T Build India Scholarship",
    amount: "₹13,400 for 24 months",
    type: "general",
    source: "private",
    description: "Fully sponsored 2-year M.Tech in Construction Technology & Management (CTaM). Tuition & sponsorship fees paid by L&T. Monthly stipend of ₹13,400 for 24 months. Summer internship & final project at L&T project sites. Mentoring by L&T professionals + employment opportunity with L&T after completion",
    requirements: [
      "Final Year B.Tech/B.E Civil or Electrical Engineering students",
      "Minimum 70% or 7.0 CGPA",
      "Minimum 65% in 10th and 12th or Diploma",
    ],
    applyLink: "https://www.lntecc.com/scholarship-for-engineering-students/",
    infoLink: "https://www.instagram.com/p/DV3KSxLk6gH/",
    lastDate: "25/03/2026",
  },
];

