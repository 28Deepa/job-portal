import { useSelector } from "react-redux";
import Employer from "./Employer";
import Freelancer from "./Freelancer";
import { ROLES } from "../constants";

const Jobs = () => {
  const { loggedInUserData } = useSelector((state: any) => state.AuthReducer);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const USER_ROLE = user.role || loggedInUserData?.role;

  return (
    <>
      {USER_ROLE === ROLES.FREELANCER && <Freelancer />}
      {USER_ROLE === ROLES.EMPLOYER && <Employer />}
    </>
  );
};

export default Jobs;
