import React from "react";
import { TextField } from "@mui/material";

interface PasswordInputProps {
  value: string;
  updateValue: (key: any, val: any) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  updateValue,
}: any) => {
  return (
    <TextField
      value={value}
      onChange={(e) => updateValue("password", e.target.value)}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
    />
  );
};

export default PasswordInput;
