/* ==========================================
   TYPING ANIMATION
========================================== */

const typingText = document.getElementById("typing");

const words = [
    "AI & ML Undergraduate",
    "MERN Stack Developer",
    "Python Programmer",
    "Machine Learning Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect(){

    let currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }

    }

    else{

        typingText.textContent =
        currentWord.substring(0,charIndex--);


        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }


    setTimeout(typeEffect,
        deleting ? 60 : 120
    );

}


typeEffect();




/* ==========================================
   DARK / LIGHT MODE
========================================== */


const themeBtn =
document.getElementById("theme-toggle");


const themeIcon =
themeBtn.querySelector("i");



themeBtn.addEventListener("click",()=>{


    document.body.classList.toggle("light");


    if(document.body.classList.contains("light")){


        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");


        localStorage.setItem(
            "theme",
            "light"
        );


    }

    else{


        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");


        localStorage.setItem(
            "theme",
            "dark"
        );

    }


});



/* LOAD SAVED THEME */


if(localStorage.getItem("theme")==="light"){


    document.body.classList.add("light");


    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");


}




/* ==========================================
   MOBILE MENU
========================================== */


const menuBtn =
document.getElementById("menu-btn");


const menu =
document.getElementById("menu");



menuBtn.addEventListener("click",()=>{


    menu.classList.toggle("active");


    menuBtn.querySelector("i")
    .classList.toggle("fa-xmark");


});



/* CLOSE MENU AFTER CLICK */


document.querySelectorAll("#menu a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        menu.classList.remove("active");


        menuBtn.querySelector("i")
        .classList.remove("fa-xmark");


        menuBtn.querySelector("i")
        .classList.add("fa-bars");


    });


});




/* ==========================================
   SCROLL PROGRESS BAR
========================================== */


const progressBar =
document.getElementById("progress-bar");



window.addEventListener("scroll",()=>{


    let scrollTop =
    document.documentElement.scrollTop;


    let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;


    let percentage =
    (scrollTop / height) * 100;


    progressBar.style.width =
    percentage + "%";


});




/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */


const scrollBtn =
document.getElementById("scrollTop");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){

        scrollBtn.style.display="flex";

    }

    else{

        scrollBtn.style.display="none";

    }


});



scrollBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});





/* ==========================================
   REVEAL ON SCROLL ANIMATION
========================================== */


const revealElements =
document.querySelectorAll(
"section, .project-card, .skill-card, .timeline-item"
);



function reveal(){


    revealElements.forEach(element=>{


        let windowHeight =
        window.innerHeight;


        let elementTop =
        element.getBoundingClientRect()
        .top;


        let visiblePoint =
        120;


        if(elementTop <
        windowHeight-visiblePoint){


            element.classList.add("reveal");


            setTimeout(()=>{


                element.classList.add("active");


            },100);


        }


    });


}



window.addEventListener(
"scroll",
reveal
);


reveal();





/* ==========================================
   ACTIVE NAVIGATION HIGHLIGHT
========================================== */


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll("nav ul li a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        let sectionTop =
        section.offsetTop - 150;


        if(scrollY >= sectionTop){

            current =
            section.getAttribute("id");

        }


    });



    navLinks.forEach(link=>{


        link.style.color =
        "var(--white)";


        if(
        link.getAttribute("href")
        === "#" + current
        ){

            link.style.color =
            "var(--primary)";

        }


    });


});





/* ==========================================
   CONTACT FORM
========================================== */


const form =
document.querySelector("#contact form");



form.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(
    "Thank you for contacting me! I will get back to you soon."
    );


    form.reset();


});





/* ==========================================
   PROJECT CARD TILT EFFECT
========================================== */


const cards =
document.querySelectorAll(".project-card");



cards.forEach(card=>{


    card.addEventListener(
    "mousemove",
    (e)=>{


        let rect =
        card.getBoundingClientRect();


        let x =
        e.clientX - rect.left;


        let y =
        e.clientY - rect.top;


        let rotateX =
        (y - rect.height/2) / 20;


        let rotateY =
        (rect.width/2 - x) / 20;



        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        `;


    });



    card.addEventListener(
    "mouseleave",
    ()=>{


        card.style.transform =
        "";


    });


});




/* ==========================================
   CURRENT YEAR FOOTER
========================================== */


const year =
document.querySelector("footer p");


if(year){


    year.innerHTML =
    `© ${new Date().getFullYear()} Aryabi Bhattacharjee`;

}