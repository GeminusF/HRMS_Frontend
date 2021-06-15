import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
  TextArea,
} from "semantic-ui-react";

const jobType = [
  { key: "o", text: "Ofisdən", value: "office" },
  { key: "r", text: "Uzaqdan", value: "remote" },
];

const jobTime = [
  { key: "pt", text: "Yarımştat", value: "part time" },
  { key: "ft", text: "Tam vaxt", value: "full time" },
];

const VacancySchema = Yup.object().shape({
  jobPosition: Yup.string()
    .min(5, "Çox qısadı")
    .max(50, "Çox uzundu")
    .required("Tələb olunur"),
  jobDescription: Yup.string()
    .min(10, "Çox qısadı")
    .max(500, "Çox uzundu")
    .required("Tələb olunur"),
  cityInfo: Yup.string()
    .min(4, "Çox qısadı")
    .max(50, "Çox uzundu")
    .required("Tələb olunur"),
  salaryMin: Yup.number().required("Tələb olunur"),
  salaryMax: Yup.number().required("Tələb olunur"),
  openPositionNumber: Yup.string()
    .min(4, "Çox qısadı")
    .max(50, "Çox uzundu")
    .required("Tələb olunur"),
  releaseDate: Yup.date().required("Tələb olunur"),
  applicationDeadline: Yup.date().required("Tələb olunur"),
  companyName: Yup.string()
    .min(5, "Çox qısadı")
    .max(50, "Çox uzundu")
    .required("Tələb olunur"),
});

export default function JobVacancyForm() {
  return (
    <Formik
      initialValues={{
        jobPosition: "",
        jobDescription: "",
        cityInfo: "",
        salaryMin: 0,
        salaryMax: 0,
        openPositionNumber: "",
        releaseDate: "",
        applicationDeadline: "",
        companyName: "",
        jobType: "",
        jobTime: "",
      }}
      validationSchema={VacancySchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {" "}
      {({ errors, touched }) => (
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              name="companyName"
              required
              control={Input}
              label="Korporasiya"
              placeholder="Korporasiya adınız"
              width={4}
            />
            <Form.Field
              name="jobPosition"
              required
              control={Input}
              label="Vəzifə"
              placeholder="İş vəzifəsi"
              width={4}
            />
            <Form.Field
              name="openPositionNumber"
              required
              control={Input}
              label="Açıq yerlərin sayı"
              placeholder="Ehtiyac duyduğunuz işçi sayı"
              width={4}
            />
            <Form.Field
              name="cityInfo"
              required
              control={Input}
              label="Şəhər"
              placeholder="Şəhər"
              width={2}
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              required
              control={Select}
              label="İş növü"
              width={4}
              options={jobType}
            />
            <Form.Field
              name="jobDescription"
              required
              control={TextArea}
              label="İş açıqlaması"
              placeholder="İşin detalları"
              width={8}
            />
            <Form.Field
              required
              control={Select}
              label="İş zamanı"
              width={4}
              options={jobTime}
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              name="salaryMin"
              required
              control={Input}
              label="Maaş (aşağı limit)"
              placeholder="Minimum əməkhaqqı"
              width={4}
            />
            <Form.Field
              name="salaryMax"
              required
              control={Input}
              label="Maaş (yuxarı limit)"
              placeholder="Maksimum əməkhaqqı"
              width={4}
            />
            <Form.Field
              name="releaseDate"
              required
              control={Input}
              label="Buraxılış tarixi"
              placeholder="Elanın yayınlama tarixi"
              width={4}
            />
            <Form.Field
              name="applicationDeadline"
              required
              control={Input}
              label="Son müraciət tarixi"
              placeholder="Namizədin son müraciət tarixi"
              width={4}
            />
          </Form.Group>

          <Form.Field
            required
            control={Checkbox}
            label="Mən şərtləri və qaydaları qəbul edirəm"
          />
          <Form.Field control={Button}>Yayımla</Form.Field>
        </Form>
      )}
    </Formik>
  );
}
