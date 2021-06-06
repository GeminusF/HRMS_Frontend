import React from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";
export default function Navi() {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />

        <Menu.Menu position="right">
          <Dropdown item text="Users">
            <Dropdown.Menu>
              <Dropdown.Item>Candidate</Dropdown.Item>
              <Dropdown.Item>Employee</Dropdown.Item>
              <Dropdown.Item>Employer</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
