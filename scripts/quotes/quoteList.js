const quoteList = () => {

    for (const currentQuoteObject of quoteCollection) {
        const quoteHTML = quoteConverter(currentQuoteObject)
        //variable is re-declared with each iteration to clean it out
    
       const quoteArticleElement = document.querySelector(".quoteList")
        //find correct <article> element in index.html

       quoteArticleElement.innerHTML += quoteHTML
    }      

}