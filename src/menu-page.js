import './menu-page.css';
import bacalhauBras from './bacalhau-a-bras.jpg';
import caldoVerde from './caldo-verde.jpg';
import francesinha from './francesinha.jpg';
import arrozPato from './arroz-de-pato.jpeg';
import cozidoPortuguesa from './cozido-a-portuguesa.jpg';

const wrapper = document.createElement('div');
wrapper.classList = 'wrapper-menu';

const header = document.createElement('div');
header.classList = 'header-menu';
const generalInformation = document.createElement('div');
generalInformation.classList = 'generalInfo-menu';

const receitasPortuguesas = [
    {
        title: "Bacalhau à Brás",
        description: "Bacalhau à Brás is a traditional Portuguese dish made with shredded codfish, matchstick potatoes, onions, scrambled eggs, and black olives. It is one of the most popular bacalhau recipes in Portugal, known for its simplicity and flavor.",
        image: bacalhauBras,
        price: "$18.00"
    },
    {
        title: "Caldo Verde",
        description: "Caldo Verde is a traditional soup from northern Portugal, made with collard greens, potatoes, onions, and chorizo. It is typically served with slices of cornbread and is a comforting dish often associated with celebrations and popular festivities.",
        image: caldoVerde,
        price: "$12.00"
    },
    {
        title: "Francesinha",
        description: "Francesinha is a typical sandwich from Porto, consisting of various meats such as linguiça, fresh sausage, ham, and steak, topped with melted cheese and drenched in a tomato and beer sauce. It is usually served with french fries and a fried egg on top.",
        image: francesinha,
        price: "$22.00"
    },
    {
        title: "Arroz de Pato",
        description: "Arroz de Pato is a traditional Portuguese dish made with duck cooked and shredded, mixed with rice, and often finished in the oven with a crispy chorizo topping. It is a rich and flavorful dish, perfect for special occasions.",
        image: arrozPato,
        price: "$25.00"
    },
    {
        title: "Cozido à Portuguesa",
        description: "Cozido à Portuguesa is a traditional dish consisting of a variety of meats (pork, beef, chicken), sausages, and vegetables (cabbage, carrots, potatoes), all slowly cooked together. It is a hearty and flavorful meal, often prepared on festive days.",
        image: cozidoPortuguesa,
        price: "$30.00"
    }
];


receitasPortuguesas.map(receita => {
    const card = document.createElement('div');
    card.classList = 'card-menu';
    const h3 = document.createElement('h3');
    const description = document.createElement('p');
    description.classList = 'description-menu';
    const image = document.createElement('img');
    image.classList = 'image-menu'
    const price = document.createElement('span');
    price.classList = 'price-menu';

    h3.innerText = receita.title;
    description.innerText = receita.description;
    price.innerText = receita.price;
    image.src = receita.image;

    card.appendChild(h3);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(image);

    wrapper.appendChild(card);
})

export { wrapper };