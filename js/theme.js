// Theme toggle functionality
const themes = {
    light: {
        body: '#ffffff',
        text: '#1f2937',
        navbar: '#ffffff',
        navbarBorder: '#e5e7eb',
        loginContainer: '#ffffff',
        loginContainerBorder: '#e5e7eb',
        inputBg: '#ffffff',
        inputBorder: '#e5e7eb',
        inputText: '#1f2937',
        inputPlaceholder: '#9ca3af',
        button: '#4f46e5',
        buttonHover: '#4338ca',
        link: '#4f46e5',
        shadow: 'rgba(0, 0, 0, 0.1)'
    },
    dark: {
        body: '#1f2937',
        text: '#f3f4f6',
        navbar: '#111827',
        navbarBorder: '#374151',
        loginContainer: '#111827',
        loginContainerBorder: '#374151',
        inputBg: '#1f2937',
        inputBorder: '#374151',
        inputText: '#f3f4f6',
        inputPlaceholder: '#9ca3af',
        button: '#6366f1',
        buttonHover: '#4f46e5',
        link: '#818cf8',
        shadow: 'rgba(0, 0, 0, 0.3)'
    }
};

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Get current theme colors
    const colors = themes[theme];
    
    // Apply colors to specific elements
    document.body.style.backgroundColor = colors.body;
    document.body.style.color = colors.text;
    
    // Navbar styles
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.backgroundColor = colors.navbar;
        navbar.style.borderBottom = `1px solid ${colors.navbarBorder}`;
    }
    
    // Login container styles
    const loginContainer = document.querySelector('.login-container');
    if (loginContainer) {
        loginContainer.style.backgroundColor = colors.loginContainer;
        loginContainer.style.border = `1px solid ${colors.loginContainerBorder}`;
        loginContainer.style.boxShadow = `0 4px 6px ${colors.shadow}`;
    }
    
    // Input styles
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.style.backgroundColor = colors.inputBg;
        input.style.borderColor = colors.inputBorder;
        input.style.color = colors.inputText;
    });
    
    // Button styles
    const buttons = document.querySelectorAll('button:not(#theme-toggle)');
    buttons.forEach(button => {
        button.style.backgroundColor = colors.button;
        button.onmouseover = () => button.style.backgroundColor = colors.buttonHover;
        button.onmouseout = () => button.style.backgroundColor = colors.button;
    });
    
    // Link styles
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = colors.link;
    });
    
    // Update theme toggle button
    updateThemeButton(theme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function updateThemeButton(theme) {
    const button = document.getElementById('theme-toggle');
    if (button) {
        button.textContent = theme === 'light' ? '🌙' : '☀️';
        button.style.backgroundColor = theme === 'light' ? '#1f2937' : '#ffffff';
        button.style.color = theme === 'light' ? '#ffffff' : '#1f2937';
    }
}

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}); 