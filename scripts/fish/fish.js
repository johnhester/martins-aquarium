const fishConverter = (fishObject) => {
    if(fishObject.length % 3 === 0) {
        const fishHTMLRepresentation = `
        <section class="fish holy getBig">
            <h3 class="sectionTitle">${fishObject.name}</h3>
            <h3 class="sectionTitle">V Holy 🙇‍♀️😇🙇‍♂️</h3>
            <div class="">
                <img class="fish__picture" src="${fishObject.image}"
                    alt="${fishObject.name} the ${fishObject.species}" />
            </div>
            <div class="fish__details sectionText">
                <ul>
                    <li>Species: ${fishObject.species}</li>
                    <li>Length: ${fishObject.length}</li>
                    <li>Location: ${fishObject.location}</li>
                    <li>Food: ${fishObject.food}</li>
                </ul>
            </div>
        </section>
        `
        return fishHTMLRepresentation;

    } else if (fishObject.length % 5 === 0) {
        const fishHTMLRepresentation = `
        <section class="fish beefy getBig">
            <h3 class="sectionTitle beefy__deets">${fishObject.name}</h3>
            <h3 class="sectionTitle beefy__deets">Beef Skwad 💪</h3>
            <div class="">
                <img class="fish__picture" src="${fishObject.image}"
                    alt="${fishObject.name} the ${fishObject.species}" />
            </div>
            <div class="fish__details  sectionText">
                <ul class="beefy__deets">
                    <li>Species: ${fishObject.species}</li>
                    <li>Length: ${fishObject.length}</li>
                    <li>Location: ${fishObject.location}</li>
                    <li>Food: ${fishObject.food}</li>
                </ul>
            </div>
        </section>
        `
        return fishHTMLRepresentation;

    } else {
        const fishHTMLRepresentation = `
        <section class="fish getBig">
            <h3 class="sectionTitle">${fishObject.name}</h3>
            <h3 class="sectionTitle">Pleb 💩</h3>
            <div class="">
                <img class="fish__picture" src="${fishObject.image}"
                    alt="${fishObject.name} the ${fishObject.species}" />
            </div>
            <div class="fish__details sectionText">
                <ul>
                    <li>Species: ${fishObject.species}</li>
                    <li>Length: ${fishObject.length}</li>
                    <li>Location: ${fishObject.location}</li>
                    <li>Food: ${fishObject.food}</li>
                </ul>
            </div>
        </section>
        `
        return fishHTMLRepresentation;
    }
}