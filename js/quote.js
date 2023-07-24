const quotes = [
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      text: "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln"
    }
  ];
  
  let currentQuoteIndex = 0;
  
  const quoteTextElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const leftArrowElement = document.querySelector(".arrow-left");
  const rightArrowElement = document.querySelector(".arrow-right");
  
  function displayQuote() {
    const quote = quotes[currentQuoteIndex];
    quoteTextElement.textContent = quote.text;
    authorElement.textContent = quote.author;
  }
  
  function showNextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    displayQuote();
  }
  
  function showPreviousQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    displayQuote();
  }
  
  leftArrowElement.addEventListener("click", showPreviousQuote);
  rightArrowElement.addEventListener("click", showNextQuote);
  
  // Display initial quote
  displayQuote();
  