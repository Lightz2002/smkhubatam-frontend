import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import { getComparator, stableSort } from "../../utilities/helper";
import { TableBody } from "@mui/material";
import MuiTableRow from "./MuiTableRow";

export function MuiTableBody(props) {
  const {
    rows,
    columns,
    order,
    orderBy,
    page,
    rowsPerPage,
    handleClick,
    isSelected,
    emptyRows,
    dense,
  } = props;
  return (
    <TableBody>
      {/* if you don't need to support IE11, you can replace the `stableSort` call with:
       rows.sort(getComparator(order, orderBy)).slice() */}
      {stableSort(rows, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const isItemSelected = isSelected(row.name);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              hover
              onClick={(event) => handleClick(event, row.name)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.name}
              selected={isItemSelected}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={isItemSelected}
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </TableCell>
              <TableCell component="th" id={labelId} scope="row" padding="none">
                {row.name}
              </TableCell>
              {/* loop the columns and call table row */}
              {columns.map((column) => {
                return <MuiTableRow key={column} value={row[column]} />;
              })}
            </TableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: (dense ? 33 : 53) * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
}
