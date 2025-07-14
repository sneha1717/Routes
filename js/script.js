// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setDarkMode(enabled) {
  if (enabled) {
    document.body.classList.add('dark-mode');
    darkModeIcon.textContent = '☀️';
    localStorage.setItem('darkMode', 'true');
  } else {
    document.body.classList.remove('dark-mode');
    darkModeIcon.textContent = '🌙';
    localStorage.setItem('darkMode', 'false');
  }
}

// On load
const darkPref = localStorage.getItem('darkMode');
if (darkPref === null) {
  setDarkMode(prefersDark);
} else {
  setDarkMode(darkPref === 'true');
}

darkModeToggle && darkModeToggle.addEventListener('click', () => {
  setDarkMode(!document.body.classList.contains('dark-mode'));
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn && (scrollTopBtn.style.display = 'flex');
  } else {
    scrollTopBtn && (scrollTopBtn.style.display = 'none');
  }
});
scrollTopBtn && scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Floating Chatbot Icon (modal placeholder)
const chatbotIcon = document.getElementById('chatbot-icon');
chatbotIcon && chatbotIcon.addEventListener('click', () => {
  alert('Chatbot coming soon!');
});

// Navbar active link highlight (basic)
document.querySelectorAll('.nav-link').forEach(link => {
  if (window.location.pathname.endsWith(link.getAttribute('href'))) {
    link.classList.add('active');
  }
}); 