import axios from "axios";

export default class JobVacancyService {
  getJobVacancies() {
    return axios.get("http://localhost:8080/api/jobvacancies/getall");
  }
}
