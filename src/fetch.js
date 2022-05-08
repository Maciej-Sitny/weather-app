export {getData}

async function getData(city) {
    try {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dfe9b43a511d4c4c11ba9a79451454d2`)
    let data = await response.json();
    return data;}
    catch {
        error=>console.log(error)
    };
}

