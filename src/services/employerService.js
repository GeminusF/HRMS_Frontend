import axios from "axios";

export default class EmployerService {
  registerEmployer({ companyName, emailAddress, id, password, webAddress }) {
    return axios.post("http://localhost:8080/api/employers/register", {
      companyName,
      emailAddress,
      id,
      password,
      webAddress,
    });
  }

  getEmployers() {
    return axios.get("http://localhost:8080/api/employers/getall");
  }
}
