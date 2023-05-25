let modal = document.querySelector('#toothModal');
let body = document.querySelector('body');
let btn = document.querySelector("#toothBtn");
let span = document.querySelector(".close");

btn.onclick = function () {
    modal.style.display = "block";
    body.classList.add("active");
}

span.onclick = function () {
    modal.style.display = "none";
    body.classList.remove("active");
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.classList.remove("active");
    }
}

function openModal() {
    if (modal.style.display === "block") {
        body.classList.add("active");
    }
}

function closeModal() {
    modal.style.display = "none";
    body.classList.remove("active"); // 
    body.style.overflow = "visible";
}