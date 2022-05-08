import { getData } from "./fetch";
import { displayData } from "./info";
import { removeSomething } from "./remove";
export {createSearch}


function createSearch() {
    const body = document.querySelector('body');

    let searchDiv = document.createElement('div');
    searchDiv.classList.add('searchDiv');
    // let searchForm = document.createElement('form');
    // searchForm.classList.add('searchForm');
    let cityInput = document.createElement('input');
    cityInput.classList.add('cityInput');
    cityInput.placeholder = "City";
    let citySubmit = document.createElement('button');
    citySubmit.classList.add('citySubmit');
    citySubmit.innerText = 'Check';

    // searchForm.appendChild(cityInput);
    // searchForm.appendChild(citySubmit);
    let currentCity;
    citySubmit.addEventListener('click', async ()=>{
        if (cityInput.value === '' || cityInput.value=="Enter something!") {
            cityInput.value = 'Enter something!'
        }
        else {
        currentCity = cityInput.value;
        // cityInput.value='';
        console.log(currentCity)
        let data = await getData(currentCity);
        console.log(data);
        removeSomething('.dataDiv')
        removeSomething('.gifImg')
        displayData(data);
        }
    })

    searchDiv.appendChild(cityInput);
    searchDiv.appendChild(citySubmit);
    // searchDiv.appendChild(searchForm);
    body.appendChild(searchDiv);
}