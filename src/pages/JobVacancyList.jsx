import React, { useState, useEffect } from "react";
import { Header, Table, Rating } from "semantic-ui-react";
import JobVacancyService from "../services/jobVacancyService";
export default function JobVacancyList() {
  const [jobvacancies, setJobvacancies] = useState([]);

  useEffect(() => {
    let jobVacancyService = new JobVacancyService();
    jobVacancyService
      .getJobVacancies()
      .then((result) => setJobvacancies(result.data.data));
  }, []);

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>Vəzifə</Table.HeaderCell>
          <Table.HeaderCell>İş açıqlaması</Table.HeaderCell>
          <Table.HeaderCell>Açıq yerlərin sayı</Table.HeaderCell>
          <Table.HeaderCell>Korporasiya</Table.HeaderCell>
          <Table.HeaderCell>Şəhər</Table.HeaderCell>
          <Table.HeaderCell>Maaş</Table.HeaderCell>
          <Table.HeaderCell>Buraxılış tarixi</Table.HeaderCell>
          <Table.HeaderCell>Son müraciət tarixi</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      {jobvacancies.map((jobvacancy) => (
        <Table.Body key={jobvacancy.id}>
          <Table.Row>
            <Table.Cell>
              <Header as="h2" textAlign="center">
                {jobvacancy.jobPosition}
              </Header>
            </Table.Cell>
            <Table.Cell singleLine>{jobvacancy.jobDescription}</Table.Cell>
            <Table.Cell>{jobvacancy.openPositionNumber}</Table.Cell>
            <Table.Cell textAlign="right">
              <a href="#">{jobvacancy.companyName}</a>
            </Table.Cell>
            <Table.Cell>
             {jobvacancy.cityInfo}
            </Table.Cell>
            <Table.Cell>
             {jobvacancy.salaryMin}-{jobvacancy.salaryMax}
            </Table.Cell>
            <Table.Cell>
             {jobvacancy.releaseDate}
            </Table.Cell>
            <Table.Cell>
             {jobvacancy.applicationDeadline}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      ))}
    </Table>
  );
}
