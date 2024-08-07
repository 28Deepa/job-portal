import { Pagination, PaginationItem } from "@mui/material";

interface ICustomPagination {
  totalCount: number;
  limit: number;
  page: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}
const CustomPagination: React.FC<ICustomPagination> = ({
  totalCount,
  limit,
  page,
  handlePageChange,
}) => {
  return (
    <Pagination
      count={Math.ceil(totalCount / limit)}
      page={page}
      onChange={handlePageChange}
      sx={{ mt: 2, alignSelf: "center" }}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          sx={{
            "&.Mui-selected": {
              backgroundColor: "#1976d2",
              color: "white",
            },
          }}
        />
      )}
    />
  );
};

export default CustomPagination;
