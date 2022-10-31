function scrollAnimations() {
    var navElem = document.querySelector("nav");

    // Fixed nav pull down
    if (window.scrollY > 500) {
        navElem.classList.add("fixed-nav");
    } else {
        navElem.classList.remove("fixed-nav");
    }

    // Image fly in/out
    var figureElem = document.querySelector("#about-section figure");

    if (window.scrollY > 550) {
        figureElem.classList.add("active");
    } else {
        figureElem.classList.remove("active");
    }

    // Skill bars fill in/out
    var bar25 = document.getElementsByClassName("skill-bar-fill 25p");
    var bar50 = document.getElementsByClassName("skill-bar-fill 50p");
    var bar75 = document.getElementsByClassName("skill-bar-fill 75p");

    if (window.scrollY > 1300) {
        for (let i = 0; i < bar25.length; i++) {
            const element = bar25[i];
            element.classList.add("fill-25");
        }

        for (let j = 0; j < bar50.length; j++) {
            const element = bar50[j];
            element.classList.add("fill-50");
        }

        for (let k = 0; k < bar75.length; k++) {
            const element = bar75[k];
            element.classList.add("fill-75");
        }
    } else {
        for (let i = 0; i < bar25.length; i++) {
            const element = bar25[i];
            element.classList.remove("fill-25");
        }

        for (let j = 0; j < bar50.length; j++) {
            const element = bar50[j];
            element.classList.remove("fill-50");
        }

        for (let k = 0; k < bar75.length; k++) {
            const element = bar75[k];
            element.classList.remove("fill-75");
        }
    }
}

window.addEventListener("scroll", scrollAnimations);