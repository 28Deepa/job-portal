import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Box, Container, Typography } from "@mui/material";
import {
  ApplicantJobCard,
  CustomLoader,
  CustomPagination,
} from "../../../components";
import { IJob } from "../../../types";
import { APPLICANTS_CONSTANTS } from "../../../constants";
import FiltersComponent from "./Filters";
import { GET_JOBS } from "../../../graphql/freelancer/queries";

const FreelancerJobList = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;

  const { loading, error, data, fetchMore } = useQuery(GET_JOBS, {
    variables: { offset, limit },
  });

  console.log("data", data);
  if (error) {
    console.log({ error });
  }
  const totalCount = data?.jobs_aggregate.aggregate.count;
  console.log("totalCount", totalCount);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    fetchMore({
      variables: { offset: (value - 1) * limit, limit },
    });
  };

  const [filters, setFilters] = useState({
    minRate: null,
    maxRate: null,
    skills: [],
  });

  const handleApplyFilters = (newFilters: any) => {
    setFilters(newFilters);
    setPage(1);
    fetchMore({
      variables: {
        offset: 0,
        ...newFilters,
      },
    });
  };

  if (loading) return <CustomLoader />;
  if (error) return <Box>{APPLICANTS_CONSTANTS.CUSTOM_ERROR}</Box>;

  return (
    <Container>
      <FiltersComponent onApplyFilters={handleApplyFilters} />

      <Box display="flex" alignSelf="center" justifyContent="center">
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          maxWidth="800px"
        >
          <Typography variant="h5">
            {APPLICANTS_CONSTANTS.JOBS_FOR_YOU}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            {totalCount + " "} {APPLICANTS_CONSTANTS.RESULTS}
          </Typography>
          <Box display="flex" flexDirection="column" gap="1rem">
            {data?.jobs.length ? (
              data?.jobs.map((job: IJob) => (
                <ApplicantJobCard key={job.id} job={job} />
              ))
            ) : (
              <Typography>{APPLICANTS_CONSTANTS.NO_JOBS_TO_DISPLAY}</Typography>
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

export default FreelancerJobList;
