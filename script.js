// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Dark Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.id = "dark-toggle";
toggleBtn.innerText = "🌙 Dark Mode";
toggleBtn.classList.add("dark-toggle-btn");
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.innerText = document.body.classList.contains("dark-mode") ? "🌞 Light Mode" : "🌙 Dark Mode";
});


  document.getElementById("downloadCertBtn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "webdevApnaCol.pdf"; // replace with your actual file URL
    link.download = "webdevApnaCol.pdf"; // name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // Download Vector Institute Certificate
  document.getElementById("downloadVectorCertBtn").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "vectorCer.pdf"; // Vector Institute certificate
    link.download = "vectorCer.pdf"; // name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });



// Contact Form Validation
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

    // Simple front-end validation
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      e.preventDefault();
      alert("Please fill in all the fields.");
      return;
    }
    
    // Let Formspree handle the submission natively
    // No need to prevent default or use fetch
  });
}



