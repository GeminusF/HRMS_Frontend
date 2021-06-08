import React from "react";
import Sidebar from "./Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navi from "./Navi";
import JobTitleList from "../pages/JobTitleList";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Navi className={classes.paper}></Navi>
        </Grid>
        <Grid item xs={3}>
          <Sidebar className={classes.paper}></Sidebar>
        </Grid>
        <Grid item xs={9}>
          <EmployerList className={classes.paper}></EmployerList>
        </Grid>
      </Grid>
    </div>
  );
}
