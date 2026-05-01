export type DeptKey = "cse" | "ece" | "eee" | "aei" | "el" | "ce" | "ie" | "me";
export type TypeKey = "syllabus" | "curriculum";

export type DeadlineDate = string | { category: string; date: string }[];

export type Scholarship = {
  id?: string | number;
  title: string;
  amount: string;
  type: "general" | "girl";
  source: "government" | "private";
  description: string;
  requirements: string[];
  applyLink: string;
  infoLink?: string;
  lastDate: DeadlineDate;
};

export type MinorOption = {
  label: string;
  value: string;
  driveLink: string;
  info?: string;
};

export type DepartmentData = {
  label?: string;
  driveLink?: string;
  minors?: MinorOption[];
};

export type PaperLink = {
  label: string;
  href: string;
};

export type PaperSubject = {
  name: string;
  papers: PaperLink[];
};

export type SemesterPapers = {
  id: string;
  subjects: PaperSubject[];
};
