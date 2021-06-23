import React from "react";
import JobVacancyForm from "../pages/JobVacancyForm";
import { NavLink } from "react-router-dom";

export default function Add() {
  return (
    <div>
      <JobVacancyForm as={NavLink} to="/add/jobvacany"></JobVacancyForm>
    </div>
  );
}
