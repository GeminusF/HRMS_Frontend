import React from "react";
import Sidebar from "./Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navi from "./Navi";
import JobTitleList from "../pages/JobTitleList";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";
import JobVacancyList from "../pages/JobVacancyList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Navi></Navi>
        </Grid>
        <Grid item xs={2.4}>
          <Sidebar></Sidebar>
        </Grid>
        <Grid item xs={9}>
          <EmployerList></EmployerList>
        </Grid>
      </Grid>
    </div>
  );
}
