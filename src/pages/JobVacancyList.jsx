import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import JobTitleService from "../services/jobTitleService";
import JobVacancyService from "../services/jobVacancyService";

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

export default function JobVacancyList() {
  const classes = useStyles();

  const [jobvacancies, setJobvacancies] = useState([]);

  useEffect(() => {
    let jobVacancyService = new JobVacancyService();
    jobVacancyService
      .getJobVacancies()
      .then((result) => setJobvacancies(result.data.data));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="right">Vəzifə</StyledTableCell>
            <StyledTableCell align="right">İş açıqlaması</StyledTableCell>
            <StyledTableCell align="right">Şəhər</StyledTableCell>
            <StyledTableCell align="right">Maaş aşağı limit</StyledTableCell>
            <StyledTableCell align="right">Maaş yuxarı limit</StyledTableCell>
            <StyledTableCell align="right">Açıq yerlərin sayı</StyledTableCell>
            <StyledTableCell align="right">Buraxılış tarixi</StyledTableCell>
            <StyledTableCell align="right">Son müraciət tarixi</StyledTableCell>
            <StyledTableCell align="right">Korporasiya</StyledTableCell>
            <StyledTableCell align="right">Aktiv</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobvacancies.map((jobvacancy) => (
            <StyledTableRow key={jobvacancy.id}>
              <StyledTableCell component="th" scope="row">
                {jobvacancy.id}
              </StyledTableCell>
              <StyledTableCell align="right">
                {jobvacancy.jobPosition}
              </StyledTableCell>
              <StyledTableCell align="right">
                {jobvacancy.jobDescription}
              </StyledTableCell>
              <StyledTableCell align="right">
                {jobvacancy.cityInfo}
              </StyledTableCell>
              <StyledTableCell align="right">
                {jobvacancy.salaryMin}
              </StyledTableCell>
              <StyledTableCell align="right">
                {jobvacancy.salaryMax}
              </StyledTableCell>
              <StyledTableCell align="right">
                {jobvacancy.openPositionNumber}
              </StyledTableCell>
              <StyledTableCell align="right">
                {jobvacancy.releaseDate}
              </StyledTableCell>
              <StyledTableCell align="right">
                {jobvacancy.applicationDeadline}
              </StyledTableCell>
              <StyledTableCell align="right">
                {jobvacancy.companyName}
              </StyledTableCell>
              <StyledTableCell align="right">
                {jobvacancy.active}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
