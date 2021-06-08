import React, { useState, useEffect } from "react";
import CandidateService from "../services/candidateService";
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

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="right">E-Mail</StyledTableCell>
            <StyledTableCell align="right">Ad</StyledTableCell>
            <StyledTableCell align="right">Soyad</StyledTableCell>
            <StyledTableCell align="right">İdentifikasiya nömrəsi</StyledTableCell>
            <StyledTableCell align="right">Doğum günü</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {candidates.map((candidate) => (
            <StyledTableRow key={candidate.id}>
              <StyledTableCell component="th" scope="row">
                {candidate.id}
              </StyledTableCell>
              <StyledTableCell align="right">{candidate.emailAddress}</StyledTableCell>
              <StyledTableCell align="right">{candidate.firstName}</StyledTableCell>
              <StyledTableCell align="right">{candidate.lastName}</StyledTableCell>
              <StyledTableCell align="right">{candidate.identificationNumber}</StyledTableCell>
              <StyledTableCell align="right">{candidate.birthDate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
