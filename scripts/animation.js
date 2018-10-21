document.addEventListener("DOMContentLoaded", function(){
    var clickMenuElement = document.querySelector(".menu-clicker");
    var navigationBar = document.querySelector(".navigation");
    
    
    console.log(navigationBar.getAttribute("Class"));
    function animateNavBar() {
        if (!navigationBar.classList.contains("animation-hide") && !navigationBar.classList.contains("animation-showUp")) {
            // if no animations class then add sw
            navigationBar.classList.add("animation-showUp");
            console.log(navigationBar.getAttribute("Class"));
        } else if (navigationBar.classList.contains("animation-hide")) {
            navigationBar.classList.remove("animation-hide");
            navigationBar.classList.add("animation-showUp");
            console.log(navigationBar.getAttribute("Class"));
        } else if (navigationBar.classList.contains("animation-showUp")) {
            navigationBar.classList.remove("animation-showUp");
            navigationBar.classList.add("animation-hide");
            console.log(navigationBar.getAttribute("Class"));
        }

    }

    clickMenuElement.addEventListener("click", animateNavBar);

})




