document.querySelectorAll('a').forEach(link=>{

link.addEventListener('click',function(e){

if(this.hash !== ''){

e.preventDefault();

document.querySelector(this.hash)
.scrollIntoView({
behavior:'smooth'
});

}

});

});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});