const locationList = () => {
    
    for (const currentLocationObject of locationCollection) {
        const locationHTML = locationConverter(currentLocationObject)
        //variable is re-declared with each iteration to clean it out
    
       const locationArticleElement = document.querySelector(".locationList")
        //find correct <article> element in index.html

       locationArticleElement.innerHTML += locationHTML
    }      

}


// locationList toggle 

const locationVisibilityButton = document.querySelector(".toggleLocations")

locationVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".bigLocationBox").classList.toggle("hidden")
})

