import { getState } from './utils';
import { increment, decrement } from './navigate';
import { cacheDOM, buildSildes, renderSlider } from './core-slider';
import { setConfig, animate, pauseSlider } from './animate';

/**
 * Factory function used to create a new slider object.
 * @param  {Array} imageArray [And array of image source paths]
 * @param  {String} container  [The container Div's Id number]
 * @return {Object}            [A new Slider Object]
 */
const slider = (imageArray, container) => {
  let state = {
    imageArray: imageArray,
    container: document.getElementById(container),
    count: 0,
    numSlides: imageArray.length -1,
    show: (count, slides) => slides[count].style.opacity = '1',
    hide: (count, slides) => slides[count].style.opacity = '0'
  }
  return Object.assign(
    {},
    buildSildes(state),
    cacheDOM(state),
    increment(state),
    decrement(state),
    renderSlider(state),
    getState(state)
  )
}

const animatedSlider = (imageArray, container) => {
  let state = {
    imageArray: imageArray,
    container: document.getElementById(container),
    count: 0,
    numSlides: imageArray.length -1,
    show: (count, slides) => slides[count].style.opacity = '1',
    hide: (count, slides) => slides[count].style.opacity = '0'
  }
  return Object.assign(
    {},
    buildSildes(state),
    cacheDOM(state),
    increment(state),
    decrement(state),
    renderSlider(state),
    getState(state),
    setConfig(state),
    pauseSlider(state),
    animate(state)
  )
}

const sliderWithNav = (imageArray, container) => {
  let Slider = slider(imageArray, container);
  Slider.build();
  Slider.render();
  Slider.cacheDOM();
  return {
    next: Slider.next,
    previous: Slider.previous
  }
}

const animatedSliderWrapper = (imageArray, container) => {
  let Slider = animatedSlider(imageArray, container);
  Slider.build();
  Slider.render();
  Slider.cacheDOM();
  Slider.animationSetting(1000,3000);
  return {
    animate: Slider.animate
  }
}


let images = [
  'photos/photo1.jpeg',
  'photos/photo2.jpeg',
  'photos/photo3.jpeg'
];

let images2 = [
  'photos/photo4.jpeg',
  'photos/photo5.jpeg',
  'photos/photo6.jpeg'
];

document.addEventListener('DOMContentLoaded', function(){
  // let mySlider = sliderWithNav(images,'slider');
  let myAnimatedSlider = animatedSliderWrapper(images2,'another-slider');
  myAnimatedSlider.animate();

  // let next = document.getElementById('next');
  // let previous = document.getElementById('previous');
  //
  // next.addEventListener('click', function(){
  //   mySlider.next();
  // });
  // previous.addEventListener('click', function(){
  //   mySlider.previous();
  // });



});
