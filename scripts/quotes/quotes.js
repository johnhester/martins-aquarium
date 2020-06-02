const quoteConverter = (quoteObject) => {
    const quoteHTMLRepresentation = `
    <section class="quote sectionText">
        "${quoteObject.quote}"<br>
            - <span class="quote__source">${quoteObject.source}</span>
    </section>
    `
    return quoteHTMLRepresentation;
}