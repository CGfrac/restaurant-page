import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

const content = document.getElementById('content');

const nav = document.createElement('nav');
const list = document.createElement('ul');

function clearPage() {
    while (content.lastElementChild !== nav) {
        content.removeChild(content.lastElementChild);
    }
}

function updateNav(button) {
    const className = 'active-tab';
    const previousButton = document.querySelector('.active-tab');
    previousButton.classList.remove(className);
    button.classList.add(className);
}

function updatePage(e) {
    const button = e.target;

    clearPage();

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
    updateNav(button);
}

function createListElement(content) {
    const listElement = document.createElement('li');
    listElement.textContent = content;
    return listElement;
}

const tabNames = ['Home', 'Menu', 'Contact'];

for (const tabName of tabNames) {
    const listElement = createListElement(tabName);
    if (tabName === 'Home') {
        listElement.classList.add('active-tab');
    } else if (tabName === 'Menu') {
        listElement.classList.add('middle-tab');
    }
    listElement.addEventListener('click', updatePage);
    list.appendChild(listElement);
}

nav.appendChild(list);
content.appendChild(nav);

content.appendChild(createHome());
