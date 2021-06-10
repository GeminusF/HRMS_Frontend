import axios from "axios";

export default class CandidateService {
  registerCandidate({
    birthDate,
    emailAddress,
    firstName,
    id,
    identificationNumber,
    lastName,
    password,
  }) {
    return axios.post("http://localhost:8080/api/candidates/register", {
      birthDate,
      emailAddress,
      firstName,
      id,
      identificationNumber,
      lastName,
      password,
    });
  }

  getCandidates() {
    return axios.get("http://localhost:8080/api/candidates/getall");
  }
}
