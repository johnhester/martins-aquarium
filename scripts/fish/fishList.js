
// Responsible for generating a list of fish HTML representations, and putting it in the browser 


//less concise
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
