import React from "react";
import { Button } from "@mui/material";
import { ROLES, RoleType } from "../../constants";

export interface RoleToggleButtonProps {
  userRole: RoleType;
  isLogin: boolean;
  switchUserRole: () => void;
}

const RoleToggleButton: React.FC<RoleToggleButtonProps> = ({
  userRole,
  isLogin,
  switchUserRole,
}) => {
  return (
    <Button onClick={switchUserRole} color="secondary" sx={{ mt: 2 }}>
      {isLogin
        ? userRole === ROLES.FREELANCER
          ? "Login as Employer"
          : "Login as Freelancer"
        : userRole === ROLES.FREELANCER
        ? "Signup as Employer"
        : "Signup as Freelancer"}
    </Button>
  );
};

export default RoleToggleButton;
