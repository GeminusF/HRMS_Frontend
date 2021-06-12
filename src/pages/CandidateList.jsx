import React, { useState, useEffect } from "react";
import CandidateService from "../services/candidateService";
import { Card, Image } from "semantic-ui-react";

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setCandidates(result.data.data));
  }, []);

  return (
    <Card.Group>
      {candidates.map((candidate) => (
        <Card href="#candidate-detail">
          {" "}
          <Image
            src="https://cdn.icon-icons.com/icons2/1674/PNG/512/person_110935.png"
            size="tiny"
            wrapped
            ui={false}
          />
          <Card.Content key={candidate.id}>
            <Card.Header>
              {candidate.firstName} {candidate.lastName}
            </Card.Header>
            <Card.Meta>
              <span className="date">{candidate.birthDate}</span>
            </Card.Meta>
            <Card.Description>
              {candidate.emailAddress} {candidate.identificationNumber}
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}
