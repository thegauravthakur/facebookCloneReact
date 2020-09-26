const validateYear = (selectedYear) => {
  const year = Number(selectedYear)

  if (!year) {
    return false
  }

  if (Number.isNaN(year)) {
    return false
  }

  if (year > 2007) {
    return false
  } else {
    return true
  }
}

export default validateYear
