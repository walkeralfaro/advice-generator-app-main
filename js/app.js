const   btnAPI = document.querySelector('.advice__button'),
        adviceText = document.querySelector('.advice__text--p'),
        adviceNum = document.querySelector('.advice__number');

window.onload = function() {
    getAdvice();
}

btnAPI.addEventListener('click', function() {
    getAdvice();
})

function getAdvice() {
    const id = randomNum();
    const url = `https://api.adviceslip.com/advice/${id}`;

    fetch(url)
        .then( response => response.json() )
        .then( adviceData => drawAdvice(adviceData.slip) )
        .catch( error => console.log(error.message) )
}

function drawAdvice(phrase) {
    const { id, advice } = phrase;

    adviceNum.textContent = id;
    adviceText.textContent = `"${advice}"` ;
}

function randomNum() {
    return parseInt(Math.random() * 224);
}