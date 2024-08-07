import { useState } from "react";
import { ROLES, RoleType } from "../../constants";
import { AuthForm } from "../../components";
import { Container } from "@mui/material";
import { StyledBox } from "../../global.styled";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [userRole, setUserRole] = useState<RoleType>(ROLES.FREELANCER);
  const [isLogin] = useState(true);
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    navigate("/signup");
  };

  const switchUserRole = () => {
    setUserRole((prevRole) =>
      prevRole === ROLES.FREELANCER ? ROLES.EMPLOYER : ROLES.FREELANCER
    );
  };

  return (
    <Container>
      <StyledBox>
        <AuthForm
          isLogin={isLogin}
          toggleAuthMode={toggleAuthMode}
          userRole={userRole}
          switchUserRole={switchUserRole}
        />
      </StyledBox>
    </Container>
  );
};

export default Login;
