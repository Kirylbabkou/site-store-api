import {cartWidget} from './Cart.js'

class Header {
    constructor() {
        this.element;
    }

    create() {
        const appHeader = document.createElement('header');
        appHeader.classList.add('header');

        const logoHeader = document.createElement('div');
        logoHeader.classList.add('logo');

        const headerLink = document.createElement('a');
        headerLink.href ='#home'
        logoHeader.append(headerLink);


        // const cartWidget = document.createElement('div');
        // cartWidget.classList.add('cart__widget');

        // const cartLink = document.createElement('a');
        // cartLink.href ='#cart'
        // cartWidget.append(cartLink);

        // const countCart = document.createElement('span');
        // countCart.innerText = '0';
        // cartWidget.append(countCart);


        appHeader.append(logoHeader, cartWidget)
        this.element = appHeader;
    }
    
    init() {
        this.create();
        return this.element;
    }
}
const header = new Header().init();

export {header}