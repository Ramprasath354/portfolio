// JavaScript for Ramprasath Portfolio
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu?.addEventListener('click', () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  menu?.classList.remove('bx-x');
  navbar?.classList.remove('active');
});

// ScrollReveal Animations
const sr = ScrollReveal({
  distance: '40px',
  duration: 1000,
  delay: 100,
  reset: true
});

sr.reveal('.home-text', { origin: 'bottom' });
sr.reveal('.about, .skills, .portfolio, .experience, .achievement, .contact', { origin: 'bottom', interval: 200 });

// Enhanced Footer Injection
const footer = document.createElement('footer');
footer.style.backgroundColor = '#12141c';
footer.style.color = '#bbb';
footer.style.textAlign = 'center';
footer.style.padding = '30px 10px';
footer.style.fontSize = '14px';
footer.style.borderTop = '1px solid #333';
footer.innerHTML = `
  <div style="margin-bottom: 10px;">
    <a href="https://www.linkedin.com/in/ramprasath-k-g-52261133b" target="_blank" style="margin: 0 10px; color: #eb4a4a;"><i class='bx bxl-linkedin'></i></a>
    <a href="https://github.com/Ramprasath354" target="_blank" style="margin: 0 10px; color: #eb4a4a;"><i class='bx bxl-github'></i></a>
    <a href="mailto:kg.ramprasath@gmail.com" style="margin: 0 10px; color: #eb4a4a;"><i class='bx bx-envelope'></i></a>
  </div>
  <p>&copy; 2025 Ramprasath K G. All rights reserved.</p>
`;
document.body.appendChild(footer);

