import Menu from './menu.json';

function createMenu() {
    const mainDiv = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Our stuff';
    mainDiv.appendChild(title);

    for (const type in Menu) {
        const typeTitle = document.createElement('h2');
        typeTitle.textContent = type;
        mainDiv.appendChild(typeTitle);

        for (const item of Menu[type]) {
            const name = document.createElement('h3');
            name.textContent = item.name;

            const description = document.createElement('p');
            description.textContent = item.description;

            mainDiv.append(name, description);
        }
    }

    return mainDiv;
}

export default createMenu;
