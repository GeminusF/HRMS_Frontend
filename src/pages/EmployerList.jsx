import React, { useState, useEffect } from "react";
import EmployerService from "../services/employerService";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function EmployerList() {
  const classes = useStyles();
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="right">E-Mail</StyledTableCell>
            <StyledTableCell align="right">Korporasiya</StyledTableCell>
            <StyledTableCell align="right">Veb Sayt</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employers.map((employer) => (
            <StyledTableRow key={employer.id}>
              <StyledTableCell component="th" scope="row">
                {employer.id}
              </StyledTableCell>
              <StyledTableCell align="right">
                {employer.emailAddress}
              </StyledTableCell>
              <StyledTableCell align="right">
                {employer.companyName}
              </StyledTableCell>
              <StyledTableCell align="right">
                {employer.webAddress}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
