import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormField,
  FormGroup,
  Input,
  Label,
  Icon,
} from "semantic-ui-react";

const VacancySchema = Yup.object().shape({
  jobPosition: Yup.string()
    .min(5, "Çox qısadı")
    .max(50, "Çox uzundu")
    .required("Tələb olunur"),
  jobDescription: Yup.string()
    .min(10, "Çox qısadı")
    .max(5000, "Çox uzundu")
    .required("Tələb olunur"),
  cityInfo: Yup.string()
    .min(4, "Çox qısadı")
    .max(500, "Çox uzundu")
    .required("Tələb olunur"),
  salaryMin: Yup.number().required("Tələb olunur"),
  salaryMax: Yup.number().required("Tələb olunur"),
  openPositionNumber: Yup.number()
    .min(1, "Ən azı bir yer açmalısınız")
    .required("Tələb olunur"),
  releaseDate: Yup.date().required("Tələb olunur"),
  applicationDeadline: Yup.date().required("Tələb olunur"),
  companyName: Yup.string().required("Tələb olunur"),
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
        openPositionNumber: 0,
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
      <Form className="ui form">
        <FormGroup widths="equal">
          <FormField required control={Input} label="Korporasiya" width={4}>
            <Field name="companyName" placeholder="Korporasiya adınız"></Field>
            <ErrorMessage
              name="companyName"
              render={(error) => (
                <Label
                  icon="ban fitted"
                  pointing="left"
                  basic
                  color="red"
                  content={error}
                ></Label>
              )}
            ></ErrorMessage>
          </FormField>

          <FormField required control={Input} label="Vəzifə" width={4}>
            <Field name="jobPosition" placeholder="İş vəzifəsi"></Field>
            <ErrorMessage
              name="jobPosition"
              render={(error) => (
                <Label
                  icon="ban fitted"
                  pointing="left"
                  basic
                  color="red"
                  content={error}
                ></Label>
              )}
            ></ErrorMessage>
          </FormField>

          <FormField
            required
            control={Input}
            label="Açıq yerlərin sayı"
            width={4}
          >
            <Field
              name="openPositionNumber"
              placeholder="Ehtiyac duyduğunuz işçi sayı"
            ></Field>
            <ErrorMessage
              name="openPositionNumber"
              render={(error) => (
                <Label
                  icon="ban fitted"
                  pointing="left"
                  basic
                  color="red"
                  content={error}
                ></Label>
              )}
            ></ErrorMessage>
          </FormField>

          <FormField required control={Input} label="Şəhər" width={2}>
            <Field name="cityInfo" placeholder="Şəhər"></Field>
            <ErrorMessage
              name="cityInfo"
              render={(error) => (
                <Label
                  icon="ban fitted"
                  pointing="left"
                  basic
                  color="red"
                  content={error}
                ></Label>
              )}
            ></ErrorMessage>
          </FormField>
        </FormGroup>
        <FormGroup>
          <FormField control={Input} required label="İş növü" width={4}>
            <Field name="jobType" as="select">
              <option value="office">Ofisdən</option>
              <option value="remote">Uzaqdan</option>
            </Field>
            <ErrorMessage
              name="jobType"
              render={(error) => (
                <Label
                  icon="ban fitted"
                  pointing="left"
                  basic
                  color="red"
                  content={error}
                ></Label>
              )}
            ></ErrorMessage>
          </FormField>

          <FormField required control={Input} label="İş açıqlaması" width={8}>
            <Field name="jobDescription" placeholder="İşin detalları"></Field>
          </FormField>

          <FormField required control={Input} label="İş zamanı" width={4}>
            <Field name="jobTime" as="select">
              <option value="part time">Yarımştat</option>
              <option value="full time">Tam Vaxt</option>
            </Field>
          </FormField>
        </FormGroup>
        <FormGroup>
          <FormField
            required
            control={Input}
            label="Maaş (aşağı limit)"
            width={4}
          >
            <Field name="salaryMin" placeholder="Minimum əməkhaqqı"></Field>
            <ErrorMessage
              name="salaryMin"
              render={(error) => (
                <Label
                  icon="ban fitted"
                  pointing="left"
                  basic
                  color="red"
                  content={error}
                ></Label>
              )}
            ></ErrorMessage>
          </FormField>

          <FormField
            required
            control={Input}
            label="Maaş (yuxarı limit)"
            width={4}
          >
            <Field name="salaryMax" placeholder="Maksimum əməkhaqqı"></Field>
            <ErrorMessage
              name="salaryMax"
              render={(error) => (
                <Label
                  icon="ban fitted"
                  pointing="left"
                  basic
                  color="red"
                  content={error}
                ></Label>
              )}
            ></ErrorMessage>
          </FormField>

          <FormField
            required
            control={Input}
            label="Buraxılış tarixi"
            width={4}
          >
            <Field
              name="releaseDate"
              placeholder="Elanın yayınlama tarixi"
            ></Field>
            <ErrorMessage
              name="releaseDate"
              render={(error) => (
                <Label
                  icon="ban fitted"
                  pointing="left"
                  basic
                  color="red"
                  content={error}
                ></Label>
              )}
            ></ErrorMessage>
          </FormField>

          <FormField
            required
            control={Input}
            width={4}
            label="Son müraciət tarixi"
          >
            <Field
              name="applicationDeadline"
              placeholder="Namizədin son müraciət tarixi"
            ></Field>
            <ErrorMessage
              name="applicationDeadline"
              render={(error) => (
                <Label
                  icon="ban fitted"
                  pointing="left"
                  basic
                  color="red"
                  content={error}
                ></Label>
              )}
            ></ErrorMessage>
          </FormField>
        </FormGroup>

        <Button animated="fade" color="teal" type="submit">
          <Button.Content visible>Yayımla</Button.Content>
          <Button.Content hidden>
            <Icon name="upload" />
          </Button.Content>
        </Button>
      </Form>
    </Formik>
  );
}
