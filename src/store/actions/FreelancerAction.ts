import { UPDATE_JOBS_APPLIED_BY_FREELANCER } from "../constants";

export const updateJobsAppliedByFreelancer =
  (payload: any) => (dispatch: any) => {
    dispatch({
      type: UPDATE_JOBS_APPLIED_BY_FREELANCER,
      payload,
    });
  };
