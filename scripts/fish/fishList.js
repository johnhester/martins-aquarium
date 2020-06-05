
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


//fish selector:

const contentTarget = document.querySelector(".fishList")

const fishTypeDropdown = document.querySelector(".typeChoice")

const clearFishList = () => contentTarget.innerHTML = ""

fishTypeDropdown.addEventListener("change", clickEvent => {
    // Get the value of the option chosen by the user
    const userChoice = clickEvent.target.value
    let newData = [];
    // If the user chose Holy, clear the list and only show holy fish
    
    switch (userChoice) {
        case 'holy':
            clearFishList();
            newData = fishOrderDeterminator(userChoice)  
            showFish(newData);                    
            break;
        case 'soldier':
            clearFishList();
            showFish(fishOrderDeterminator(userChoice))
            break;
        case 'plebs':
            clearFishList();
            showFish(fishOrderDeterminator(userChoice))
            break;
        case 'all':
            clearFishList();
            showFish(fishOrderDeterminator(userChoice))           
            break;
    }


 
})


//fish section toggle
const fishVisibilityButton = document.querySelector(".toggleFish")

fishVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".bigFishBox").classList.toggle("hidden")
})
