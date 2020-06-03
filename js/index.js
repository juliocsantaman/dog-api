const search = document.getElementById('search');
let url;
//Parent container.
const container = document.getElementById('container');

function fetchSearch() {
  createUrl();
  fetch(url, {cache: "no-store"})
  .then( (response) => response.json() )
  .then( (data) => showImages(data) );
}

function createUrl() {
  const breed = document.getElementById('breed').value.toLowerCase();
  
  url = `https://dog.ceo/api/breed/${breed}/images`;
}

function showImages(data) {
  console.log(data);

  const images = data.message;
  const imageContainer = document.createElement('div');
  imageContainer.setAttribute('class', 'image-container');

  images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    imageContainer.appendChild(img);
  });

  container.appendChild(imageContainer);

}

function deleteImageContainer() {
  const imageContainer = document.querySelector('.image-container');
  if (imageContainer != null) {
    imageContainer.remove();
  }
  
}

search.addEventListener('click', deleteImageContainer);
search.addEventListener('click', fetchSearch);