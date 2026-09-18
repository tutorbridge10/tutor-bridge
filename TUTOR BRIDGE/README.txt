TutorBridge Addis — Normal CSS Website with Shared Components

This version uses normal/custom CSS only (no Tailwind).

Shared site components:
- header.html — shared top bar, navigation, language selector and CTA buttons
- footer.html — shared footer, quick links, social icons and contact details
- components.js — loads header.html and footer.html into every page

Pages:
- index.html
- how-it-works.html
- subjects.html
- about.html
- contact.html
- terms.html
- privacy.html

How the shared components work:
Each page contains <div id="site-header"></div> and <div id="site-footer"></div>, then loads components.js. The loader fetches the shared HTML files and inserts them into the page.

Important:
Because the components are loaded with fetch(), test the website through a web server/hosting environment (for example localhost, GitHub Pages, Netlify, or normal web hosting), rather than opening the HTML files directly with file://.

Customization:
- Edit header.html once to change navigation/header across all pages.
- Edit footer.html once to change footer/social/contact content across all pages.
- Edit style.css for site-wide styling.
- Replace Google Form URLs in the page scripts with your real forms.
- Replace social-media # links in footer.html with your official profiles.
- Replace the supplied/reference photos with authorized TutorBridge Addis Ethiopian student/tutor photos when available.


HEADER / FOOTER MANAGEMENT
--------------------------
Edit header.html to change the shared header/navigation.
Edit footer.html to change the shared footer/social/contact area.
components.js loads those files on every page. It also contains a local-file fallback so the header/footer still appear when opening an HTML file directly. When hosted on a web server, the current header.html and footer.html files are fetched automatically.
