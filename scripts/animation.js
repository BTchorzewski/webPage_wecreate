(function(){
    document.addEventListener("DOMContentLoaded", function(){
        var navigation__icon = document.querySelector(".navigation");
        var navigation__link = document.querySelectorAll(".navigation__link");
        var navigation__icon__line = document.querySelectorAll('.navigation__icon-line')

        console.table(navigation__link[0].getAttribute('class'));
        function animated__navigation() {
            if(navigation__link[0].classList.contains('navigation__link--active') == false && navigation__link[0].classList.contains('navigation__link--unactive') == false) {
                
                navigation__link.forEach(function(el) {
                    el.classList.add('navigation__link--active');
                });
                // burger menu below;
                navigation__icon__line.forEach(function(el) {
                    el.classList.add('navigation__icon-line--active')
                });

                console.table(navigation__link[0].getAttribute('class'));
            } 
            else if(navigation__link[0].classList.contains('navigation__link--active')) {
                navigation__link.forEach(function(el){
                    el.classList.replace('navigation__link--active', 'navigation__link--unactive');
                });

                navigation__icon__line.forEach(function(el) {
                    el.classList.replace('navigation__icon-line--active', 'navigation__icon-line--unactive')
                });
                console.table(navigation__link[0].getAttribute('class'));
            } 
            else if(navigation__link[0].classList.contains('navigation__link--unactive')) {
                navigation__link.forEach(function(el){
                    el.classList.replace('navigation__link--unactive', 'navigation__link--active');
                });

                navigation__icon__line.forEach(function(el) {
                    el.classList.replace('navigation__icon-line--unactive', 'navigation__icon-line--active')
                });
                console.table(navigation__link[0].getAttribute('class'));
            }
        }
        navigation__icon.addEventListener("click", animated__navigation);
        
    });
}());



