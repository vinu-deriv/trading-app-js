/**
 * insert the element in html text form
 * @param {string} querySelector query selector
 * @param {string} position possible values "afterbegin" "afterend" "beforebegin" "beforeend"
 * @param {string} html string value of html
 */
export const insertHtml = (querySelector, position, html) => {
  document.querySelector(querySelector).insertAdjacentHTML(position, html);
};

export const removeHtml = (querySelector) => {
    // TO BE IMPLEMENTED
}
