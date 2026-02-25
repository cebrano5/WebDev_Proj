// ------------------------------
// Page Navigation Handler
// ------------------------------

// Map buttons or elements to pages
const pageRoutes = {
  "homeBtn": "index.html",
  "aboutBtn": "about.html",
  "projectsBtn": "projects.html",
  "contactBtn": "contact.html",
  "learnMoreBtn": "about.html"  // Example: hero "Learn More" button
};

// Add click events to navigate
Object.keys(pageRoutes).forEach(id => {
  const btn = document.getElementById(id);
  if(btn) {
    btn.addEventListener("click", () => {
      window.location.href = pageRoutes[id];
    });
  }
});

// ------------------------------
// Navbar Active Link Highlight
// ------------------------------
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  if(link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// ------------------------------
// Contact Form Submission
// ------------------------------
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if(contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    formMessage.textContent = "Thank you! Your message has been sent.";
    formMessage.style.color = "green";
    contactForm.reset();
  });
}

// ------------------------------
// Optional: Fade-In Animation on Scroll
// ------------------------------
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));