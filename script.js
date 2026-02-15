// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px var(--shadow)';
    } else {
        navbar.style.boxShadow = '0 2px 10px var(--shadow)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Optional: Fetch repositories dynamically from GitHub API
// This is commented out as it requires API calls, but can be enabled if needed
/*
async function fetchGitHubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/indhra/repos?sort=updated&per_page=10');
        const repos = await response.json();
        
        const projectsGrid = document.getElementById('projectsGrid');
        projectsGrid.innerHTML = '';
        
        repos.forEach(repo => {
            if (!repo.fork && !repo.private) {
                const card = createProjectCard(repo);
                projectsGrid.appendChild(card);
            }
        });
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}

function createProjectCard(repo) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const tags = repo.topics || [];
    const tagsHTML = tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('');
    
    card.innerHTML = `
        <div class="project-header">
            <i class="fas fa-code-branch"></i>
            <h3>${repo.name.replace(/_/g, ' ')}</h3>
        </div>
        <p class="project-description">
            ${repo.description || 'No description available'}
        </p>
        <div class="project-tags">
            ${tagsHTML}
            ${repo.language ? `<span class="tag">${repo.language}</span>` : ''}
        </div>
        <div class="project-links">
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i> View Code
            </a>
            ${repo.homepage ? `
                <a href="${repo.homepage}" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt"></i> Demo
                </a>
            ` : ''}
        </div>
    `;
    
    return card;
}

// Uncomment to enable dynamic repo loading
// fetchGitHubRepos();
*/

console.log('Portfolio loaded successfully! 🚀');
