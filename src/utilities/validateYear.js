const validateYear = (year) => {
  if (Number(year) > 2007) {
    return false
  } else {
    return true
  }
}

export default validateYear
