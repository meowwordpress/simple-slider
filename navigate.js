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
});

export { increment, decrement }
