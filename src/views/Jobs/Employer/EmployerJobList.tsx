import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  CustomLoader,
  CustomPagination,
  EmployerJobCard,
} from "../../../components";
import { IJob } from "../../../types";
import { GET_JOBS_BY_EMPLOYER } from "../../../graphql/employer/queries";
import { useSelector } from "react-redux";
import { PAGINATION_LIMIT } from "../../../constants";

const EmployerJobList = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const limit = PAGINATION_LIMIT;
  const offset = (page - 1) * limit;

  const { loggedInUserData } = useSelector((state: any) => state.AuthReducer);

  const { loading, error, data, fetchMore } = useQuery(GET_JOBS_BY_EMPLOYER, {
    variables: {
      employer_id: loggedInUserData.id,
      limit,
      offset,
    },
  });
  console.log({ data });
  const totalCount = data?.jobs_aggregate.aggregate.count;
  console.log(totalCount);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    fetchMore({
      variables: { offset: (value - 1) * limit, limit },
    });
  };

  const handleCreateNewJob = () => {
    navigate("/jobs/create");
  };

  const handleJobDetailsClick = (jobId: any) => {
    navigate(`/jobs/${jobId}`);
  };

  if (loading) return <CustomLoader />;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Container>
      <Box display="flex" alignSelf="center" justifyContent="center">
        <Box display="flex" flexDirection="column" width="660px" sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Jobs Posted by You
          </Typography>

          <Box display="flex" flexDirection="column" gap="1rem">
            {data.jobs.length ? (
              data.jobs.map((job: IJob) => (
                <EmployerJobCard key={job.id} job={job} />
              ))
            ) : (
              <Typography>No jobs posted yet.</Typography>
            )}
          </Box>

          <CustomPagination
            totalCount={totalCount}
            limit={limit}
            page={page}
            handlePageChange={handlePageChange}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default EmployerJobList;
