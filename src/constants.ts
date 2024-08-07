export const ROLES = {
  FREELANCER: "freelancer",
  EMPLOYER: "employer",
};

export type RoleType = (typeof ROLES)[keyof typeof ROLES];

export const FILTERS_CONSTANTS = {
  MAX_RATE: 500,
};

export const SKILLS = [
  "React",
  "JavaScript",
  "Vue",
  "Angular",
  "Java",
  "C++",
  "HTML",
  "CSS",
];

export const APPLICANT_JOB_LIST_ITEMS_PER_PAGE = 20;
export const EMPLOYER_JOB_LIST_ITEMS_PER_PAGE = 5;

export const APPLICANTS_CONSTANTS = {
  JOBS_FOR_YOU: "Top job picks for you",
  RESULTS: "results",
  NO_JOBS_TO_DISPLAY: "No Jobs to display!!",
  CUSTOM_ERROR: "Its's not you, it's us!",
};

export const EMPLOYERS_CONSTANTS = {
  NO_JOBS_TO_DISPLAY: "No Jobs to display!!",
};
