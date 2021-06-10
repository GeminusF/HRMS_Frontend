import axios from "axios";

export default class JobVacancyService {

  addJobVacancy({
    active,
    applicationDeadline,
    cityInfo,
    companyName,
    id,
    jobDescription,
    jobPosition,
    openPositionNumber,
    releaseDate,
    salaryMax,
    salaryMin,
  }) {
    return axios.post("http://localhost:8080/api/jobvacancies/add", {
      active,
      applicationDeadline,
      cityInfo,
      companyName,
      id,
      jobDescription,
      jobPosition,
      openPositionNumber,
      releaseDate,
      salaryMax,
      salaryMin,
    });
  }

  getJobVacancies() {
    return axios.get("http://localhost:8080/api/jobvacancies/getall");
  }

  getAvctiveJobVacancies() {
    return axios.get("http://localhost:8080/api/jobvacancies/isactive/active");
  }

  getAvctiveJobVacanciesOrderedByCompanyName() {
    return axios.get(
      "http://localhost:8080/api/jobvacancies/isactive/active/orderedbycompanyname"
    );
  }

  getActiveJobVacanciesOrderedByReleaseDateAsc() {
    return axios.get(
      "http://localhost:8080/api/jobvacancies/isactive/active/orderedbyreleasedateasc"
    );
  }

  getPassiveJobVacancies() {
    return axios.get("http://localhost:8080/api/jobvacancies/isactive/passive");
  }

}
