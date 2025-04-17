// ====== Section Scroll Highlighting ======
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// ====== Theme Toggle (Dark/Light) ======
const toggle = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('dark-icon');
const lightIcon = document.getElementById('light-icon');
const root = document.documentElement;

// Check saved theme preference
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    root.setAttribute('data-theme', 'light');
    darkIcon.style.display = 'block';
    lightIcon.style.display = 'none';
} else {
    root.setAttribute('data-theme', 'dark');
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'block';
}

// Toggle theme on click
toggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';

    if (isDark) {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        darkIcon.style.display = 'block';
        lightIcon.style.display = 'none';
    } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'block';
    }
});


// ====== Form Reset After Submission ======
function clearForm() {
    setTimeout(() => {
        document.getElementById("myForm").reset();
    }, 100); // Delay to ensure form is submitted before clearing
}
