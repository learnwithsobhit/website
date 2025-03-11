document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
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
        e.preventDefault();
        alert("Thank you for contacting us!");
        contactForm.reset();
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
  