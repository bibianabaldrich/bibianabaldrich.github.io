

function darkmode() {
    var element = document.body;
    element.classList.toggle("dark");
    const containermodoicon = document.getElementById('container-modo-icono');
//    containermodoicon.classList.toggle('far fa-moon');
    if(document.body.className != "dark"){
        containermodoicon.src = 'assets/images/sol.svg';
    }else{
        containermodoicon.src = 'assets/images/luna.svg';
    }
}