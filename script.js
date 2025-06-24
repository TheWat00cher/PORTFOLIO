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



// Contact Form Validation
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // always prevent default first

    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');

    // Simple front-end validation
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert("Please fill in all the fields.");
      return;
    }

    // Proceed to submit via fetch
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        window.location.href = "thank-you.html"; // ✅ redirect on success
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    })
    .catch(error => {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    });
  });
}



