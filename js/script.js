const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {
        if(input.value.trim() === ""){
            valid = false;
        }
    });

    if(valid){
        alert("Message sent successfully!");
        form.reset();
    }
    else{
        alert("Please fill all fields.");
    }

});



const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});





const links = document.querySelectorAll("#nav-links a");

links.forEach(link => {

    link.addEventListener("click", function(){

        links.forEach(item => item.classList.remove("active-link"));

        this.classList.add("active-link");

    });

});