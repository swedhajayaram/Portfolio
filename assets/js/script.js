const nav = document.getElementById("navLinks");
const atag = document.getElementById("a-tag");

function toggleMenu() {
    if(nav.style.visibility === "hidden"){
        nav.style.visibility = "visible"
        atag.style.visibility = "visible"
    } else {
        nav.style.visibility = "hidden"
        atag.style.visibility = "hidden"
    }
    console.log("OK")
}

// Basic form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message!");
    this.reset();
});