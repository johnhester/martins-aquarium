const quoteConverter = (quoteObject) => {
    const quoteHTMLRepresentation = `
    <section class="quote sectionText">
        "${quoteObject.quote}"
            - ${quoteObject.source}
    </section>
    `
    return quoteHTMLRepresentation;
}