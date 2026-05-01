import { createClient } from '@supabase/supabase-js';

const contentArea = document.getElementById('content-area');

// Use Vite environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabaseClient = null;

if (supabaseUrl && supabaseKey) {
    supabaseClient = createClient(supabaseUrl, supabaseKey);
} else {
    console.warn("Supabase keys missing. Make sure to define VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file or Vercel dashboard.");
}

// Table configurations based on plan.md
const pages = {
    'contacts': {
        title: 'Manage Contacts',
        table: 'contacts',
        fields: ['name', 'phone_number', 'developer_link']
    },
    'notes': {
        title: 'Manage Notes',
        table: 'notes',
        fields: ['department', 'semester', 'subject_name', 'link_url']
    },
    'question-papers': {
        title: 'Manage Question Papers',
        table: 'question_papers',
        fields: ['department', 'semester', 'subject_name', 'exam_type', 'link_url']
    },
    'scholarships': {
        title: 'Manage Scholarships',
        table: 'scholarships',
        fields: ['title', 'amount', 'type', 'source', 'apply_link']
    },
    'minor-courses': {
        title: 'Manage Minor Courses',
        table: 'minor_courses',
        fields: ['course_name', 'department', 'syllabus_link']
    },
    'syllabus': {
        title: 'Manage Syllabus',
        table: 'syllabus_curriculum',
        fields: ['department', 'type', 'semester', 'link_url']
    }
};

let currentPage = null;

async function renderPage(pageId) {
    if (!pages[pageId]) {
        contentArea.innerHTML = `<h1>Welcome to the Admin Portal</h1><p>Select a category from the navigation to manage data.</p>`;
        return;
    }
    
    if (!supabaseClient) {
        alert("Supabase client is not initialized. Please set your VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in the .env file.");
        return;
    }
    
    currentPage = pageId;
    const page = pages[pageId];
    
    let html = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <h1>${page.title}</h1>
            <button class="btn" id="add-btn">Add New Record</button>
        </div>
        <table>
            <thead>
                <tr>
                    ${page.fields.map(f => `<th>${f.replace('_', ' ').toUpperCase()}</th>`).join('')}
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody id="table-body">
                <tr><td colspan="${page.fields.length + 1}">Loading data...</td></tr>
            </tbody>
        </table>

        <div id="form-modal" class="modal">
            <div class="modal-content">
                <h2>Add/Edit Record</h2>
                <form id="record-form">
                    ${page.fields.map(f => `
                        <div class="form-group">
                            <label>${f.replace('_', ' ').toUpperCase()}</label>
                            <input type="text" name="${f}" required>
                        </div>
                    `).join('')}
                    <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                        <button type="submit" class="btn" style="flex: 1;">Save</button>
                        <button type="button" class="btn" style="flex: 1; background: transparent; border: 1px solid var(--card-border);" id="cancel-btn">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    contentArea.innerHTML = html;
    
    // Bind modal buttons since inline onclick doesn't work well with modules
    document.getElementById('add-btn').addEventListener('click', openModal);
    document.getElementById('cancel-btn').addEventListener('click', closeModal);
    document.getElementById('record-form').addEventListener('submit', saveRecord);
    
    await fetchData();
}

async function fetchData() {
    const page = pages[currentPage];
    const { data, error } = await supabaseClient.from(page.table).select('*').order('created_at', { ascending: false });
    
    const tbody = document.getElementById('table-body');
    if (error) {
        tbody.innerHTML = `<tr><td colspan="${page.fields.length + 1}">Error: ${error.message}</td></tr>`;
        return;
    }
    
    if (!data || data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="${page.fields.length + 1}">No records found.</td></tr>`;
        return;
    }
    
    tbody.innerHTML = data.map(row => `
        <tr>
            ${page.fields.map(f => `<td>${row[f] || ''}</td>`).join('')}
            <td>
                <button class="btn delete-btn" data-id="${row.id}" style="padding: 0.25rem 0.5rem; font-size: 0.8rem;">Delete</button>
            </td>
        </tr>
    `).join('');
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => deleteRecord(e.target.dataset.id));
    });
}

function openModal() {
    document.getElementById('record-form').reset();
    document.getElementById('form-modal').classList.add('active');
}

function closeModal() {
    document.getElementById('form-modal').classList.remove('active');
}

async function saveRecord(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const record = Object.fromEntries(formData.entries());
    
    const page = pages[currentPage];
    const { error } = await supabaseClient.from(page.table).insert([record]);
    
    if (error) {
        alert("Error saving record: " + error.message);
    } else {
        closeModal();
        fetchData();
    }
}

async function deleteRecord(id) {
    if (!confirm('Are you sure you want to delete this record?')) return;
    
    const page = pages[currentPage];
    const { error } = await supabaseClient.from(page.table).delete().eq('id', id);
    
    if (error) {
        alert("Error deleting record: " + error.message);
    } else {
        fetchData();
    }
}

// Navigation Listeners
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
        renderPage(e.target.dataset.target);
    });
});
