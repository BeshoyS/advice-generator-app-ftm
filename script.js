const adviceID = document.querySelector("#adviceID");
const quote = document.querySelector("#quote");
const generateBtn = document.querySelector("#generateBtn");

function getRandomQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then(({ slip }) => {
      adviceID.textContent = "advice #" + slip.id;
      quote.textContent = slip.advice;
    })
    .catch((err) => console.log(err));
}

getRandomQuote();

generateBtn.addEventListener("click", getRandomQuote);
