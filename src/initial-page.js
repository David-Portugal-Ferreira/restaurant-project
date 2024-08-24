import './initial-page.css'
import restaurantImage from './restaurant-symbol.png'

const wrapper = document.createElement('div');
wrapper.classList = 'wrapper';

const header = document.createElement('div');
header.classList = 'header';
const generalInformation = document.createElement('div');
generalInformation.classList = 'generalInfo';

const h2 = document.createElement('h2');
const image = document.createElement('img');
image.classList = 'restuarant-image';
const infoCard = document.createElement('div');
infoCard.classList = 'infoCard';
const infoCardPhara = document.createElement('p');

h2.innerText = 'Information';
header.appendChild(h2);

image.src = restaurantImage;
infoCardPhara.innerText = 'True Traditional Portuguese Food';
infoCard.appendChild(image);
infoCard.appendChild(infoCardPhara);

generalInformation.appendChild(header);
generalInformation.appendChild(infoCard);

wrapper.appendChild(generalInformation);

export { wrapper };