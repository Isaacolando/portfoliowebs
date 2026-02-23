window.addEventListener("scroll", function(){
    document.querySelectorAll(".card").forEach(card => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if(position < screenHeight - 100){
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});
document.addEventListener("DOMContentLoaded", function(){

    const elements = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.6s ease";
        observer.observe(el);
    });

});
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

if(toggle){
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}