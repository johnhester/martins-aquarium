const quoteList = () => {

    for (const currentQuoteObject of quoteCollection) {
        const quoteHTML = quoteConverter(currentQuoteObject)
        //variable is re-declared with each iteration to clean it out
    
       const quoteArticleElement = document.querySelector(".quoteList")
        //find correct <article> element in index.html

       quoteArticleElement.innerHTML += quoteHTML
    }      

}

//quote visibilty toggle

const quoteVisibilityButton = document.querySelector(".toggleQuotes")


// slow transition
// quoteVisibilityButton.addEventListener("click", clickEvent => {
//     document.querySelector(".bigQuoteBox").style.transition = "all .5s ease"
// })

//applies hidden class
quoteVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".bigQuoteBox").style.transition = "all .5s ease"
    document.querySelector(".bigQuoteBox").classList.toggle("hidden")
    
})

