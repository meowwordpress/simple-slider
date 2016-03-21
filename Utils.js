/**
 * Function creates an image element from the input src string. It also
 * wraps the image in a div tag with class="slide"
 * @param  {string} src The source attribute for the requested image.
 * @return {Element}     A DOM Element
 */
export function createImage(src) {
  let wrapperDiv = document.createElement('div');
  wrapperDiv.setAttribute('Class', 'slide');

  let tempImage = document.createElement('img');
  tempImage.setAttribute('src', src);

  wrapperDiv.appendChild(tempImage);
  return wrapperDiv;
}
