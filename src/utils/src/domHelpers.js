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

export const getAllDataFromElement = element => {
  const attributes = [...element.attributes]
  let data = {}

  attributes.forEach((a, i) => {
    if (a.nodeName.substr(0, 4) === 'data') {
      let value = a.nodeValue
      let name = a.nodeName.replace('data-', '')

      if(value.substr(0, 1) === '{' || value.substr(0, 1) === '[') {
        value = JSON.parse(value)
      }

      data[convertCamelCase(name)] = value
    }
  })

  return data
}

const convertCamelCase = str => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '').replace(/-/g, '')
}

export default {
  getParsedDomDataFromId,
  getDomDataFromId,
  forEachSelector,
  domReady,
  removeClass,
  getAllDataFromElement
}
