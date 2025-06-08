// Planner Theme Toggle
const plannerThemes = {
    light: {
        body: '#ffffff',
        text: '#1f2937',
        navbar: '#ffffff',
        navbarBorder: '#e5e7eb',
        card: '#1e293b',
        cardText: '#fff',
        input: '#fff',
        inputText: '#1f2937',
        button: '#6366f1',
        buttonText: '#fff',
        buttonHover: '#4338ca',
        link: '#6366f1'
    },
    dark: {
        body: '#1f2937',
        text: '#f3f4f6',
        navbar: '#111827',
        navbarBorder: '#374151',
        card: '#192133',
        cardText: '#f3f4f6',
        input: '#232b3b',
        inputText: '#f3f4f6',
        button: '#6366f1',
        buttonText: '#fff',
        buttonHover: '#4f46e5',
        link: '#818cf8'
    }
};

function setPlannerTheme(theme) {
    localStorage.setItem('planner-theme', theme);
    const c = plannerThemes[theme];
    document.body.style.backgroundColor = c.body;
    document.body.style.color = c.text;
    // Navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.backgroundColor = c.navbar;
        navbar.style.borderBottom = `1px solid ${c.navbarBorder}`;
    }
    // Card
    const card = document.querySelector('.roadmap-card, .planner-card, .login-container, .calendar-container, .card');
    if (card) {
        card.style.backgroundColor = c.card;
        card.style.color = c.cardText;
    }
    // Inputs
    document.querySelectorAll('input, textarea').forEach(i => {
        i.style.backgroundColor = c.input;
        i.style.color = c.inputText;
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
}

function togglePlannerTheme() {
    const current = localStorage.getItem('planner-theme') || 'light';
    setPlannerTheme(current === 'light' ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', () => {
    setPlannerTheme(localStorage.getItem('planner-theme') || 'light');
}); 