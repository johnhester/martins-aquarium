const quoteConverter = (quoteObject) => {
    const quoteHTMLRepresentation = `
    <section class="quote">
        "${quoteObject.quote}"
            - ${quoteObject.source}
    </section>
    `
    return quoteHTMLRepresentation;
}