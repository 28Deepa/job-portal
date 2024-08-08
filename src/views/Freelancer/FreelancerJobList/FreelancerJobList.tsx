import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Box, Container, Typography } from "@mui/material";
import {
  ApplicantJobCard,
  CustomLoader,
  CustomPagination,
} from "../../../components";
import { IJob } from "../../../types";
import { FREELANCER_CONSTANTS } from "../../../constants";
import { GET_JOBS } from "../../../graphql/freelancer/queries";
import Filters from "./Filters";

const FreelancerJobList = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit;

  const { loading, error, data, fetchMore } = useQuery(GET_JOBS, {
    variables: { offset, limit },
  });

  const [dataToDisplay, setDataToDisplay] = useState<any>([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setTotalCount(data?.jobs_aggregate.aggregate.count);
    setDataToDisplay(data);
  }, [data, loading]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    fetchMore({
      variables: { offset: (value - 1) * limit, limit },
    });
  };

  // eslint-disable-next-line
  const [filters, setFilters] = useState({
    minRate: 0,
    maxRate: 10000,
    skills: [],
  });

  const handleApplyFilters = async (newFilters: any) => {
    setFilters(newFilters);
    setPage(1);
    const newData = await fetchMore({
      variables: {
        offset: 0,
        ...newFilters,
      },
    });
    setTotalCount(newData?.data?.jobs_aggregate.aggregate.count);
    setDataToDisplay(newData?.data);
  };

  if (loading) return <CustomLoader />;
  if (error) return <Box>{FREELANCER_CONSTANTS.CUSTOM_ERROR}</Box>;

  return (
    <Container>
      <Filters onApplyFilters={handleApplyFilters} />
      <Box display="flex" alignSelf="center" justifyContent="center">
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          maxWidth="800px"
        >
          <Typography variant="h5">
            {FREELANCER_CONSTANTS.JOBS_FOR_YOU}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            {totalCount + " "} {FREELANCER_CONSTANTS.RESULTS}
          </Typography>
          <Box display="flex" flexDirection="column" gap="1rem">
            {dataToDisplay?.jobs?.length > 0 ? (
              dataToDisplay?.jobs.map((job: IJob) => (
                <ApplicantJobCard key={job.id} job={job} />
              ))
            ) : (
              <Typography>{FREELANCER_CONSTANTS.NO_JOBS_TO_DISPLAY}</Typography>
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
