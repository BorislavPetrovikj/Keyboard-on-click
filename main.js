
let btn = document.querySelectorAll(".button");

let paragraph = document.querySelector("p")


btn.forEach(element => {
    element.addEventListener("click", onclick)

    function onclick() {
        if (element.textContent == "Space") {
            paragraph.innerHTML += " "
        }
        else {
            paragraph.innerHTML += `${element.textContent.toLowerCase()}`
        }
    }
});










