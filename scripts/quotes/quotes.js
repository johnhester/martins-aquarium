const quoteConverter = (quoteObject) => {
    const quoteHTMLRepresentation = `
    <section class="quote sectionText">
        <div class="quote__image">
            <image class="quote__image--element" src="${quoteObject.image}" alt="${quoteObject.source}">
        </div>
        <div class="quote__text">
            "ALL HAIL JUTZ'KAR"<br>
            - <span class="quote__source">${quoteObject.source}</span>
        </div>
    </section>
    `
    return quoteHTMLRepresentation;
}