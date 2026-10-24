# ISO229 Assessment 4 - Technical Project Summary
**Student Name:** Leonard Waho  
**Student ID:** 25576776  
**Course:** ISO229 Web Design  
**Assessment:** Assessment 4 - Individual Integrated Web Design Project  
**Topic:** Vanimo Surf Lodge & Annual Surf Competition Website  

---

### 1. Website Purpose
The primary purpose of the website is to promote eco-friendly beachfront accommodation at Vanimo Surf Lodge in Lido Village, West Sepik (Sandaun) Province, Papua New Guinea, while serving as an information and registration hub for the Annual Vanimo Surf Pro competition.

### 2. Target Audience
The target audience encompasses domestic PNG surfers, expatriate residents based in PNG cities like Port Moresby and Lae seeking weekend surfing getaways, and international surf adventurers exploring tropical reef breaks across Sandaun Province.

### 3. Main Website Features
The website is structured into three connected pages (`index.html`, `services.html`, `contact.html`) built with semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<fieldset>`, `<footer>`). Layouts utilize CSS Grid for card grids and Flexbox for navigation header alignments, supported by responsive CSS media queries across mobile, tablet, and desktop viewports.

### 4. JavaScript Functionality Implemented
Two custom JavaScript features were implemented:
- **Feature 1 (Accessible Mobile Navigation Toggle):** An event listener toggles navigation list visibility on mobile viewports (<768px) and updates the `aria-expanded` attribute dynamically for screen-reader accessibility.
- **Feature 2A (Interactive Trip Cost Calculator):** An interactive rate calculator on `services.html` computes live pricing estimates in Papua New Guinea Kina (PGK) based on selected package tiers, stay duration, guest count, and add-on rentals/transfers.
- **Feature 2B (Form Validation Engine):** Client-side validation on `contact.html` validates input formatting (email regex, required fields), highlights errors (`.input-error`), and renders live feedback alerts.

### 5. Testing Performed
Testing was executed across five primary dimensions:
- **Functional:** Verified all page navigation links, calculator price calculations, and form submission states.
- **Responsive:** Inspected layouts on mobile (320px–480px), tablet (768px), and desktop (1024px+) viewports.
- **Cross-Browser:** Verified functionality in Google Chrome and Mozilla Firefox.
- **Validation:** Checked HTML5 markup and CSS syntax using W3C markup validators.
- **Accessibility:** Verified visible `:focus` outlines, image `alt` tags, associated form `<label>`s, and ARIA state attributes.

### 6. Known Limitations or Future Improvements
Future enhancements could integrate a live wave swell forecast widget for the Lido Break and backend database integration for real-time room availability.

### 7. AI Use Declaration
Generative AI was used as a technical verification and instructional tool to confirm standard web practices, including HTML5 semantic structure, CSS Grid syntax, media query breakpoints, vanilla JavaScript DOM event listeners, ARIA attribute bindings, and form validation regex patterns. All code was reviewed, tested, and integrated independently.