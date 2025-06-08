// Calendar Theme Toggle
const calendarThemes = {
    light: {
        body: '#ffffff',
        text: '#1f2937',
        navbar: '#ffffff',
        navbarBorder: '#e5e7eb',
        sidebar: '#f8fafc',
        sidebarText: '#1f2937',
        main: '#f8fafc',
        card: '#ffffff',
        cardText: '#1f2937',
        button: '#6366f1',
        buttonText: '#fff',
        buttonHover: '#4338ca',
        link: '#4f46e5'
    },
    dark: {
        body: '#1f2937',
        text: '#f3f4f6',
        navbar: '#111827',
        navbarBorder: '#374151',
        sidebar: '#192133',
        sidebarText: '#f3f4f6',
        main: '#232b3b',
        card: '#232b3b',
        cardText: '#f3f4f6',
        button: '#6366f1',
        buttonText: '#fff',
        buttonHover: '#4f46e5',
        link: '#818cf8'
    }
};

function setCalendarTheme(theme) {
    localStorage.setItem('calendar-theme', theme);
    const c = calendarThemes[theme];
    document.body.style.backgroundColor = c.body;
    document.body.style.color = c.text;
    // Navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.backgroundColor = c.navbar;
        navbar.style.borderBottom = `1px solid ${c.navbarBorder}`;
        navbar.style.color = c.text;
    }
    // Navbar links
    document.querySelectorAll('.navbar nav a').forEach(a => {
        a.style.color = c.text;
    });
    // Sidebar
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.backgroundColor = c.sidebar;
        sidebar.style.color = c.sidebarText;
    }
    // Sidebar logo
    const sidebarLogo = document.querySelector('.sidebar .logo, aside .logo');
    if (sidebarLogo) {
        sidebarLogo.style.color = theme === 'light' ? '#4f46e5' : '#f3f4f6';
    }
    // Main area
    const main = document.querySelector('.calendar-view, .main, main');
    if (main) {
        main.style.backgroundColor = c.main;
        main.style.color = c.text;
    }
    // Cards
    document.querySelectorAll('.calendar-card, .card, .event-card, .task').forEach(card => {
        card.style.backgroundColor = c.card;
        card.style.color = c.cardText;
    });
    // Buttons
    document.querySelectorAll('button:not(#theme-toggle)').forEach(b => {
        b.style.backgroundColor = c.button;
        b.style.color = c.buttonText;
        b.onmouseover = () => b.style.backgroundColor = c.buttonHover;
        b.onmouseout = () => b.style.backgroundColor = c.button;
    });
    // Links
    document.querySelectorAll('a').forEach(a => {
        a.style.color = c.link;
    });
    // Theme toggle button
    const tbtn = document.getElementById('theme-toggle');
    if (tbtn) {
        tbtn.textContent = theme === 'light' ? '🌙' : '☀️';
        tbtn.style.backgroundColor = theme === 'light' ? '#1f2937' : '#fff';
        tbtn.style.color = theme === 'light' ? '#fff' : '#1f2937';
    }
    // Month grid and day cells
    document.querySelectorAll('.month-grid').forEach(grid => {
        grid.style.backgroundColor = c.sidebar; // match sidebar/main bg
    });
    document.querySelectorAll('.month-day-cell').forEach(cell => {
        cell.style.backgroundColor = c.card;
        cell.style.color = c.cardText;
        cell.style.borderColor = theme === 'light' ? '#e5e7eb' : '#374151';
    });
    document.querySelectorAll('.date-number').forEach(num => {
        num.style.color = c.cardText;
    });
    // Mini calendar
    document.querySelectorAll('.calendar-mini').forEach(mini => {
        mini.style.backgroundColor = theme === 'light' ? '#f3f4f6' : '#334155';
    });
    document.querySelectorAll('.calendar-mini table').forEach(tbl => {
        tbl.style.backgroundColor = 'transparent';
        tbl.style.color = theme === 'light' ? '#1f2937' : '#f3f4f6';
    });
    document.querySelectorAll('.calendar-mini th, .calendar-mini td').forEach(cell => {
        cell.style.color = theme === 'light' ? '#1f2937' : '#f3f4f6';
        cell.style.backgroundColor = 'transparent';
    });
    // Tasks and roadmap-tasks (month/week view)
    document.querySelectorAll('.task').forEach(task => {
        task.style.backgroundColor = c.card;
        task.style.color = c.cardText;
        task.style.borderLeft = `4px solid ${theme === 'light' ? '#6366f1' : '#3b82f6'}`;
    });
    document.querySelectorAll('.roadmap-task').forEach(task => {
        task.style.backgroundColor = c.card;
        task.style.color = c.cardText;
        task.style.borderLeft = `4px solid ${theme === 'light' ? '#6366f1' : '#3b82f6'}`;
    });
}

function toggleCalendarTheme() {
    const current = localStorage.getItem('calendar-theme') || 'light';
    setCalendarTheme(current === 'light' ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', () => {
    setCalendarTheme(localStorage.getItem('calendar-theme') || 'light');
}); 