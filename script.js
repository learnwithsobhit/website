document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
    
    // Handle contact form submission
    const contactForm = document.querySelector("form");
    if (contactForm) {
      contactForm.addEventListener("submit", function(e) {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        e.preventDefault();
        
        // Send Telegram notification
        fetch('/.netlify/functions/send-telegram', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message })
        });
        contactForm.reset();
        alert("Thank you for contacting us!");
      });
    }
    
    // Back to Top button functionality
    const backToTopBtn = document.getElementById("backToTop");
    window.addEventListener("scroll", function() {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
    
    backToTopBtn.addEventListener("click", function(){
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  