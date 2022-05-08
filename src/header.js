export {createHeader}

function createHeader() {
    let body = document.querySelector('body');
    let headerDiv = document.createElement('div');
    headerDiv.classList.add('headerDiv')
    let headerTitle = document.createElement('h1');
    headerTitle.classList.add('headerTitle');
    headerTitle.innerText = "Check the weather";
    body.appendChild(headerDiv);
    headerDiv.appendChild(headerTitle);
}