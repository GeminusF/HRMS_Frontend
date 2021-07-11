import React from "react";
import Sidemenu from "./Sidemenu";
import { Grid, Checkbox, Table, Sidebar, Button } from "semantic-ui-react";
import JobTitleList from "../pages/JobTitleList";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";
import JobVacancyList from "../pages/JobVacancyList";
import Add from "./Add";
import { Route } from "react-router";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";

export default function Dashboard() {
  const [visible, setVisible] = React.useState(false);
  return (
    <Grid>
      <Grid.Column>
        <Checkbox
          clikced={visible}
          label={{ children: <code>Menu</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </Grid.Column>

      <Sidebar
        as={Table}
        animation="overlay"
        direction="left"
        icon="labeled"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Sidemenu></Sidemenu>
      </Sidebar>
      <Grid.Row>
        <Grid.Column width={16}>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
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
