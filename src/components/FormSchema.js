import * as yup from "yup";

export const FormSchema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    studentNo: yup.string().required("Student Number is Required"),
    course: yup.string(),
    division: yup.string(),
    date: yup.string(),
})