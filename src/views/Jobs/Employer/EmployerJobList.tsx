import React, { useState } from "react";
import { Box, Typography, Container, Alert } from "@mui/material";
import { useQuery } from "@apollo/client";
import {
  CustomLoader,
  CustomPagination,
  EmployerJobCard,
} from "../../../components";
import { IJob } from "../../../types";
import { GET_JOBS_BY_EMPLOYER } from "../../../graphql/employer/queries";
import { useSelector } from "react-redux";
import { EMPLOYER_CONSTANTS, PAGINATION_LIMIT } from "../../../constants";

const EmployerJobList = () => {
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

  const totalCount = data?.jobs_aggregate.aggregate.count;

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    fetchMore({
      variables: { offset: (value - 1) * limit, limit },
    });
  };

  if (loading) return <CustomLoader />;
  if (error) return <Alert severity="error">Error: {error.message}</Alert>;

  return (
    <Container>
      <Box display="flex" alignSelf="center" justifyContent="center">
        <Box
          display="flex"
          flexDirection="column"
          width="660px"
          sx={{ mb: 4, mt: 4 }}
        >
          <Typography variant="h5">
            {EMPLOYER_CONSTANTS.JOBS_POSTED_BY_YOU}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            {totalCount + " "} {EMPLOYER_CONSTANTS.RESULTS}
          </Typography>

          <Box display="flex" flexDirection="column" gap="1rem">
            {data.jobs.length ? (
              data.jobs.map((job: IJob) => (
                <EmployerJobCard key={job.id} job={job} />
              ))
            ) : (
              <Typography>{EMPLOYER_CONSTANTS.NO_JOBS_POSTED_YET}</Typography>
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
