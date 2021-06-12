import React from "react";
import { Menu, Icon } from "semantic-ui-react";

export default function Sidebar() {
  return (
    <div>
      <Menu pointing secondary vertical>
        <Menu.Item name="Candidates" icon="user fitted" />
        <Menu.Item name="Employers" icon="building fitted"/>
        <Menu.Item name="Job Titles" icon="briefcase fitted"/>
        <Menu.Item name="Job Vacancies" icon="handshake fitted"/>
      </Menu>
    </div>
  );
}
