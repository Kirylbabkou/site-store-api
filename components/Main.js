class Main {
    constructor() {
        this.element;
    }
    create() {
        const appElement = document.createElement('main');
        appElement.classList.add('main');
        appElement.innerHTML = `
            <h1>Catalog</h1>
        `
        this.element = appElement;

        const routing = () => {
            console.log(location.hash);
            let name = location.hash;

            if (!name) name = 'home';
            else name = name.replace('#', '');
            
            if (name.indexOf('product') != -1) {
                name = 'product';
            }

            let cTime = Date.now();

            import(`./${name}.js?v=${cTime}`)
            .then(module => {
            this.element.innerHTML = '';
            console.log(module);
            this.element.append(module.default);
            
            document.title = module.title;
            });
        }

        window.addEventListener('hashchange', routing);

    // window.addEventListener('load', (event) => {
    //     const a = document.querySelectorAll('a[href="/"]');
    //     console.log(a);
        
    //     a.forEach(a => {
    //         a.addEventListener('click', (event) => {
    //             event.preventDefault();

    //             window.history.pushState("", "", "/");

    //             routing();
    //         })
    //     })
    // });

    routing();

    }

    init() {
        this.create();
        return this.element;
    }
}
const main = new Main().init();

export {main} 