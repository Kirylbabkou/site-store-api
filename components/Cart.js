function Cart() {
    this.title = 'Cart';

    this.element = document.createElement('div');
    this.element.classList.add('page');

    this.element.innerHTML = `
    <h1>Cart</h1>
    `;
}

function CartWidget() {
    this.element = document.createElement('div');
    this.element.classList.add('cart__widget');

    let localCart = localStorage.getItem('localCart');
    if (localCart && localCart.length > 0) localCart = JSON.parse(localCart);

    const count = (localCart && localCart.length > 0) ? localCart.length : 0;

    this.element.innerHTML = `
        <a href="#cart"></a>
        <span>${count}</span>
    `
}

function addCart(id) {
    if (!id || isNaN(id)) return;

    let localCart = localStorage.getItem('localCart');
    if (localCart && localCart.length > 0) localCart = JSON.parse(localCart);

    const cart = localCart || [];
    cart.push(id);

    localStorage.setItem('localCart', JSON.stringify(cart));

    const countCart = document.querySelector('.cart__widget span');

    if (!cartWidget) return;
    countCart.innerHTML = cart.length;

}

const obj = new Cart();

const elem = obj.element;
const title = obj.title;

const widget = new CartWidget();
const cartWidget = widget.element;

export default elem;
export {title, addCart, cartWidget};