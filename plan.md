# Website Functionality Update Plan: Supabase Integration

This document outlines the plan to migrate static data from the frontend code to a Supabase database, along with a content management system (admin portal) to edit this data. No changes have been made to the website code.

## Part 1: Client-Side Data Migration Plan

The following pages will be updated to fetch data dynamically from Supabase instead of relying on hardcoded arrays/objects in the codebase. This enhances security (by not exposing links in source code) and maintainability.

### 1. Index Page (Contacts)
*   **Database Table:** `contacts`
*   **Fields:** `id`, `name`, `phone_number`, `developer_link` (optional), `created_at`
*   **Functionality:** 
    *   Fetch contacts from the `contacts` table on page load (or via Server Components).
    *   Render the contacts section dynamically based on the fetched data.

### 2. Notes Page
*   **Database Table:** `notes`
*   **Fields:** `id`, `department`, `semester` (integer), `subject_name`, `link_url`, `created_at`
*   **Functionality:**
    *   Fetch note links filtering by department/semester if applicable.
    *   Hide the actual URL behind a standard redirect or direct component link so it's not exposed statically.

### 3. Question Papers Page
*   **Database Table:** `question_papers`
*   **Fields:** `id`, `department`, `semester` (integer), `subject_name`, `exam_type` (e.g., Series 1, Semester Exam), `link_url`, `created_at`
*   **Functionality:**
    *   Fetch question paper links from the table.
    *   Group or filter by semester/exam type in the UI based on the database response.

### 4. Scholarships Page
*   **Database Table:** `scholarships`
*   **Fields:** `id`, `title`, `amount`, `type` (general/girl), `source` (government/private), `description`, `requirements` (array of text), `apply_link`, `info_link`, `deadline_date` (can be complex/array), `created_at`
*   **Functionality:**
    *   Load active scholarships dynamically.
    *   Ensure expired scholarships are filtered out either on the database level or application level.

### 5. Minor Courses Page
*   **Database Table:** `minor_courses`
*   **Fields:** `id`, `course_name`, `department`, `syllabus_link`, `description`, `created_at`
*   **Functionality:**
    *   Fetch minor course syllabus links and descriptions to render the list dynamically.

### 6. Syllabus / Curriculum Page
*   **Database Table:** `syllabus_curriculum`
*   **Fields:** `id`, `department`, `type` (syllabus/curriculum), `semester` (integer, optional), `link_url`, `created_at`
*   **Functionality:**
    *   Fetch the relevant syllabus links and render them in the UI.

---

## Part 2: Content Management System (Admin Portal) Plan

To manage the data securely and avoid data redundancy, an admin portal will be created. Each data category will have its own dedicated page to ensure clear separation of concerns and prevent cross-memory leaks. 

### Architecture & Security
*   **Route Protection:** All `/admin/*` routes will be protected by Supabase Authentication. Only authorized users (Admins) will be able to access these pages.
*   **Data Integrity:** Row Level Security (RLS) policies will be configured in Supabase to ensure that only authenticated admins can `INSERT`, `UPDATE`, or `DELETE` records. Public read access will be granted for fetching data on the main website.

### Admin Pages Structure

Each admin page will contain a data table showing existing records and a form to add/edit records.

#### 1. `/admin/contacts`
*   **Form:** Inputs for Name, Phone, and Developer Link.
*   **Actions:** Add new contact, Edit existing contact, Delete contact.

#### 2. `/admin/notes`
*   **Form:** Dropdowns for Department and Semester, inputs for Subject Name and Link URL.
*   **Actions:** Add new note link, Edit existing link, Delete link.

#### 3. `/admin/question-papers`
*   **Form:** Dropdowns for Department and Semester, inputs for Subject Name, Exam Type, and Link URL.
*   **Actions:** Add new paper link, Edit existing link, Delete link.

#### 4. `/admin/scholarships`
*   **Form:** Inputs for Title, Amount, Type (dropdown), Source (dropdown), Description, Requirements (dynamic list), Application Link, Info Link, and Deadline.
*   **Actions:** Add new scholarship, Edit existing scholarship, Delete scholarship.

#### 5. `/admin/minor-courses`
*   **Form:** Inputs for Course Name, Department, Syllabus Link, and Description.
*   **Actions:** Add new minor course, Edit existing course, Delete course.

#### 6. `/admin/syllabus`
*   **Form:** Dropdown for Department and Type (Syllabus/Curriculum), input for Semester (if Syllabus), and Link URL.
*   **Actions:** Add new syllabus link, Edit existing link, Delete link.

