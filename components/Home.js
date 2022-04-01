import { header } from './Header.js';
import {addCart} from './Cart.js';

function Home() {
    this.title = 'Home';
    
    const shopContainer = document.createElement('div');
    shopContainer.classList.add('shop__container');
    this.element = shopContainer;

    let data = [];

    const getData = async () => {
        return await fetch('https://fakestoreapi.com/products')
        .then(resp => {
            return resp.json();
        })
        .then(result => {
            localStorage.setItem('localData', JSON.stringify(result));
            return result;
        })
    }

    const render = async () => {
        let localData = localStorage.getItem('localData');
        if (localData && localData.length > 0) localData = JSON.parse(localData);

        data = localData || await getData();
        console.log(data);

        data.forEach((item) => {
            const itemElem = document.createElement('div');
            itemElem.classList.add('item');
    
            const imgItem = document.createElement('div');
            imgItem.classList.add('item__img');
            imgItem.style.backgroundImage = `url(${item.image})`;
    
            const titleItem = document.createElement('h3');
            titleItem.classList.add('title');
            const linkItem = document.createElement('a');
            linkItem.href = `#product/${item.id}`;
            linkItem.innerText = item.title;
            titleItem.append(linkItem);
    
            const priceItem = document.createElement('p');
            priceItem.classList.add('price');
            priceItem.innerText = `$ ${item.price}`;
    
            const buyButton = document.createElement('button');
            buyButton.classList.add('buy__button');
            buyButton.innerText = 'add';

            buyButton.addEventListener('click', () => {
                addCart(item.id)
            });
                
            itemElem.append(imgItem, titleItem, priceItem, buyButton);
            this.element.append(itemElem);  // shopContainer
        });   
    }

    this.element.innerHTML = `<h1>Catalog</h1>`;

    render();
}

const obj = new Home();

const elem = obj.element;
const title = obj.title;

export default elem;
export {title};
