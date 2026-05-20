# Personal Portfolio Website

## Gaganashri TA | Full Stack Java Developer & Data Science with Python

A responsive personal portfolio website showcasing projects, skills, and professional background. Built with pure HTML, CSS, and JavaScript.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Pages & Navigation](#pages--navigation)
- [Customization](#customization)
- [Browser Support](#browser-support)
- [Future Enhancements](#future-enhancements)
- [Contact](#contact)

---

## Overview

This is a frontend-focused portfolio website designed for a Full Stack Java Developer with expertise in Data Science using Python. The site includes:

- Professional introduction with profile section
- Detailed about page with skills and education
- Projects showcase with filtering capabilities
- Technical blog section
- Contact form with client-side validation
- Dark mode toggle for better user experience
- Responsive design for all devices

---

## Features

### Core Features

| Feature | Description |
|---------|-------------|
| **Responsive UI** | Built with CSS Flexbox and Grid, media queries for mobile/tablet/desktop |
| **Dark Mode** | Toggle between light and dark themes, preference saved in localStorage |
| **Project Filtering** | Filter projects by category (Full Stack Java / Data Science Python / Frontend) |
| **Form Validation** | Real-time validation on contact form with error messages |
| **Typing Animation** | Dynamic text animation on hero section |
| **Social Links** | Clickable icons for GitHub, LinkedIn, Twitter, and Email |
| **Blog Section** | Placeholder for technical articles |

### Bonus Features Implemented

- ✅ Dark Mode Toggle
- ✅ CSS Animations (scroll reveal, hover effects, typing animation)
- ✅ Form Validation with error handling
- ✅ Blog section for technical writing

---

## Tech Stack

### Frontend (Implemented)

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure and semantic markup |
| CSS3 | Styling, Flexbox, Grid, Animations |
| JavaScript | Interactivity, DOM manipulation, Form validation |
| Font Awesome | Icons for social links and UI elements |

### Backend (Optional - Can be added)

| Technology | Purpose |
|------------|---------|
| Java | Backend logic |
| Spring MVC | Web framework |
| JDBC | Database connectivity |
| MySQL | Data persistence |

> **Note:** The current implementation is frontend-only. The backend with Spring MVC can be integrated later to handle contact form submissions and dynamic project data.

---

## Project Structure

```
portfolio-website/
│
├── index.html              # Home page with hero section
├── about.html              # About page (skills, education, experience)
├── projects.html           # Projects showcase with filters
├── blog.html               # Technical blog articles
├── contact.html            # Contact form with validation
│
├── css/
│   └── style.css           # All styles (light/dark mode, responsive)
│
├── js/
│   └── main.js             # All JavaScript (dark mode, form validation, filters, animations)
│
├── assets/
│   └── images/
│       └── profile.jpg     # Profile picture (replace with your own)
│
└── README.md               # This file
```

---

## Installation & Setup

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari)
- Code editor (VS Code recommended for modifications)
- Basic knowledge of HTML/CSS/JS for customization

### Steps to Run Locally

1. **Clone or download** this repository

```bash
git clone https://github.com/gaganashrita/portfolio-website.git
```

2. **Navigate to the project folder**

```bash
cd portfolio-website
```

3. **Add your profile picture**

- Place your photo in `assets/images/profile.jpg`
- Supported formats: JPG, PNG
- Recommended size: 300x300 pixels

4. **Open with Live Server** (recommended)

   Using VS Code:
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

5. **Or open directly**

   - Double-click `index.html` to open in browser

### No Build Step Required

This is a vanilla HTML/CSS/JS project. No npm, webpack, or build tools needed.

---

## Pages & Navigation

### 1. Home Page (`index.html`)

- Profile picture with introduction
- Typing animation (Full Stack Java Developer → Data Science with Python → Spring Boot Enthusiast)
- Skills cloud with core technologies
- Featured projects preview
- Call-to-action buttons

### 2. About Page (`about.html`)

- Personal bio
- Education details (VTU BE in Computer Science)
- Technical skills with progress bars:
  - Java, Spring Boot, REST APIs
  - Python, Pandas, NumPy, Data Visualization
  - HTML/CSS/JS, MySQL, Git
- Certifications section

### 3. Projects Page (`projects.html`)

- Filter buttons: All / Full Stack (Java) / Data Science (Python) / Frontend
- Project cards with:
  - Project image placeholder
  - Description
  - Tech stack tags
  - GitHub repository link
- Projects included:
  - Online Bookstore (Spring MVC + JDBC)
  - Retail Sales Data Analysis (Python + Pandas)
  - Student Management REST API (Spring Boot)
  - Customer Segmentation (Scikit-learn)
  - Personal Portfolio Website (HTML/CSS/JS)

### 4. Blog Page (`blog.html`)

- List of technical blog posts
- Topics covered:
  - REST APIs with Spring Boot
  - Data Cleaning with Pandas
  - Spring MVC Architecture
  - Exploratory Data Analysis (EDA)
  - JDBC vs Hibernate

### 5. Contact Page (`contact.html`)

- Contact form with fields: Name, Email, Subject, Message
- Client-side validation:
  - Name (required, min 2 characters)
  - Email (valid format required)
  - Subject (required)
  - Message (required, min 10 characters)
- Success/error messages on submission
- Social contact information

---

## Customization

### Change Profile Picture

Replace `assets/images/profile.jpg` with your own image.

### Update Personal Information

Edit the following in `index.html`:

```html
<h1 class="greeting">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="bio">Your bio here...</p>
```

### Update Social Links

Modify the `href` attributes in `index.html`:

```html
<div class="social-links">
    <a href="YOUR_GITHUB_URL" target="_blank"><i class="fab fa-github"></i></a>
    <a href="YOUR_LINKEDIN_URL" target="_blank"><i class="fab fa-linkedin-in"></i></a>
</div>
```

### Change Color Theme

Edit the CSS variables in `css/style.css`:

```css
:root {
    --accent: #0d6efd;      /* Primary color */
    --accent-hover: #0b5ed7; /* Hover color */
    --bg-primary: #f8f9fa;   /* Background */
    --text-primary: #212529; /* Text color */
}
```

### Add New Projects

Copy an existing project card in `projects.html`:

```html
<div class="project-item" data-category="your-category">
    <div class="project-card-full">
        <img src="your-image.jpg" alt="Project Name">
        <div class="project-full-info">
            <h3>Project Title</h3>
            <p class="project-desc">Project description here.</p>
            <div class="tech-stack">
                <span>Tech1</span><span>Tech2</span>
            </div>
            <div class="project-links">
                <a href="#" class="btn-small">GitHub Repo</a>
            </div>
        </div>
    </div>
</div>
```

### Add New Blog Posts

Copy an existing article in `blog.html`:

```html
<article class="blog-post">
    <div class="blog-date">Month DD, YYYY</div>
    <h2>Your Article Title</h2>
    <p>Article excerpt goes here.</p>
    <a href="#" class="read-more">Read Full Article →</a>
</article>
```

---

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully supported |
| Firefox | 88+ | ✅ Fully supported |
| Safari | 14+ | ✅ Fully supported |
| Edge | 90+ | ✅ Fully supported |
| Opera | 75+ | ✅ Fully supported |
| Mobile Browsers | Latest | ✅ Responsive |

---

## Future Enhancements

- [ ] Backend integration with Spring MVC for contact form
- [ ] Database connection using JDBC to store project data
- [ ] User authentication for blog comments
- [ ] Admin panel to add/edit projects dynamically
- [ ] REST API endpoints for projects and blog posts
- [ ] Search functionality for projects and blog
- [ ] Downloadable resume button
- [ ] Newsletter subscription feature

---

## Backend Integration Guide (Spring MVC)

If you want to add backend functionality, here's a quick guide:

### API Endpoints to Implement

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/projects` | Fetch all projects |
| GET | `/api/projects/{id}` | Fetch single project |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/blog` | Fetch blog posts |

### Sample Spring Controller

```java
@RestController
@RequestMapping("/api/contact")
public class ContactController {
    
    @PostMapping
    public ResponseEntity<?> submitContact(@RequestBody ContactForm form) {
        // Save to database or send email
        return ResponseEntity.ok("Message received");
    }
}
```

---

## License

This project is open source and available under the MIT License.

---

## Contact

**Gaganashri TA**

- GitHub: [github.com/gaganashrita](https://github.com/gaganashrita)
- LinkedIn: [linkedin.com/in/gaganashrita](https://linkedin.com/in/gaganashrita)
- Email: gaganashri.ta@example.com

---

## Acknowledgments

- Font Awesome for icons
- Google Fonts (Segoe UI fallback)
- Placeholder images from via.placeholder.com

---

## Screenshots

### Home Page (Light Mode)
*Add screenshot here*

### Home Page (Dark Mode)
*Add screenshot here*

### Projects Page with Filters
*Add screenshot here*

### Contact Form Validation
*Add screenshot here*

---

## How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Known Issues

- Profile image placeholder uses randomuser.me if local image missing
- Project images use placeholder images (replace with actual screenshots)
- Blog links are placeholder (#) - add actual article URLs

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Dec 2024 | Initial release with all core features |

---

**Built with ❤️ using HTML, CSS, and JavaScript**
