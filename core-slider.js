import { createImage } from './utils';
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

export { cacheDOM, buildSildes, renderSlider }
