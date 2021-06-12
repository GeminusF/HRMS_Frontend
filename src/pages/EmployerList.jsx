import React, { useState, useEffect } from "react";
import EmployerService from "../services/employerService";
import { Table } from "semantic-ui-react";

export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Internet Səhifəsi</Table.HeaderCell>
          <Table.HeaderCell >E-mail</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {employers.map((employer) => (
        <Table.Body key={employer.id}>
          <Table.Row>
            <Table.Cell>{employer.companyName}</Table.Cell>
            <Table.Cell >
              <a href="" target="_blank">
                {employer.webAddress}
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="" target="_blank">
                {employer.emailAddress}
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      ))}
    </Table>
  );
}
