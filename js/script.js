let html;

const getRandomQuote = (arr) => {
    const lowNum = arr[0] + 1;
    const highNum = arr.length;

    const randomNum = Math.floor( Math.random() * (highNum - lowNum + 1) ) + lowNum;
    console.log(randomNum);
};

getRandomQuote(quotes);


// click event listener for the print quote button

// document.getElementById('load-quote').addEventListener("click", printQuote, false);


    // for (let i = 0; i < arr.length; i++) {
    //     let quoteObj = arr[i];
    //     let { quote, source, citation, year } = quoteObj;
    //     html += `
    //     <div id="quote-box" class="quote-box">
    //         <p class="quote">${quote}</p>
    //         <p class="source">${source}<span class="citation">${citation != undefined ? citation : ''}</span><span class="year">${year != undefined ? year : ''}</span></p>
    //     </div>
    //     `
    // }