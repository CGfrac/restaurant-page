function createContact() {
    const mainDiv = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Want to tell us something?';

    const para = document.createElement('p');
    para.textContent = 'You can find us on Twitter!';

    mainDiv.append(title, para);

    return mainDiv;
}

export default createContact;
