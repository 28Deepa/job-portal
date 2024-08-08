import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { GET_APPLICATIONS_BY_JOB_ID } from "../graphql/employer/queries";
import { PAGINATION_LIMIT } from "../constants";
import { ApplicationCard, CustomPagination } from "../components";
import { StyledContainer } from "../global.styled";

const JobApplications = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const limit = PAGINATION_LIMIT;
  const offset = (page - 1) * limit;

  const [applicationsData, setApplicationsData] = useState<any>([]);

  const { data, loading, error, fetchMore } = useQuery(
    GET_APPLICATIONS_BY_JOB_ID,
    {
      variables: {
        job_id: id,
        limit,
        offset,
      },
    }
  );

  useEffect(() => {
    if (data) {
      setApplicationsData(data?.applications);
    }
  }, [data]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    fetchMore({
      variables: { offset: (value - 1) * limit, limit },
    });
  };

  if (loading) return <CircularProgress />;

  if (error) return <Box>Error: {error.message}</Box>;

  return (
    <Container>
      <StyledContainer>
        <Box display="flex" flexDirection="column" width="660px" sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Applicants
          </Typography>

          <Box display="flex" flexDirection="column" gap="1rem">
            {applicationsData?.length ? (
              applicationsData?.map((application: any) => (
                <ApplicationCard key={application.id} job={application} />
              ))
            ) : (
              <Typography>No jobs posted yet.</Typography>
            )}
          </Box>

          {applicationsData?.length > 0 && (
            <CustomPagination
              totalCount={applicationsData?.length}
              limit={limit}
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
        </Box>
      </StyledContainer>
    </Container>
  );
};

export default JobApplications;
