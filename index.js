import { createImage } from './Utils';

/**
 * Function searches the DOM and caches all slide elements.
 * Function also initializes the slider counter variable based on slide count.
 * @param  {object} state [Main Slider State Object]
 */
const cacheDOM = (state) => ({
  cacheDOM: () => {
    state.slides = document.getElementsByClassName( 'slide' );
  }
});

/**
 * Function updates the slider count by one. Also calls Show and hide
 * functions to actually move from slide to slide.
 * @param  {Object} state The sliders state object.
 * @return {Object}       Returns an updated state object.
 */
const increment = (state) => ({
  next: () => {
    state.hide(state.count, state.slides);
    state.count++;
    if ( state.count > state.numSlides ) {
      state.count = 0;
    }
    state.show(state.count, state.slides);
  }
});

/**
 * Function substracts one from the sliders count. Also calls Show and hide
 * functions to actually move from slide to slide.
 * @param  {Object} state The sliders state object.
 * @return {Object}       Returns an updated state object.
 */
const decrement = (state) => ({
  previous: () => {
    state.hide(state.count, state.slides);
    state.count--;
    if ( state.count < 0 ) {
      state.count = state.numSlides;
    }
    state.show(state.count, state.slides);
  }
})

/**
 * Function loops through the user supplied images array, and created
 * an image element for each image.
 * @param  {Object} state [Main slider state object]
 * @return {Array}       [Returns an array of DOM Image Elements]
 */
const buildSildes = (state) => ({
  build: () => {
    state.images = state.imageArray.map(function(image){
      return createImage(image);
    });
  }
});

/**
 * Function loops through image created in the buildSildes method,
 * and appends each element to the user supplied container DIv.
 * @param  {Object} state [Main slider state object]
 */
const renderSlider = (state) => ({
  render: () => {
    state.images.forEach(function(image){
      state.container.appendChild(image)
    });
  }
});

/**
 * Helper function used for development to see the internal state of
 * the slider object.
 * @param  {Object} state [Main slider state object]
 * @return {Object}       [Returns the sliders main state object.]
 */
const getState = (state) => ({
  getState: () => state
});

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

let images = [
  'photos/photo1.jpeg',
  'photos/photo2.jpeg',
  'photos/photo3.jpeg',
  'photos/photo4.jpeg',
  'photos/photo5.jpeg',
  'photos/photo6.jpeg'
];


const sliderWithNav = (imageArray, container) => {
  let sliderWithNav = slider(imageArray, container);
  sliderWithNav.build();
  sliderWithNav.render();
  sliderWithNav.cacheDOM();
  return {
    next: sliderWithNav.next,
    previous: sliderWithNav.previous
  }
}
document.addEventListener('DOMContentLoaded', function(){
  let mySlider = sliderWithNav(images,'slider');
  let next = document.getElementById('next');
  let previous = document.getElementById('previous');
  next.addEventListener('click', function(){
    mySlider.next();
  });
  previous.addEventListener('click', function(){
    mySlider.previous();
  });

});
