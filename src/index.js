import { wrapper as homeWrapper } from './initial-page';
import { wrapper as menuWrapper } from './menu-page';
import { wrapper as contactWrapper } from './contact-page';

import './index.css'

const divContent = document.querySelector('#content');
divContent.appendChild(homeWrapper);

const [homeBtn, menuBtn, contactBtn] = document.querySelectorAll('nav button');

menuBtn.addEventListener('click', () => {
    divContent.replaceChildren();
    divContent.appendChild(menuWrapper);
});

homeBtn.addEventListener('click', () => {
    divContent.replaceChildren();
    divContent.appendChild(homeWrapper);
});

contactBtn.addEventListener('click', () => {
    divContent.replaceChildren();
    divContent.appendChild(contactWrapper);
})