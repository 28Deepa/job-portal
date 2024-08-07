import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Jobs, JobCreate } from "../views";
import JobApplications from "../views/JobApplications";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/create" element={<JobCreate />} />
      <Route path="/jobs/:id/applications" element={<JobApplications />} />
      {/* <Route path="/jobs/details/:id" element={<PostedJobDetails />} /> */}
      <Route path="*" element={<div> No Matching route found! </div>} />
    </Routes>
  );
};
