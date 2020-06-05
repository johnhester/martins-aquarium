const tipConverter = (tipObject) => {
    const tipHTMLRepresentation = `
    <section class="tip sectionText getBig">${tipObject.tip}</section>
    `
    return tipHTMLRepresentation
}