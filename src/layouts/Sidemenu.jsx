import React from "react";
import { NavLink } from "react-router-dom";
import { Menu} from "semantic-ui-react";

export default function Sidemenu() {
  return (
    <div>
      <Menu pointing secondary vertical>
        <Menu.Item as = {NavLink} to="/candidates" name="Candidates" icon="user fitted inverted teal" />
        <Menu.Item as = {NavLink} to="/employers" name="Employers" icon="building fitted inverted teal"/>
        <Menu.Item as = {NavLink} to="/jobtitles" name="Job Titles" icon="briefcase fitted inverted teal"/>
        <Menu.Item as = {NavLink} to="/jobvacancies" name="Job Vacancies" icon="handshake fitted inverted teal"/>
      </Menu>
    </div>
  );
}
