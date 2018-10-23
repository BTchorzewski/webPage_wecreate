document.addEventListener("DOMContentLoaded", function(){
    var clickMenuElement = document.querySelector(".menu-clicker");
    var navigationBar = document.querySelector(".column-menu");
    
    
    console.log(navigationBar.style);

    function animateNavBar() {
        navigationBar.style.width = '100%';
        
    }

    clickMenuElement.addEventListener("click", animateNavBar);

});




