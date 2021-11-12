//standaard staat de togglestatus van de van op false//
let toggleNavStatus = false;

//Deze functie zorgt ervoor dat de togglestatus verandert naar true of false indien er op de haburger icon wordt geklikt//
let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");

    if (toggleNavStatus === false) {
        getSidebar.style.visibility = "visible";
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.visibility = "hidden";
        toggleNavStatus = false;
    }
}

