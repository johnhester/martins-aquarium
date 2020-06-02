const locationConverter = (locationObject) => {
    const locationHTMLRepresentation = `<section class="location">
        <h3 class="location__header sectionTitle">${locationObject.name}</h4>
        <div class="">
            <img class="location__picture" src="${locationObject.image}"
                                alt="${locationObject.name}" />
        </div>
        <div class="location__details sectionText">
            ${locationObject.description}
        </div>
    </section>`
    return locationHTMLRepresentation
}