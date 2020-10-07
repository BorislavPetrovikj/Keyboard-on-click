
let btn = document.querySelectorAll(".button");
let paragraph = document.querySelector("p");



btn.forEach(function (el) {
    el.addEventListener("click", function (e) {
        if (e.target.textContent == "Space") {
            paragraph.textContent += " "
        }
        else {
            paragraph.textContent += `${e.target.textContent.toLowerCase()}`
        }

    });
});









