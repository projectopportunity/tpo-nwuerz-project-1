// initialize HTML as global variables
let textHtml;
let imageHtml;

// take in quote array as argument and return a random quote //
const getRandomQuote = (arr) => {
    const randomNum = Math.floor( Math.random() * arr.length );
    const randomQuote = arr[randomNum];
    return randomQuote;
};

// take in colors array as an argument and return a random background //
const getRandomBackground = (arr) => {
    const randomNum = Math.floor( Math.random() * arr.length );
    const randomBackground = arr[randomNum];
    return randomBackground;
};

// create and return html elements for a random quote //
const printQuote = () => {
    const { quote, source, citation, year, image } = getRandomQuote(quotes);

    textHtml = `
    <p class="quote">${quote}</p>
    <p class="source">${source}
    `
    if (citation != undefined) {
        textHtml += `<span class="citation">${citation}</span>`
    } else {
        textHtml += `</p>`;
    }

    if (year != undefined) {
        textHtml += `<span class="year">${year}</span>`
    } else {
        textHtml += `</p>`;
    }
    
    imageHtml = `
    <img id="image" src="${image}" alt="${source}"/>
    `

    return ( textHtml, imageHtml );
};

// update both the quote and background //
const updateQuote = () => {
    printQuote();
    let randomBackground = getRandomBackground(colors);
    document.getElementById('quote-box').innerHTML = textHtml;
    document.getElementById('image-box').innerHTML = imageHtml;
    document.body.style.background = randomBackground;
}

// refresh quote every 3 seconds //
const autoRefresh = () => {
    setInterval (() => {
        updateQuote();
    }, 6000);
}

// reresh quote when button is clicked //
const handleClick = () => {
    document.getElementById('load-quote').addEventListener("click", () => {
        updateQuote();
    });
}

// initialize application //
const init = () => {
    autoRefresh();
    handleClick();
}

init();