const form = document.querySelector(".fale-conosco");
const background = document.querySelector(".mascara-form");

function showForm() {
    document.querySelector(".fale-conosco").style.left = "50%";
    document.querySelector(".fale-conosco").style.transform =
        "translate(-50%, -50%)";

    document.querySelector(".mascara-form").style.visibility = "visible";
    document.querySelector(".mascara-form").style.opacity = "1";
}

function hideForm() {
    document.querySelector(".fale-conosco").style.left = "-350px";

    document.querySelector(".mascara-form").style.opacity = "0";

    setTimeout(() => {
        document.querySelector(".mascara-form").style.visibility = "hidden";
    }, 500);
}

function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active");
}

