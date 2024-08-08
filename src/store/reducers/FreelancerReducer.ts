import { UPDATE_JOBS_APPLIED_BY_FREELANCER } from "../constants";
import { createReducer } from "./ReducerUtil";

const initialState = {
  appliedJobs: [],
};

const updateJobsAppliedByFreelancer = (state: any, payload: boolean) => {
  return {
    ...state,
    appliedJobs: payload,
  };
};

export default createReducer(initialState, {
  [UPDATE_JOBS_APPLIED_BY_FREELANCER]: updateJobsAppliedByFreelancer,
});
