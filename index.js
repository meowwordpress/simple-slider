import { createImage } from './Utils';

/**
 * Function searches the DOM and caches all slide elements.
 * Function also initializes the slider counter variable based on slide count.
 * @param  {object} state [Main Slider State Object]
 */
const cacheDOM = (state) => ({
  cacheDOM: () => {
    state.slides = document.getElementsByClassName( 'slide' );
    state.slideCount = state.slides.length;
  }
});

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
    })
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
  }
  return Object.assign(
    {},
    buildSildes(state),
    cacheDOM(state),
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

document.addEventListener('DOMContentLoaded', function(){
  let mySlider = slider(images,'slider');
  mySlider.build();

  mySlider.render();
  mySlider.cacheDOM();
  console.log(mySlider.getState());
});
