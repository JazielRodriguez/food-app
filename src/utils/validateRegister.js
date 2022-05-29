export const validateRegister = (values) => {
  return (
    values.name.trim().length > 0 &&
    values.email.includes("@") &&
    values.password.trim().length > 6 &&
    values.password.trim() === values.confirmPassword.trim()
  );
};

export const validateLogin = (values) => {
  return values.email.includes("@") && values.password.length > 6;
};
