let fishCollection = []



const getFishData = () => {
    return fetch("http://localhost:8088/fish").then(
        (httpResponse) => {
            
            return httpResponse.json()
        }
    )
        .then(
            (arrayOfFish) => {
                // 100 percent sure the data is back
                fishCollection = arrayOfFish
            }
        )
}


const fishOrderDeterminator = () => {
    const holy = []
    const soldier = []
    const plebians =[]

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holy.push(fish)
        } else if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldier.push(fish)
        } else {
            plebians.push(fish)
        }
    }

    const orderedFish = holy.concat(soldier, plebians)
    return orderedFish
}





