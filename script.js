// Main button navigation
const pageRoutes = {
  homeBtn: "index.html",
  aboutBtn: "about.html",
  aboutBtn2: "about.html",
  projectsBtn: "projects.html",
  projectsBtn2: "projects.html",
  contactBtn: "contact.html",
  learnMoreBtn: "about.html"
};

Object.keys(pageRoutes).forEach(id => {
  const btn = document.getElementById(id);
  if(btn) {
    btn.addEventListener("click", () => {
      window.location.href = pageRoutes[id];
    });
  }
});

// Footer button navigation
const footerRoutes = {
  homeBtnFooter: "index.html",
  aboutBtnFooter: "about.html",
  projectsBtnFooter: "projects.html",
  contactBtnFooter: "contact.html"
};

Object.keys(footerRoutes).forEach(id => {
  const btn = document.getElementById(id);
  if(btn) {
    btn.addEventListener("click", () => {
      window.location.href = footerRoutes[id];
    });
  }
});

// Contact form submission
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

// Fade-in animation
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