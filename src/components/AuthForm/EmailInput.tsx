import React from "react";
import { TextField } from "@mui/material";

interface EmailInputProps {
  value: string;
  updateValue: (key: any, val: any) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ value, updateValue }) => {
  return (
    <TextField
      value={value}
      onChange={(e) => updateValue("email", e.target.value)}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
    />
  );
};

export default EmailInput;
