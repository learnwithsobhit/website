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
  
  // Handle contact form submission and send a Telegram message
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Get form field values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const userMessage = document.getElementById("message").value;
      
      // Construct the message text
      const message = `New contact form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${userMessage}`;
      
      // Replace these with your actual Telegram bot token and chat ID
      const token = '7534728507:AAFE4wWG_92Wd3j2fEemAUZCMF5Blz_f8vc';
      const chatId = '988894843';
      
      // Send a POST request to Telegram API
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log("Telegram response:", data);
        alert("Thank you for contacting us!");
        contactForm.reset();
      })
      .catch(error => {
        console.error("Error sending Telegram message:", error);
        alert("Error sending your message. Please try again later.");
      });
    });
  }
  
  // Back to Top button functionality
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
  
  backToTopBtn.addEventListener("click", function(){
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
