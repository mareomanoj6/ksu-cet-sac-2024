export interface MinorOption {
  value: string;
  label: string;
  info: string;
  driveLink: string;
}

export interface DepartmentData {
  label?: string;
  driveLink?: string;
  minors?: MinorOption[];
}

export const MINOR_COURSES_DATA: Record<string, DepartmentData> = {
  aei: {
    label: "Minor in Applied Electronics and Instrumentation.",
    driveLink:
      "https://drive.google.com/file/d/1pbV3_OxQFdzqu0hs32RLLi2CG0I_u13p/view?usp=sharing",
  },
  cse: {
    minors: [
      {
        value: "ai",
        label: "Minor in Artificial Intelligence",
        info: "Minor in Artificial Intelligence (CSE).",
        driveLink:
          "https://drive.google.com/file/d/1cA-cObjxaNFty1qpSEu3bT4w2BU3uzI_/view?usp=sharing",
      },
      {
        value: "cs",
        label: "Minor in Computer Science and Engineering",
        info: "Minor in Computer Science and Engineering (CSE).",
        driveLink:
          "https://drive.google.com/file/d/1N8RB8H2Y2y2I6iumX67dIqQMCukC_HHR/view?usp=sharing",
      },
    ],
  },
  ece: {
    label: "Minor in Electronics and Communication Engineering.",
    driveLink:
      "https://drive.google.com/file/d/1VBYCAPWh6uSpHYa7Ydgp3gRpqzpVPL9u/view?usp=sharing",
  },
  eee: {
    minors: [
      {
        value: "control",
        label: "Minor in Control Engineering",
        info: "Minor in Control Engineering (EEE).",
        driveLink:
          "https://drive.google.com/file/d/1MVyxE4_bHr-uZi5qlW0rNBWOVKE3vvVG/view?usp=sharing",
      },
      {
        value: "energy",
        label: "Minor in Energy Engineering",
        info: "Minor in Energy Engineering (EEE).",
        driveLink:
          "https://drive.google.com/file/d/1-DuXZQnZLjPvwAq7WVaS7-Eyg8KP6jEJ/view?usp=sharing",
      },
      {
        value: "power",
        label: "Minor in Power Converters & Drives",
        info: "Minor in Power Converters & Drives (EEE).",
        driveLink:
          "https://drive.google.com/file/d/1mJqkdJPDAvoX46upgq-0zr8fEIktFJ8I/view?usp=sharing",
      },
    ],
  },
  ie: {
    label: "Minor in Industrial and Systems Engineering.",
    driveLink:
      "https://drive.google.com/file/d/17fzBYEy574YQ2xHK3qhs-kIvW4AIE1hd/view?usp=sharing",
  },
  me: {
    minors: [
      {
        value: "fin",
        label: "Minor in Financial Management",
        info: "Minor in Financial Management (ME).",
        driveLink:
          "https://drive.google.com/file/d/17DdyIAILDmd5BUkkL0ijPJR4Fm25A1K2/view?usp=sharing",
      },
      {
        value: "isdm",
        label: "Minor in Intelligent Systems Design Manufacturing",
        info: "Minor in Intelligent Systems Design Manufacturing (ME).",
        driveLink:
          "https://drive.google.com/file/d/1Wgf3sHPXxog-sW2eiWfQWC5TrgSppyGA/view?usp=sharing",
      },
    ],
  },
};

export const GENERAL_INFO = {
  title: "General Information",
  content: [
    "Those who complete the minor scheme along with regular B-Tech Programme will get an additional minor degree.",
    "Minor Programme starts in Semester 3.",
    "Enrolment to the minor programme is NOT COMPULSORY.",
    "Students are generally not allowed to register for minors offered by their parent branches. Additionally, students are prohibited from opting for minor courses if there is more than 30% syllabus content overlap between courses listed in the major and minor programmes.",
    "Some of the slots for the course will be outside regular working hours (before/after regular hours)",
    "There shall not be any supplementary examinations for the theory courses listed in the Minor curriculum. If a student fails in any of the theory courses, they shall be permitted to register for the alternate MOOC course specified in the Minor curriculum.",
    "Each department might offer one or more minor programs. Each minor program contains courses in a specific domain (details in the next page).",
    "The student has to complete 15 CREDITS TO GET THE MINOR DEGREE; the split-up is as follows:",
    "Allotment of Minor Program",
  ],
  creditBreakdown: [
    "Semester 3: 4 Credits",
    "Semester 4: 4 Credits",
    "Semester 5: 4 Credits",
    "Semester 6: 3 Credits",
    "You can also take a Maximum two MOOC courses approved by the University – 7 to 8 credits.",
  ],
  allotmentInfo: [
    "You can give maximum 7 choices for Minor programs.",
    "Allotment is based on your choice and your SGPA in the first semester. (Make your choices carefully and wisely, keeping in mind your GPA). If none of the choices can be allotted, you will be allotted a minor program at random, in which case you may drop minor if you wish.",
    "Re-allotment requests will not be considered.",
  ],
};
