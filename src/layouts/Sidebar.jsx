import React from "react";
import { NavLink } from "react-router-dom";
import { Menu} from "semantic-ui-react";

export default function Sidebar() {
  return (
    <div>
      <Menu pointing secondary vertical>
        <Menu.Item as = {NavLink} to="/candidates" name="Candidates" icon="user fitted" />
        <Menu.Item as = {NavLink} to="/employers" name="Employers" icon="building fitted"/>
        <Menu.Item as = {NavLink} to="/jobtitles" name="Job Titles" icon="briefcase fitted"/>
        <Menu.Item as = {NavLink} to="/jobvacancies" name="Job Vacancies" icon="handshake fitted"/>
      </Menu>
    </div>
  );
}
