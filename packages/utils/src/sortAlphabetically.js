const sortAlphabetically = (arr, asc = true) => arr.sort((a, b) => {
  return asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
})

export default sortAlphabetically