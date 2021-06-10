import axios from "axios";

export default class CandidateCVTechToolService {
  getCandidateCVTechTools() {
    return axios.get("http://localhost:8080/api/candidatescvtechtools/getall");
  }
}
