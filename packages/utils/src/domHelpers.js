export const getParsedDomDataFromId = (id, dataAtrr) => {
  const attrData = getDomDataFromId(id, dataAtrr)
  const parsed = JSON.parse(attrData)

  return parsed
}

export const getDomDataFromId = (id, dataAtrr) => {
  const element = document.getElementById(id)

  if (! element) {
    return null
  }

  const attrData = element.getAttribute(dataAtrr)

  return attrData
}

export const forEachSelector = (selector, callback) => {
  var elements = document.querySelectorAll(selector);

  Array.prototype.forEach.call(elements, callback);
}

export const domReady = callback => {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

export const removeClass = (target, className, index = 0) => {
  let el = document.querySelectorAll(target)

  if (el.length === 0) {
    console.warn('Trying to remove class from non-existing element:', target)

    return null
  }

  el = el[index]

  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

export default {
  getParsedDomDataFromId,
  getDomDataFromId,
  forEachSelector,
  domReady,
  removeClass
}
