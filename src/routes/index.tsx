import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Jobs, JobCreate } from "../views";
import JobApplications from "../views/JobApplications";
import { PageNotFound } from "../components";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/create" element={<JobCreate />} />
      <Route path="/jobs/:id/applications" element={<JobApplications />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};
