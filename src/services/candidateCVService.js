import axios from "axios";

export default class CandidateCVService {
  addCandidateCV({ coverLetter, githubAddress, id, linkedinAddress }) {
    return axios.post("http://localhost:8080/api/candidatescv/add", {
      coverLetter,
      githubAddress,
      id,
      linkedinAddress,
    });
  }

  getCandidateCVs() {
    return axios.get("http://localhost:8080/api/candidatescv/getall");
  }
}
