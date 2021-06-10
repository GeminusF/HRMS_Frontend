import axios from "axios";

export default class CandidateCVUniverstyService {
  getCandidateCVUniversties() {
    return axios.get(
      "http://localhost:8080/api/candidatescvuniversities/getall"
    );
  }
}
