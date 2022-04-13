const   btnAPI = document.querySelector('.advice__button'),
        adviceText = document.querySelector('.advice__text--p'),
        adviceNum = document.querySelector('.advice__number');

btnAPI.addEventListener('click', (e) => {
    const id = randomNum();
    const url = `https://api.adviceslip.com/advice/${id}`;

    fetch(url)
        .then( response => response.json() )
        .then( advice => drawAdvice(advice) )
        .catch( error => console.log(error.message) )
})

function drawAdvice(quote) {
    const { slip } = quote;
    const { id, advice } = slip;

    adviceNum.textContent = id;
    adviceText.textContent = `"${advice}"` ;
}

function randomNum() {
    return parseInt(Math.random() * 224);
}