import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Dropdown, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <Menu size="small" fixed inverted>
      <Menu.Item name="HRMS" icon="react circular  inverted teal" />
      <Link as={NavLink} to="/">
        <Menu.Item name="ana səhifə" icon="home circular  inverted teal" />
      </Link>
      <Link as={NavLink} to="/add">
        {" "}
        <Menu.Item
          name="iş elanı ver"
          icon="file alternate  circular inverted teal"
        />
      </Link>

      <Menu.Item name="haqqımızda" icon="info circular inverted teal" />

      <Menu.Menu position="right">
        <Dropdown item text="Dil">
          <Dropdown.Menu>
            <Dropdown.Item>Azərbaycan</Dropdown.Item>
            <Dropdown.Item>Rus</Dropdown.Item>
            <Dropdown.Item>İngilis</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item>
          <Button inverted color="teal">
            Qeydiyyatdan keç
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
