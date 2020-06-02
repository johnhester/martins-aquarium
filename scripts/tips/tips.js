const tipConverter = (tipObject) => {
    const tipHTMLRepresentation = `
    <section class="tip sectionText">${tipObject.tip}</section>
    `
    return tipHTMLRepresentation
}