// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact Form Alert
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Message sent successfully!");
        form.reset();
    });
}
