import React from "react";
import { Route, Routes } from "react-router-dom";
import JobApplications from "../views/Employer/JobApplications";
import { PageNotFound } from "../components";
import Login from "../views/Login";
import Jobs from "../views";
import CreateJob from "../views/Employer/CreateJob";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/create" element={<CreateJob />} />
      <Route path="/jobs/:id/applications" element={<JobApplications />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};
