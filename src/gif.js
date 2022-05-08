export {getGif};

async function getGif(tag) {
    let response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=uiqjId3wpm5FTTcbmGAa9HLFW88YFEK4&tag=${tag}&rating=g`)
    let data = await response.json();
    console.log(data);

    let gifImg = document.createElement('img');
    gifImg.classList.add('gifImg');
    gifImg.src = data.data.images.original.url;
    document.querySelector('body').appendChild(gifImg);
}