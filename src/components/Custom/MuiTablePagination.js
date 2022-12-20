import TablePagination from "@mui/material/TablePagination";

export function MuiTablePagination(props) {
  const {
    rows,
    rowsPerPage,
    rowsPerPageOptions,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
  } = props;
  return (
    <TablePagination
      rowsPerPageOptions={rowsPerPageOptions}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
