class Nav {
    constructor() {
        this.element;
    }

    create() {
        const navElement = document.createElement('nav');
        navElement.classList.add('nav');
        const navList = document.createElement('ul');
        navList.classList.add('nav__list');

        const navItem = document.createElement('li');
        navItem.classList.add('nav__item');
        const navItem1 = document.createElement('li');
        navItem1.classList.add('nav__item');
        const navItem2 = document.createElement('li');
        navItem2.classList.add('nav__item');

        const navLink = document.createElement('a');
        navLink.href = "#home"
        navLink.innerText = 'Home'
        const navLink1 = document.createElement('a');
        navLink1.href = '#cart'
        navLink1.innerText = 'Cart'
        const navLink2 = document.createElement('a');
        navLink2.href = '#contacts'
        navLink2.innerText = 'Contacts'

        navItem.append(navLink)
        navItem1.append(navLink1)
        navItem2.append(navLink2)
        navList.append(navItem,navItem1,navItem2)
        navElement.append(navList)

        this.element = navElement;
    }

    init() {
        this.create();
        return this.element;
    }
}
const nav = new Nav().init();

export { nav };