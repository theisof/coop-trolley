const getImagePath = (image) => {
  if(window.location.search.indexOf('local-images') > -1) {
    return `images/${image}`
  }

  return `https://cdn.jsdelivr.net/gh/theisof/coop-trolley@2.0.0/images/${image}`
}

export default getImagePath