### Tech Stack Details
*   **Forms:** React Hook Form with Zod validation to ensure data submitted to the database is strictly typed and clean.
*   **Table UI:** Data grid or simple HTML tables with pagination to manage large amounts of links.
*   **State Management:** React Query (or Next.js App Router Server Actions) for data fetching, caching, and mutations to keep the UI in sync with the Supabase database.

---

## Part 3: Supabase SQL Setup Commands

You can run the following SQL commands in your Supabase project's SQL Editor to create the necessary tables and Row Level Security (RLS) policies.

```sql
-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Contacts Table
CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    phone_number TEXT,
    developer_link TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. Notes Table
CREATE TABLE notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    department TEXT NOT NULL,
    semester INTEGER NOT NULL,
    subject_name TEXT NOT NULL,
    link_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Question Papers Table
CREATE TABLE question_papers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    department TEXT NOT NULL,
    semester INTEGER NOT NULL,
    subject_name TEXT NOT NULL,
    exam_type TEXT,
    link_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 4. Scholarships Table
CREATE TABLE scholarships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    amount TEXT,
    type TEXT, -- 'general' or 'girl'
    source TEXT, -- 'government' or 'private'
    description TEXT,
    requirements JSONB, -- Array of text requirements
    apply_link TEXT NOT NULL,
    info_link TEXT,
    deadline_date JSONB, -- Can be a string or array of objects
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 5. Minor Courses Table
CREATE TABLE minor_courses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    course_name TEXT NOT NULL,
    department TEXT,
    syllabus_link TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 6. Syllabus / Curriculum Table
CREATE TABLE syllabus_curriculum (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    department TEXT NOT NULL,
    type TEXT NOT NULL, -- 'syllabus' or 'curriculum'
    semester INTEGER, -- Optional, only applies to 'syllabus'
    link_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- ==========================================
-- Row Level Security (RLS) Setup
-- ==========================================

-- Enable RLS on all tables
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE question_papers ENABLE ROW LEVEL SECURITY;
ALTER TABLE scholarships ENABLE ROW LEVEL SECURITY;
ALTER TABLE minor_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE syllabus_curriculum ENABLE ROW LEVEL SECURITY;

-- 1. Allow public read access to all tables (for the main website)
CREATE POLICY "Allow public read access on contacts" ON contacts FOR SELECT USING (true);
CREATE POLICY "Allow public read access on notes" ON notes FOR SELECT USING (true);
CREATE POLICY "Allow public read access on question_papers" ON question_papers FOR SELECT USING (true);
CREATE POLICY "Allow public read access on scholarships" ON scholarships FOR SELECT USING (true);
CREATE POLICY "Allow public read access on minor_courses" ON minor_courses FOR SELECT USING (true);
CREATE POLICY "Allow public read access on syllabus_curriculum" ON syllabus_curriculum FOR SELECT USING (true);

-- 2. Allow authenticated users (admins) to insert, update, delete records
CREATE POLICY "Allow authenticated full access on contacts" ON contacts FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated full access on notes" ON notes FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated full access on question_papers" ON question_papers FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated full access on scholarships" ON scholarships FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated full access on minor_courses" ON minor_courses FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated full access on syllabus_curriculum" ON syllabus_curriculum FOR ALL TO authenticated USING (true) WITH CHECK (true);
```

---

## Part 4: Next.js Integration Setup

Here is a step-by-step guide to setting up Supabase in your Next.js project.

### 1. Install Dependencies
You'll need the Supabase JS client to connect your frontend to the database. Run this in your terminal:
```bash
npm install @supabase/supabase-js
```

### 2. Configure Environment Variables
Create a `.env.local` file in the root of your project (if it doesn't exist) and add your Supabase credentials. You can find these in your Supabase project settings under **API**:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Create the Supabase Client
Create a new file `lib/supabase.ts` (or `utils/supabase.ts`) to initialize and export the Supabase client so you can use it across your application.

```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 4. Fetching Data (Example)
Here is an example of how you can replace the hardcoded data fetch in one of your components/pages (e.g., `app/notes/page.tsx` or a server component):

```typescript
import { supabase } from '@/lib/supabase';

export default async function NotesPage() {
  // Example of fetching notes data from Supabase
  const { data: notes, error } = await supabase
    .from('notes')
    .select('*')
    .eq('department', 'cse')
    .order('semester', { ascending: true });

  if (error) {
    console.error("Error fetching notes:", error);
    // handle error
  }

  return (
    <div>
      {/* Map through your notes data here */}
    </div>
  );
}
```