const locationConverter = (locationObject) => {
    const locationHTMLRepresentation = `<section class="location">
        <h4>${locationObject.name}</h4>
        <div class="">
            <img class="location__picture" src="${locationObject.image}"
                                alt="${locationObject.name}" />
        </div>
        <div class="location__details">
            ${locationObject.description}
        </div>
    </section>`
    return locationHTMLRepresentation
}