import React, { useState, useEffect } from "react";
import { Header } from "semantic-ui-react";
import JobTitleService from "../services/jobTitleService";

export default function JobTitleList() {
  const [jobtitles, setJobtitles] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setJobtitles(result.data.data));
  }, []);

  return (
    <div>
      {jobtitles.map((jobtitle) => (
        <Header as="h2" icon="briefcase" content={jobtitle.title} />
      ))}
    </div>
  );
}
