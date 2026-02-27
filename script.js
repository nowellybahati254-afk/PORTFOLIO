// Select form
const form = document.getElementById("contact-form");

// Form submission event
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop page refresh

    const subject = document.getElementById("subject").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");


 
 $ ("#hamburger"). click(function(){
    $("nav-menu ul").toggleClass("show");

    // Simple validation
    if (subject === "" || email === "" || phone === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Message sent successfully!");

    // Clear form
    form.reset();
});
$(document).ready(function() {
    $("#contact-form").submit(function(e) {
        e.preventDefault(); // prevent form refresh
        alert("Form submitted using jQuery!");
    });
});
});