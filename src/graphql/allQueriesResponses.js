const FETCH_APPLICANT_DETAILS = {
  data: {
    applicants: [
      {
        id: 1,
        name: "test_user1",
        email: "test_user1@gmail.com",
        github_profile: "https://github.com/octocat",
        skills: ["React", "Javascript", "Typescript", "Angular", "Vue"],
        applications: [
          {
            id: 2,
            job_id: 1,
          },
          {
            id: 3,
            job_id: 3,
          },
          {
            id: 5,
            job_id: 7,
          },
        ],
      },
    ],
  },
};

const FETCH_JOBS_FOR_APPLICANT = {
  data: {
    jobs: [
      {
        id: 1,
        job_title: "Software Engineer II",
        job_description:
          "We are looking for a software engineer who can take care of all aspects of our product. You will be responsible for implementing robust solutions to the complex problems. Our team is fast and innovative, following agile methodologies. If you are self-driven, passionate, a team-player and have effective communication skills, this role will fascinate you.",
        company_name: "Intuit",
        salary_per_hour: "$32",
        skills: ["React", "Jabascript", "Angular", "Vue", "HTML", "CSS"],
        employer_id: 1,
        created_at: "2024-08-05T14:40:49.54894+00:00",
      },
      {
        id: 2,
        job_title: "Senior Developer",
        job_description: "We are looking for a senior developer.",
        company_name: "Tech Corp",
        salary_per_hour: "50",
        skills: ["JavaScript", "React", "Node.js"],
        employer_id: 1,
        created_at: "2024-08-05T19:46:26.428709+00:00",
      },
      {
        id: 3,
        job_title: "Senior Software Engineer ",
        job_description:
          "6 to 8 years of experience in Designing and Developing Applications using Java 8 above Spring Boot and Microservices",
        company_name: "Amazon",
        salary_per_hour: "67",
        skills: ["JavaScript", "React", "Node.js"],
        employer_id: 2,
        created_at: "2024-08-05T19:54:08.700876+00:00",
      },
      {
        id: 4,
        job_title: "Software Development Engineer 2",
        job_description:
          "4 - 10 years of experience in development using various Web technologies in server side using Java",
        company_name: "Amazon",
        salary_per_hour: "65",
        skills: ["Java", " Backend", " Web development"],
        employer_id: 1,
        created_at: "2024-08-06T09:59:58.657687+00:00",
      },
      {
        id: 5,
        job_title: "Software Engineer 2",
        job_description:
          "4 - 10 years of experience in development using various Web technologies in server side using Java",
        company_name: "Microsoft",
        salary_per_hour: "$75",
        skills: ["Java", " Backend", " Web development"],
        employer_id: 1,
        created_at: "2024-08-06T10:11:56.530064+00:00",
      },
      {
        id: 6,
        job_title: "Software Engineer 2",
        job_description:
          "4 - 10 years of experience in development using various Web technologies in server side using Java",
        company_name: "Microsoft",
        salary_per_hour: "$75",
        skills: ["Java", " Backend", " Web development"],
        employer_id: 1,
        created_at: "2024-08-06T10:12:59.330119+00:00",
      },
      {
        id: 7,
        job_title: "Member of Technical Staff II",
        job_description:
          "Development and improvement of dynamic advertising banners, based on internal designs, client requirements and existing templates for our Display ads (based on HTML5/CSS3/ JavaScript)",
        company_name: "Adobe",
        salary_per_hour: "$87",
        skills: ["Frontend", " Web development"],
        employer_id: 1,
        created_at: "2024-08-06T10:56:26.857383+00:00",
      },
      {
        id: 8,
        job_title: "Software Developer",
        job_description:
          "Development and improvement of dynamic advertising banners, based on internal designs, client requirements and existing templates for our Display ads (based on HTML5/CSS3/ JavaScript)",
        company_name: "Adobe ",
        salary_per_hour: "$65",
        skills: ["Frontend", " Javascript", " React"],
        employer_id: 1,
        created_at: "2024-08-06T10:58:31.231903+00:00",
      },
      {
        id: 9,
        job_title: "Software Developer",
        job_description:
          "Development and improvement of dynamic advertising banners, based on internal designs, client requirements and existing templates for our Display ads (based on HTML5/CSS3/ JavaScript)",
        company_name: "Walmart",
        salary_per_hour: "$87",
        skills: ["Frontend", " React", " Javascript", " Web dev"],
        employer_id: 1,
        created_at: "2024-08-06T11:05:43.255038+00:00",
      },
    ],
  },
};

