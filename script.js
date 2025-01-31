// Code for sliding images of second section 
let slides = document.getElementsByClassName("slide");
let navLinks = document.getElementsByClassName("dot");
let curr = 0;

function changeSlide(moveTo){
    if(moveTo >= slides.length){
        moveTo = 0;
    }
    if(moveTo < 0){
        moveTo = slides.length - 1;
    }
    slides[curr].classList.toggle("active");
    navLinks[curr].classList.toggle("activeDot");
    slides[moveTo].classList.toggle("active");
    navLinks[moveTo].classList.toggle("activeDot");
    curr = moveTo;
}

document.querySelectorAll(".dot").forEach((bullet, bulletIndex) => {
    bullet.addEventListener("click", () =>{
        if(curr != bulletIndex){
            changeSlide(bulletIndex);
        }
    });
});

window.onload = setInterval(function(){
    changeSlide(curr+1)
}, 4000);

// Code for sliding images of third section 
let third_Slides = document.getElementsByClassName("third_sliders");
let third_dots = document.getElementsByClassName("third_dot");
let index = 0;

function change(i){
    if(i >= third_Slides.length){
        i = 0;
    }
    if(i < 0){
        i = third_Slides.length - 1;
    }
    third_Slides[index].classList.toggle("third_active");
    third_dots[index].classList.toggle("third_activeDot");
    third_Slides[i].classList.toggle("third_active");
    third_dots[i].classList.toggle("third_activeDot");
    index = i;
}

document.querySelectorAll(".third_dot").forEach((points, pointsIndex) => {
    points.addEventListener("click", () =>{
        if(index != pointsIndex){
            changeSlide(pointsIndex);
        }
    });
});

window.onload = setInterval(function(){
    change(index+1)
}, 5000);

// Code for sliding images of fourth section
let fourth_Slides = document.getElementsByClassName("fourth_slides");
let fourth_dots = document.getElementsByClassName("fourth_dot");
let ind = 0;

function changeS(j){
    if(j >= fourth_Slides.length){
        j = 0;
    }
    if(j < 0){
        j = fourth_Slides.length - 1;
    }
    fourth_Slides[ind].classList.toggle("fourth_active");
    fourth_dots[ind].classList.toggle("fouth_activeDot");
    fourth_Slides[j].classList.toggle("fourth_active");
    fourth_dots[j].classList.toggle("fouth_activeDot");
    ind = j;
}

document.querySelectorAll(".fourth_dots").forEach((point, pointIndex) => {
    point.addEventListener("click", () =>{
        if(ind != pointIndex){
            changeSlide(pointIndex);
        }
    });
});

window.onload = setInterval(function(){
    changeS(ind+1)
}, 4000);
