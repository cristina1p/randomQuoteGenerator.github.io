const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");

// Random quote function
function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote..";
  // Fetching random quotes/data from the API and parsing it into JS object
  fetch("https://lucifer-quotes.vercel.app/api/quotes") // fetch, send a GET request to API
    .then((res) => res.json()) // Converts the response to JSON
    .then((res) => {
      console.log(res);
      quoteText.innerText = res[0].quote;
      authorName.innerText = res[0].author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });
}

quoteBtn.addEventListener("click", randomQuote);
