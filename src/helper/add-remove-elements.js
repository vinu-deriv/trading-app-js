/**
 * insert the element in html text form
 * @param {string} querySelector query selector
 * @param {string} position possible values "afterbegin" "afterend" "beforebegin" "beforeend"
 * @param {string} html string value of html
 */
export const insertHtml = (querySelector, position, html) => {
  document.querySelector(querySelector).insertAdjacentHTML(position, html);
};

/**
 * remove the element whose selector matches
 * @param {string} querySelector query selector
 */
export const removeHtml = (querySelector) => {
  document.querySelector(querySelector).remove();
};

/**
 * replace an element with a new element under a parent reference
 * @param {string} parent_selector parent element reference
 * @param {HTMLNode} new_node new element to be replaced
 * @param {HTMLNode} old_node old element that will be replaced
 */
export const replaceHTML = (parent_selector, new_node, old_node) => {
  document.querySelector(parent_selector).replaceChild(new_node, old_node);
};
