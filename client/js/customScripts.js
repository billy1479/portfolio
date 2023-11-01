// Custom made scripts (not from template)

let pslide1 = 0;
let pslide2 = 0;
let pslide3 = 0;
let pslide4 = 0;
let pslide5 = 0;
let pslide6 = 0;


slideDict = {
    "p1": ["pslide1", pslide1],
    "p2": ["pslide2", pslide2],
    "p3": ["pslide3", pslide3],
    "p4": ["pslide4", pslide4],
    "p5": ["pslide5", pslide5],
    "p6": ["pslide6", pslide6],
}

function showSlide(x,type) {
    area = slideDict[type][0]
    let slides = document.getElementsByClassName(area)
    if (x >= slides.length) {
        slideDict[type][1] = 0
        x = slideDict[type][1]
    } else if (x < 0) {
        slideDict[type][1] = slides.length - 1
        x = slideDict[type][1]
    } else {
        slideDict[type][1] = x
    }
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    console.log("New image index is - " + x)
    slides[x].style.display = 'Block'
    slides[x].style.opacity = '1'
}

function changeSlide(x, type) {
    let index = slideDict[type][1]
    console.log("Current image index is " + index)
    showSlide(index += x, type)
}

function load() {
    showSlide(pslide1, "p1")
    showSlide(pslide2, 'p2')
    showSlide(pslide3, 'p3')
    showSlide(pslide4, 'p4')
    showSlide(pslide5, 'p5')
    showSlide(pslide6, 'p6')
}

document.addEventListener('DOMContentLoaded', load)
