import Home from './home.jpg';

function createMenu() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('main-content');

    const title = document.createElement('h1');
    title.textContent = 'Super cool restaurant';
    mainDiv.appendChild(title);

    const image = new Image();
    image.src = Home;
    image.alt = 'Table with dishes';
    mainDiv.appendChild(image);

    const para = document.createElement('p');
    para.textContent = 'Our restaurant is so cool everyone eats there!';
    mainDiv.appendChild(para);

    return mainDiv;
}

export default createMenu;
