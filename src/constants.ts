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
  "Solid Principles",
];

export const FREELANCER_CONSTANTS = {
  JOBS_FOR_YOU: "Top job picks for you",
  RESULTS: "results",
  NO_JOBS_TO_DISPLAY: "No Jobs to display!!",
  CUSTOM_ERROR: "Its's not you, it's us!",
};

export const EMPLOYER_CONSTANTS = {
  JOBS_POSTED_BY_YOU: "Jobs Posted by You",
  RESULTS: "results",
  NO_JOBS_POSTED_YET: "No Jobs Posted Yet!",
  CUSTOM_ERROR: "Its's not you, it's us!",
};

export const PAGINATION_LIMIT = 10;
