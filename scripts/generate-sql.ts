import fs from 'fs';
import path from 'path';

// Import data
import { MINOR_COURSES_DATA } from '../data/minor-courses';
import { SCHOLARSHIPS } from '../data/scholarships';
import { DRIVE_LINKS } from '../data/syllabus';

import { NOTES_CSE, NOTES_ECE, NOTES_EEE, NOTES_ECP, NOTES_AEI, NOTES_ME, NOTES_CE, NOTES_IE } from '../data/notes';

import {
    QUESTION_CSE, QUESTION_ECE, QUESTION_EEE, QUESTION_ECP,
    QUESTION_AEI, QUESTION_ME, QUESTION_CE, QUESTION_IE
} from '../data/papers-cse';

let sql = `-- Supabase Seed Data\n\n`;

function escapeSql(str: string): string {
    if (!str) return "''";
    return "'" + str.replace(/'/g, "''") + "'";
}

// 1. Contacts (Hardcoded from app/page.tsx)
const contacts = [
    { name: "Hasi Rahman K", phone: "9446842092", dev: "" },
    { name: "Daris Benny", phone: "9778135924", dev: "" },
    { name: "Devan", phone: "8111835721", dev: "" },
    { name: "Helan", phone: "8139841609", dev: "" },
    { name: "Janees", phone: "7736760704", dev: "" },
    { name: "Anand Maheshwar", phone: "9447839911", dev: "" },
    { name: "Mareo Manoj", phone: "7306641617", dev: "https://mareomanoj.is-a.dev" },
    { name: "Mariam Jo", phone: "9496622452", dev: "" },
    { name: "Noel Tom", phone: "6238999360", dev: "" },
    { name: "Yamin Beck", phone: "7012837399", dev: "" },
];

sql += `-- Contacts\n`;
contacts.forEach(c => {
    sql += `INSERT INTO contacts (name, phone_number, developer_link) VALUES (${escapeSql(c.name)}, ${escapeSql(c.phone)}, ${escapeSql(c.dev)});\n`;
});
sql += `\n`;

// 2. Minor Courses
sql += `-- Minor Courses\n`;
for (const [dept, data] of Object.entries(MINOR_COURSES_DATA)) {
    if (data.minors) {
        data.minors.forEach(m => {
            sql += `INSERT INTO minor_courses (course_name, department, syllabus_link, description) VALUES (${escapeSql(m.label)}, ${escapeSql(dept)}, ${escapeSql(m.driveLink)}, ${escapeSql(m.info)});\n`;
        });
    } else if (data.label && data.driveLink) {
        sql += `INSERT INTO minor_courses (course_name, department, syllabus_link, description) VALUES (${escapeSql(data.label)}, ${escapeSql(dept)}, ${escapeSql(data.driveLink)}, '');\n`;
    }
}
sql += `\n`;

// 3. Scholarships
sql += `-- Scholarships\n`;
SCHOLARSHIPS.forEach(s => {
    let reqs = escapeSql(JSON.stringify(s.requirements));
    let lastDate = typeof s.lastDate === 'string' ? escapeSql(JSON.stringify(s.lastDate)) : escapeSql(JSON.stringify(s.lastDate));
    sql += `INSERT INTO scholarships (title, amount, type, source, description, requirements, apply_link, info_link, deadline_date) VALUES (${escapeSql(s.title)}, ${escapeSql(s.amount)}, ${escapeSql(s.type)}, ${escapeSql(s.source)}, ${escapeSql(s.description)}, ${reqs}::jsonb, ${escapeSql(s.applyLink)}, ${escapeSql(s.infoLink)}, ${lastDate}::jsonb);\n`;
});
sql += `\n`;

// 4. Syllabus
sql += `-- Syllabus\n`;
for (const [dept, link] of Object.entries(DRIVE_LINKS.curriculum)) {
    sql += `INSERT INTO syllabus_curriculum (department, type, link_url) VALUES (${escapeSql(dept)}, 'curriculum', ${escapeSql(link)});\n`;
}
for (const [dept, sems] of Object.entries(DRIVE_LINKS.syllabus)) {
    for (const [sem, link] of Object.entries(sems)) {
        sql += `INSERT INTO syllabus_curriculum (department, type, semester, link_url) VALUES (${escapeSql(dept)}, 'syllabus', ${sem}, ${escapeSql(link)});\n`;
    }
}
sql += `\n`;

// 5. Notes
sql += `-- Notes\n`;
const notesData: Record<string, any[]> = {
    cse: NOTES_CSE, ece: NOTES_ECE, eee: NOTES_EEE, ecp: NOTES_ECP,
    aei: NOTES_AEI, me: NOTES_ME, ce: NOTES_CE, ie: NOTES_IE
};

for (const [dept, dataArr] of Object.entries(notesData)) {
    dataArr.forEach(semData => {
        const sem = semData.id;
        semData.items.forEach((item: any) => {
            sql += `INSERT INTO notes (department, semester, subject_name, link_url) VALUES (${escapeSql(dept)}, ${sem}, ${escapeSql(item.label)}, ${escapeSql(item.href)});\n`;
        });
    });
}
sql += `\n`;

// 6. Question Papers
sql += `-- Question Papers\n`;
const questionData: Record<string, any> = {
    cse: QUESTION_CSE, ece: QUESTION_ECE, eee: QUESTION_EEE, ecp: QUESTION_ECP,
    aei: QUESTION_AEI, me: QUESTION_ME, ce: QUESTION_CE, ie: QUESTION_IE
};

for (const [dept, sems] of Object.entries(questionData)) {
    for (const [semKey, semData] of Object.entries(sems)) {
        const sem = parseInt(semKey.replace('sem', ''));
        (semData as any).subjects.forEach((subject: any) => {
            subject.papers.forEach((paper: any) => {
                if (paper.href && paper.href !== "#") {
                    sql += `INSERT INTO question_papers (department, semester, subject_name, exam_type, link_url) VALUES (${escapeSql(dept)}, ${sem}, ${escapeSql(subject.name)}, ${escapeSql(paper.label)}, ${escapeSql(paper.href)});\n`;
                }
            });
        });
    }
}
sql += `\n`;

fs.writeFileSync(path.join(__dirname, '..', 'seed.sql'), sql);
console.log('Successfully generated seed.sql with ' + sql.split('\\n').length + ' lines.');
