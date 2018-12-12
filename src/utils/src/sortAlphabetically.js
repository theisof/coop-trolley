const sortAlphabetically = (arr, key = 'name', asc = true) => arr.sort((a, b) => {
  return asc ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key])
})

export default sortAlphabetically