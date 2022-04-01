import {addCart} from './Cart.js';

function Product() {
    this.title = 'Product';

    this.element = document.createElement('div');
    this.element.classList.add('product__container');

    let id = location.hash;
    id = id.split('/');
    id = parseInt(id.pop());

    let localData = localStorage.getItem('localData');
    if (localData && localData.length > 0) localData = JSON.parse(localData);

    let productData = null;

    if(localData) {
        productData = localData.find(product => {
            return product.id == id;
        });
    }
    console.log(productData);

    this.element.innerHTML = `
    <h1>${productData.title}</h1>
    `;

    const itemElem = document.createElement('div');
    itemElem.classList.add('product__item');

    const imgItem = document.createElement('div');
    imgItem.classList.add('product__item__img');
    imgItem.style.backgroundImage = `url(${productData.image})`;

    const informBlock = document.createElement('div');
    informBlock.classList.add('product__inform');

    // const titleItem = document.createElement('h3');
    // titleItem.classList.add('title');

    // titleItem.innerText = productData.title;

    const categoryItem = document.createElement('p');
    categoryItem.classList.add('category');
    categoryItem.innerText = productData.category;

    const priceItem = document.createElement('p');
    priceItem.classList.add('product__price');
    priceItem.innerText = productData.price +'$';

    const descriptionItem = document.createElement('p');
    descriptionItem.classList.add('product__description');
    descriptionItem.innerText = productData.description;

    const buyButton = document.createElement('button');
    buyButton.classList.add('buy__button');
    buyButton.innerText = 'add to cart';

    buyButton.addEventListener('click', () => {
        addCart(productData.id)
    });

    informBlock.append(
        // titleItem,
        categoryItem,
        descriptionItem,
        priceItem,
        buyButton
    );
    itemElem.append(imgItem, informBlock);
    this.element.append(itemElem);


}

const obj = new Product();

const elem = obj.element;
const title = obj.title;

export default elem;
export {title};


