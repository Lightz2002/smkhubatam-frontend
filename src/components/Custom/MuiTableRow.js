import React from "react";
import TableCell from "@mui/material/TableCell";

const MuiTableRow = (props) => {
  const { value } = props;
  return <TableCell align="right">{value}</TableCell>;
};

export default MuiTableRow;
