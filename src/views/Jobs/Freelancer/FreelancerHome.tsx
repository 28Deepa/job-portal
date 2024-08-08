import React, { useEffect } from "react";
import FreelancerJobList from "./FreelancerJobList";
import { useQuery } from "@apollo/client";
import { GET_FREELANCER_JOBS_BY_ID } from "../../../graphql/freelancer/queries";
import { useDispatch, useSelector } from "react-redux";
import { updateJobsAppliedByFreelancer } from "../../../store/actions/FreelancerAction";

const FreelancerHome = () => {
  const { loggedInUserData } = useSelector((state: any) => state.AuthReducer);
  const { data } = useQuery(GET_FREELANCER_JOBS_BY_ID, {
    variables: {
      freelancer_id: loggedInUserData?.id,
    },
  });
  const dispatch: any = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(updateJobsAppliedByFreelancer(data?.applications));
    }
  }, [data, dispatch]);

  return <FreelancerJobList />;
};

export default FreelancerHome;
