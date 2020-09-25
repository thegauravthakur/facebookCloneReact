const validatePassword = (password) => {
  if (password.trim().length >= 6) {
    return true
  } else {
    return false
  }
}

export default validatePassword
