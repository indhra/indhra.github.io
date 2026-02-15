# Indhra Kiranu N A – Portfolio

A modern, dark-themed portfolio website for a Cloud-focused Data Scientist with 5+ years of experience at Mercedes-Benz R&D.

🌐 **Live Site:** [https://indhra.github.io](https://indhra.github.io)

## Features

- 🌓 **Dark/Light Theme Toggle**: Automatic system theme detection with manual toggle support
- 🌑 **Dark Navy Theme**: Professional design with cyan/blue accents and smooth animations
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile with hamburger navigation
- ♿ **Accessible**: ARIA attributes, keyboard navigation, focus management, Escape key support
- 🚀 **Self-Contained**: Single `index.html` file with inline CSS/JS — no external dependencies except fonts/icons
- ✨ **Scroll Animations**: IntersectionObserver-powered reveal effects
- 🔗 **Real Projects**: 12 project cards linked to actual GitHub repositories
- 📄 **Resume Download**: One-click resume download from hero section
- 📧 **Quick Connect Form**: Simple contact form for visitors to share their details

## Sections

1. **Hero** — Name, tagline, and call-to-action buttons
2. **About** — Professional summary with key metric highlight cards
3. **Experience** — Timeline with 3 roles (Senior Data Scientist, Data Scientist, ML Engineer)
4. **Skills** — 9 categorized card groups with pill-shaped tags
5. **Projects** — 12 featured GitHub repositories
6. **Education** — M.Tech & B.Tech with GPA badges
7. **Certifications** — Azure, Kaggle, courses, and awards
8. **Contact** — Email, LinkedIn, GitHub, Kaggle links

## Technologies Used

- HTML5 (semantic, self-contained)
- CSS3 (CSS Variables, Grid, Flexbox, `@supports` queries)
- Vanilla JavaScript (IntersectionObserver, keyboard event handling)
- Google Fonts (Inter, Space Grotesk)
- Font Awesome 6 Icons
- GitHub Pages for hosting

## Local Development

```bash
git clone https://github.com/indhra/indhra.github.io.git
cd indhra.github.io
python3 -m http.server 8000
# Open http://localhost:8000
```

## Setup Instructions

### Resume Download
1. Place your resume PDF in the `assets/` folder as `Indhra_Kiranu_Resume.pdf`
2. The download button in the hero section will automatically link to it

### Contact Form Setup
The quick connect form is configured to work with Formspree by default. To activate it:

1. Sign up at [Formspree.io](https://formspree.io/) (free tier available)
2. Create a new form and get your form endpoint
3. In `index.html`, replace `YOUR_FORM_ID` in the form action with your Formspree form ID:
   ```html
   <form id="quickConnectForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

Alternatively, you can integrate with:
- Netlify Forms (if hosting on Netlify)
- Your own backend API
- Other form services like FormSubmit, Basin, etc.

## License

© 2025 Indhra Kiranu N A. All rights reserved.
