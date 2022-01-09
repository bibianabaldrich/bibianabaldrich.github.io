const containermodo = document.getElementById("container-modo");
const containermodoicon = document.getElementById("container-modo-icon");

containermodo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (containermodoicon.src.includes("luna.svg")) {
        containermodoicon.src = "assets/images/sol.svg";
    } else {
        containermodoicon.src = "assets/images/luna.svg";
    }


})