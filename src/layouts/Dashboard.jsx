import React from "react";
import Sidebar from "./Sidebar";
import { Grid } from "semantic-ui-react";
import JobTitleList from "../pages/JobTitleList";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";
import JobVacancyList from "../pages/JobVacancyList";
import Add from "./Add";
import { Route } from "react-router";
import HomePage from "../pages/HomePage";

export default function Dashboard() {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={3}>
          <Sidebar></Sidebar>
        </Grid.Column>
        <Grid.Column width={13}>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/candidates" component={CandidateList}></Route>
          <Route path="/employers" component={EmployerList}></Route>
          <Route path="/jobtitles" component={JobTitleList}></Route>
          <Route path="/jobvacancies" component={JobVacancyList}></Route>
          <Route path="/add" component={Add}></Route>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
