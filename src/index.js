import createMenu from './home.js';

const content = document.getElementById('content');

const nav = document.createElement('nav');
const list = document.createElement('ul');

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
    list.appendChild(listElement);
}

nav.appendChild(list);
content.appendChild(nav);

content.appendChild(createMenu());
