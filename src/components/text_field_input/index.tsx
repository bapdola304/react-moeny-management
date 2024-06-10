import React, { useState } from "react";
// @ts-ignore
import { AvField } from "availity-reactstrap-validation";
import "./style.scss";
import { EyeIcon, EyeOffIcon } from "../../utils/icons";

interface ITextFieldInputProps {
  validate?: any;
  label?: string;
  name?: string;
  className?: string;
  type?: string;
}

export default function TextFieldInput({
  validate,
  label,
  name = "name",
  className,
  type = "text",
}: ITextFieldInputProps) {
  const [isValid, setIsValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: any) => {
    setIsValid(e.target.checkValidity());
  };
  return (
    <div className={`input-box ${className}`}>
      <AvField
        className={isValid ? "valid-input" : ""}
        name={name}
        type={showPassword ? "text" : type}
        validate={validate}
        onChange={handleChange}
      />
      {label && <span className={isValid ? "valid" : ""}>{label}</span>}
      {type === "password" && (
        <div
          className="input-box__password-icon"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOffIcon width={26} /> : <EyeIcon width={26} />}
        </div>
      )}
    </div>
  );
}