const FETCH_JOBS_BY_EMPLOYER = {
  data: {
    jobs: [
      {
        id: 1,
        job_title: "Software Engineer II",
        job_description:
          "We are looking for a software engineer who can take care of all aspects of our product. You will be responsible for implementing robust solutions to the complex problems. Our team is fast and innovative, following agile methodologies. If you are self-driven, passionate, a team-player and have effective communication skills, this role will fascinate you.",
        company_name: "Intuit",
        salary_per_hour: "$32",
        skills: ["React", "Jabascript", "Angular", "Vue", "HTML", "CSS"],
        created_at: "2024-08-05T14:40:49.54894+00:00",
      },
      {
        id: 2,
        job_title: "Senior Developer",
        job_description: "We are looking for a senior developer.",
        company_name: "Tech Corp",
        salary_per_hour: "50",
        skills: ["JavaScript", "React", "Node.js"],
        created_at: "2024-08-05T19:46:26.428709+00:00",
      },
      {
        id: 4,
        job_title: "Software Development Engineer 2",
        job_description:
          "4 - 10 years of experience in development using various Web technologies in server side using Java",
        company_name: "Amazon",
        salary_per_hour: "65",
        skills: ["Java", " Backend", " Web development"],
        created_at: "2024-08-06T09:59:58.657687+00:00",
      },
      {
        id: 5,
        job_title: "Software Engineer 2",
        job_description:
          "4 - 10 years of experience in development using various Web technologies in server side using Java",
        company_name: "Microsoft",
        salary_per_hour: "$75",
        skills: ["Java", " Backend", " Web development"],
        created_at: "2024-08-06T10:11:56.530064+00:00",
      },
      {
        id: 6,
        job_title: "Software Engineer 2",
        job_description:
          "4 - 10 years of experience in development using various Web technologies in server side using Java",
        company_name: "Microsoft",
        salary_per_hour: "$75",
        skills: ["Java", " Backend", " Web development"],
        created_at: "2024-08-06T10:12:59.330119+00:00",
      },
      {
        id: 7,
        job_title: "Member of Technical Staff II",
        job_description:
          "Development and improvement of dynamic advertising banners, based on internal designs, client requirements and existing templates for our Display ads (based on HTML5/CSS3/ JavaScript)",
        company_name: "Adobe",
        salary_per_hour: "$87",
        skills: ["Frontend", " Web development"],
        created_at: "2024-08-06T10:56:26.857383+00:00",
      },
      {
        id: 8,
        job_title: "Software Developer",
        job_description:
          "Development and improvement of dynamic advertising banners, based on internal designs, client requirements and existing templates for our Display ads (based on HTML5/CSS3/ JavaScript)",
        company_name: "Adobe ",
        salary_per_hour: "$65",
        skills: ["Frontend", " Javascript", " React"],
        created_at: "2024-08-06T10:58:31.231903+00:00",
      },
      {
        id: 9,
        job_title: "Software Developer",
        job_description:
          "Development and improvement of dynamic advertising banners, based on internal designs, client requirements and existing templates for our Display ads (based on HTML5/CSS3/ JavaScript)",
        company_name: "Walmart",
        salary_per_hour: "$87",
        skills: ["Frontend", " React", " Javascript", " Web dev"],
        created_at: "2024-08-06T11:05:43.255038+00:00",
      },
    ],
  },
};
