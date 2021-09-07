import React, { useState, useEffect } from "react";
import { CFormGroup, CLabel, CInput, CInvalidFeedback } from "@coreui/react";
const TextInput = ({
  index,
  model,
  name,
  value = "",
  onChange,
  placeholder = "",
  valid = true
}) => {
  const [valid, setValid] = useState(valid);
  const [error, message] = useState(false);
  const [initialValue, setValue] = useState(value);
  function handleOnChange(e) {
    onChange(name, e.target.value);
    setValue();
  }
  return (
    <CFormGroup>
      <CLabel htmlFor={`${index}_${name}`}>First Name</CLabel>
      <CInput
        id={`${index}_${name}`}
        name={name}
        value={initialValue}
        onChange={handleOnChange}
        placeholder={placeholder}
        invalid={error ? true : false}
      />
      <CInvalidFeedback>{message}</CInvalidFeedback>
    </CFormGroup>
  );
};
export default TextInput;
