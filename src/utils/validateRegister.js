const validateRegister = (values) => {
  return (
    values.name.length > 0 &&
    values.email.includes("@") &&
    values.password.length > 6 &&
    values.password === values.confirmPassword
  );
};
export default validateRegister;
