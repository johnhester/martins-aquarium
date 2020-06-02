
// Responsible for generating a list of fish HTML representations, and putting it in the browser 

const fishList = () => {

    for (const currentFishObject of fishCollection) {
        const fishHTML = fishConverter(currentFishObject)
        //variable is re-declared with each iteration to clean it out
    
       const fishArticleElement = document.querySelector(".fishList")
        //find correct <article> element in index.html

       fishArticleElement.innerHTML += fishHTML
    }      

}

