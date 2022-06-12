import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

const displayController = (() => {
    const content = document.getElementById('content');

    const _clearPage = () => {
        const nav = document.querySelector('nav');
        while (content.lastElementChild !== nav) {
            content.removeChild(content.lastElementChild);
        }
    };

    const _updateNav = button => {
        const className = 'active-tab';
        const previousButton = document.querySelector('.active-tab');
        previousButton.classList.remove(className);
        button.classList.add(className);
    };

    const _updatePage = e => {
        const button = e.target;

        _clearPage();

        const tabName = button.textContent;

        let page;
        switch(tabName) {
            case 'Home':
                page = createHome;
                break;
            case 'Menu':
                page = createMenu;
                break;
            case 'Contact':
                page = createContact;
        }

        content.appendChild(page());
        _updateNav(button);
    };

    const _createListElement = content => {
        const listElement = document.createElement('li');
        listElement.textContent = content;
        return listElement;
    }

    const generatePage = () => {
        const nav = document.createElement('nav');
        const list = document.createElement('ul');
        const tabNames = ['Home', 'Menu', 'Contact'];

        for (const tabName of tabNames) {
            const listElement = _createListElement(tabName);
            if (tabName === 'Home') {
                listElement.classList.add('active-tab');
            } else if (tabName === 'Menu') {
                listElement.classList.add('middle-tab');
            }
            listElement.addEventListener('click', _updatePage);
            list.appendChild(listElement);
        }

        nav.appendChild(list);
        content.appendChild(nav);

        content.appendChild(createHome());
    };

    return {
        generatePage,
    };
})();

displayController.generatePage();
