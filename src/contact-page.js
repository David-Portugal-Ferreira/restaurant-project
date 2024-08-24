import './contact-page.css';

const wrapper = document.createElement('div');
wrapper.classList = 'wrapper-contact';

const header = document.createElement('div');
header.classList = 'header-contact';
const generalInformation = document.createElement('div');
generalInformation.classList = 'generalInfo-contact';

header.innerText = 'Contact Us';

const contacts = [
    {
        type: "Telephone",
        description: "+1 212-***-****"
    },
    {
        type: "Telephone",
        description: "+1 323-***-****"
    },
    {
        type: "Email",
        description: "placeholder@restaurantexemplo.com"
    },
];

contacts.map( contact => {
    const card = document.createElement('div');
    card.classList = 'card-contact';
    const h3 = document.createElement('h3');
    const description = document.createElement('p');
    description.classList = 'description-contact';

    h3.innerText = contact.type;
    description.innerText = contact.description;

    card.appendChild(h3);
    card.appendChild(description);

    wrapper.appendChild(card);
})

export { wrapper };