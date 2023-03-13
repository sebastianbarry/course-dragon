import Validator from "validator";
import isEmpty from "is-empty";

export default function validateRegisterInput(data) {
  let errors = {};
  
  // Convert empty fields to an empty string so we can use validator functions
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password_hash = !isEmpty(data.password_hash) ? data.password_hash : "";
  data.password_hash_confirm = !isEmpty(data.password_hash_confirm) ? data.password_hash_confirm : "";
  data.account_type = !isEmpty(data.account_type) ? data.account_type : "";
  
  // Name checks
  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  }
  // Email checks
  if (Validator.isEmpty(data.account_type)) {
    errors.account_type = "Account type field is required";
  } else if (data.username.length > 8 || data.username.length < 4) {
    errors.password_hash = "Username is invalid: Too long (must be between 4 and 8 characters)";
  }
  // Password checks
  if (Validator.isEmpty(data.password_hash)) {
    errors.password_hash = "Password field is required";
  }
  if (Validator.isEmpty(data.paspassword_hash_confirm)) {
    errors.password_hash_confirm = "Confirm password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
