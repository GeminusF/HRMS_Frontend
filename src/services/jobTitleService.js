import axios from "axios";

export default class JobTitleService {
  addJobTitle({ id, title }) {
    return axios.post("http://localhost:8080/api/job_titles/add", {
      id,
      title,
    });
  }

  getJobTitles() {
    return axios.get("http://localhost:8080/api/job_titles/getall");
  }
}
