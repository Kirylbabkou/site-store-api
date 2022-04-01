class Footer {
    constructor() {
        this.element;
    }
    create() {
        const appElement = document.createElement('footer');
        appElement.classList.add('footer');
        appElement.innerHTML = `
        <div class="footer__logo"></div>
        <div id="#contacts" class="footer__contacts">
            <div class="address">New York City</div>
            <div class="phone">+375</div>
            <div class="email">info@exemple.com</div>
        </div>`;
        this.element = appElement;
    }
    
    init() {
        this.create();
        return this.element;
    }
}
const footer = new Footer().init();

export {footer}