const validateName = (name) => {
  if (name.trim().length < 1) {
    return false
  } else {
    return true
  }
}

export default validateName
