import React from "react";
import InputMask from "react-input-mask";
import TextField from "ui/components/inputs/TextField/TextField";
import { OutlinedTextFieldProps } from "@material-ui/core";

export interface TextFieldMaksProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaksProps> = ({ mask, value, onChange, ...props }) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
