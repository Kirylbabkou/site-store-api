import { header } from './Header.js';
import { nav } from './Nav.js';
import { main } from './Main.js';
import { footer } from './Footer.js';

class App {
    constructor(){
        this.app
    }
    create() {
        const appElement = document.createElement('div');
        appElement.classList.add('app');
        this.app = appElement;
    }

    render() {
        const body = document.querySelector('body');
        body.prepend(this.app);
        this.app.append(header, nav, main, footer);
    }

    init() {

        function renderHead() {
            const htmlElem = document.querySelector('html');
            htmlElem.setAttribute('lang', 'en');
    
            const head = document.querySelector('head');
    
            const metaUTF = document.createElement('meta');
            metaUTF.setAttribute('charset', 'UTF-8');
    
            const metaVP = document.createElement('meta');
            metaVP.name = 'viewport';
            metaVP.content = 'width=device-width, initial-scale=1.0';
    
            const linkCSS = document.createElement('link');
            linkCSS.rel = 'stylesheet';
            linkCSS.href = '/css/style.css';
    
            head.append(metaUTF, metaVP, linkCSS);
        };

        renderHead();
        
        this.create();
        this.render();
        
    };

}

export default new App().init();