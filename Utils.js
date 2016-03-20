export function createImage(src) {
  let wrapperDiv = document.createElement('div');
  wrapperDiv.setAttribute('Class', 'slide');

  let tempImage = document.createElement('img');
  tempImage.setAttribute('src', src);

  wrapperDiv.appendChild(tempImage);
  return wrapperDiv;
}
