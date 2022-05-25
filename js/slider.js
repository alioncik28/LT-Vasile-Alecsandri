// variabila let
let index = 0;

function slider() {
    // strangerea elementelor (slaidurilor) dupa clasa
    let slides = document.getElementsByClassName("slide");

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    slides[index].style.display = "block"
    index++;
    if (index >= slides.length) {
        index = 0;
    }
}

// pentru a apela functia de mai sus
slider();
setInterval(slider, 4000);
