const tipList = () => {
    
    for (currentTipObject of tipCollection) {
        const tipHTML = tipConverter(currentTipObject);
        const tipArticleElement = document.querySelector(".tipList");
        tipArticleElement.innerHTML += tipHTML;
    }

}

const tipVisibilityButton = document.querySelector(".toggleTips")

tipVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".bigTipBox").classList.toggle("hidden")
})