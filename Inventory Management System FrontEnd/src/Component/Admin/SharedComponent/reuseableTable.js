import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, styled, tableCellClasses } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#1976d2',
      color: 'white',
      
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: '40px',
    },
  }));

function CustomTable(props) {
  const classes = StyledTableCell;
  const { columns, rows, page, rowsPerPage, setPage, setRowsPerPage } = props;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                  <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{minWidth: column.minWidth }}
                >
                  {column.label}
                  </StyledTableCell>
            

              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

CustomTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      minWidth: PropTypes.number.isRequired,
      align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']).isRequired,
      format: PropTypes.func,
    })
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  setRowsPerPage: PropTypes.func.isRequired,
};

export default CustomTable;


