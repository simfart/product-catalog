import React from 'react';

export function useForm(inputValues) {
  const [values, setValues] = React.useState(inputValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    if (name == 'price') {
      setValues({ [name]: parseFloat(value) });
    } else {
      setValues({ [name]: value });
    }
    const input = event.target;
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());
  };

  return {
    values,
    handleChange,
    setValues,
    isValid,
    setIsValid,
    errors,
    setErrors,
  };
}
