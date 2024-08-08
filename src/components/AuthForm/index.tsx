import { Box, Button, Typography, Link } from "@mui/material";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import { ROLES, RoleType } from "../../constants";
import RoleToggleButton from "./RoleToggleButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { USER_PROFILES } from "../../dummyData";
import { updateLoggedInUserData } from "../../store/actions/AuthAction";
import { useNavigate } from "react-router-dom";

interface AuthFormProps {
  isLogin: boolean;
  toggleAuthMode: () => void;
  userRole: RoleType;
  switchUserRole: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  isLogin,
  toggleAuthMode,
  userRole,
  switchUserRole,
}) => {
  const [formState, setFormState]: any = useState({
    email: "",
    password: "",
  });

  const updateFormState = (key: any, value: any) => {
    setFormState((prevFormState: any) => ({
      ...prevFormState,
      [key]: value,
    }));
  };

  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (formState?.email && formState?.password) {
      if (USER_PROFILES[formState.email].password === formState.password) {
        dispatch(updateLoggedInUserData(USER_PROFILES[formState.email]));
      }
    }
    localStorage["user"] = JSON.stringify(USER_PROFILES[formState.email]);
    navigate("/jobs");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        mt: 8,
        width: { xs: "90%", sm: "70%", md: "50%", lg: "40%", xl: "30%" },
      }}
    >
      <Typography variant="h4" gutterBottom>
        {isLogin ? "Login" : "Sign Up"}
        {userRole === ROLES.FREELANCER ? " Freelancer" : " as Employer"}
      </Typography>
      <EmailInput value={formState.email} updateValue={updateFormState} />
      <PasswordInput value={formState.password} updateValue={updateFormState} />
      <Button
        type="submit"
        fullWidth
        onClick={handleLogin}
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
        disabled={!formState.email || !formState.password}
      >
        {isLogin ? "Login" : "Sign Up"}
      </Button>
      <Link href="#" onClick={toggleAuthMode} variant="body2">
        {isLogin
          ? "Don't have an account? Sign Up"
          : "Already have an account? Login"}
      </Link>
      <RoleToggleButton
        userRole={userRole}
        isLogin={isLogin}
        switchUserRole={switchUserRole}
      />
    </Box>
  );
};

export default AuthForm;
