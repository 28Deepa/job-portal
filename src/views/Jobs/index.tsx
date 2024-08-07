import React from "react";
import { useSelector } from "react-redux";
import { ROLES } from "../../constants";
import FreelancerHome from "./Freelancer/FreelancerHome";
import EmployerHome from "./Employer/EmployerHome";

const Jobs = () => {
  const { loggedInUserData } = useSelector((state: any) => state.AuthReducer);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const USER_ROLE = user.role || loggedInUserData?.role;

  return (
    <>
      {USER_ROLE === ROLES.FREELANCER && <FreelancerHome />}
      {USER_ROLE === ROLES.EMPLOYER && <EmployerHome />}
    </>
  );
};

export default Jobs;
