
// Responsible for generating a list of fish HTML representations, and putting it in the browser 

//least concise

// Function to show holy fish in the browser
// const showHolyFish = () => {
//     const holyObjArray = mostHolyFish()    

//     for (const fishObject of holyObjArray) {
//         const holyHTMLRepresentation = fishConverter(fishObject)
//         const holyArticle = document.querySelector(".fishList")
//         holyArticle.innerHTML += holyHTMLRepresentation
//     }
// }

// // Function to show soldier fish in the browser
// const showSoldierFish = () => {
//     const beefyObjArray = soldierFish()

//     for (const fishObject of beefyObjArray) {
//         const beefyHTMLRepresentation = fishConverter(fishObject)
//         const beefyArticle = document.querySelector(".fishList")
//         beefyArticle.innerHTML += beefyHTMLRepresentation
//     }
// }

// // Function to show common fish in the browser
// const showCommonFish = () => {
//     const commonObjArray = nonHolyFish();
    
//     for (const fishObject of commonObjArray) {
//         const commonHTMLRepresentation = fishConverter(fishObject)
//         const commonArticle = document.querySelector(".fishList")
//         commonArticle.innerHTML += commonHTMLRepresentation
//     }
// }


//more concise
const showFish = (fish) => {
    for (const currentFish of fish) {
        const fishHTML = fishConverter(currentFish)
        document.querySelector(".fishList").innerHTML += fishHTML
    }
}

//most concise
// const showFish = fish => fish.forEach(fishObj => document.querySelector('.fishList').innerHTML += fishConverter(fishObj))


const fishList = () => {  
    showFish(fishOrderDeterminator());
}