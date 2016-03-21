import {increment} from './navigate';
const setConfig = (state) => ({
    animationSetting: (speed, delay) => {
      state.animationSpeed = speed,
      state.delay = delay
    }
});

const animate = (state) => ({
    animate: () => {
      state.interval = setInterval(function(){
        console.log('I am animating!');
        state.hide(state.count, state.slides);
        state.count++;
        if ( state.count > state.numSlides ) {
          state.count = 0;
        }
        state.show(state.count, state.slides);
      }, state.delay);
    }
});
const pauseSlider = (state) => ({
    pause: () => clearInterval( state.interval )
});

// var animateSlider = function(previous) {
//     showSlide( currentslide );
//     hideSlide( previous );
//     updateSlideCounter( currentslide );
// }
// var restartSlider = function(previous) {
//     hideSlide( previous );
//     currentslide = 0;
//     showSlide( currentslide );
//     updateSlideCounter( currentslide );
// }
export { setConfig, animate, pauseSlider }
