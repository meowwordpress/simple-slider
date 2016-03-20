
var slider = function() {
    var slider, 
    slideContainer, 
    slides, 
    slideWidth, 
    animationSpeed, 
    delay, 
    currentslide, 
    counter, 
    counterLength,
    internal;

    var init = function() {
        cacheDOM();
        setConfig();
        startSlider();
        updateSlideCounter(currentslide);
        slider.addEventListener( "mouseenter", pauseSlider );
        slider.addEventListener( "mouseleave", function() {
            var previous = currentslide;
            currentslide++;
            animateSlider(previous);
            startSlider();
        } );
    }

    var cacheDOM = function() {
        slider = document.getElementById( 'slider' );
        slideContainer = slider.querySelector('.slides');
        slides = document.getElementsByClassName( 'slide' );
        counter = document.getElementById( 'slider-count' );
        counterLength = slides.length;
    }

    var setConfig = function() {
        animationSpeed = 1000;
        delay = 3000;
        currentslide = 0;
    }

    var startSlider = function() {
        interval = setInterval(function(){
            var previous = currentslide;
            currentslide++;
            
            if ( currentslide  === counterLength ) {
                restartSlider(previous);
            } else {
                animateSlider(previous);
            }
                
            
        }, delay);
    }
    var pauseSlider = function() {
        clearInterval( interval );
    }
    var animateSlider = function(previous) {
        showSlide( currentslide );
        hideSlide( previous );
        updateSlideCounter( currentslide );
    }
    var restartSlider = function(previous) {
        hideSlide( previous );
        currentslide = 0;
        showSlide( currentslide );
        updateSlideCounter( currentslide );
    }
    var showSlide = function(element) {
        // slides[element].style.visibility = 'visible';
        slides[element].style.opacity = '1';
    }
    var hideSlide = function(element) {
        // slides[element - 1].style.visibility = 'hidden';
        slides[element].style.opacity = '0';
    }
    var updateSlideCounter = function(count) {
        var count = count + 1;
        counter.innerText = count + ' of ' + counterLength;
    }
    return {
        init : init,
        pauseSlider : pauseSlider,
        animateSlider : animateSlider
    }
}

window.onload = function() {
    var newSlider = slider();
    newSlider.init();
}




    

    

    
