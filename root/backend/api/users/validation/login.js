import Validator from "validator";
import isEmpty from "is-empty";

export default function validateLoginInput(data) {
  let errors = {};
  
  // Convert empty fields to an empty string so we can use validator functions
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password_hash = !isEmpty(data.password_hash) ? data.password_hash : "";
  
  // Email checks
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  } else if (data.username.length > 8 || data.username.length < 4) {
    errors.password_hash = "Username is invalid: Too long (must be between 4 and 8 characters)";
  }
  // Password checks
  if (Validator.isEmpty(data.password_hash)) {
    errors.password_hash = "Password field is required";
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
