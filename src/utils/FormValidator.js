import React from "react";

export default function FormValidator() {

    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: evt.target.validationMessage})
        setIsValid(evt.target.closest('form').checkValidity());
    }

    const resetForm = () => {
        setValues({});
        setErrors({})
        setIsValid(false);
    }

    return {
        values,
        handleChange,
        errors,
        isValid,
        resetForm,
    };
}