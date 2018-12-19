const getImagePath = (image) => {
  if(window.location.host.indexOf('localhost') > -1) {
    return `images/${image}`
  }

  return `https://cdn.jsdelivr.net/gh/theisof/coop-trolley@2.0.0/images/${image}`
}

export default getImagePath
