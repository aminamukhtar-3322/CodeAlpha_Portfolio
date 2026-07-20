// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (menuBtn.classList.contains("fa-bars")) {
        menuBtn.classList.remove("fa-bars");
        menuBtn.classList.add("fa-times");
    } else {
        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");
    }
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("fa-times");
        menuBtn.classList.add("fa-bars");

    });

});


// ===========================
// DARK MODE
// ===========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");

    } else {

        themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");

    }

});


// ===========================
// TYPING EFFECT
// ===========================

const words = [

    "Frontend Developer",
    "Web Designer",
    "JavaScript Learner",
    "Problem Solver"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    let currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
    }
    else {

        typing.textContent = currentWord.substring(0, charIndex--);

    }

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;

        setTimeout(typeEffect, 1200);

        return;

    }

    if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex++;

        if (wordIndex === words.length)
            wordIndex = 0;

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


// ===========================
// ACTIVE NAVIGATION
// ===========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===========================
// HEADER SHADOW
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});


// ===========================
// SCROLL REVEAL
// ===========================

const revealElements = document.querySelectorAll(

".hero, .about, .skills, .projects, .contact"

);

function revealOnScroll() {

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
