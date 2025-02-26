//schema's 

import * as Yup from 'yup';

export const ContactForm = Yup.object().shape({
    Name: Yup.string().required("Name is required Ex: Jesika"),
    email: Yup.string().email("Invalid email format").required("Email is required Ex: contact@amourtechnology.com"),
    Phone: Yup.string().required("Phone is required Ex: 123-456-7890").matches(/^[0-9-+()\s]*$/, "Invalid phone number format"),
    service: Yup.string().required("Service is required Ex: Web Development"),
    'project type': Yup.string().required("Project type is required Ex: E-commerce"),
    'Project deadline': Yup.date().required("Project deadline is required Ex: 2023-12-31"),
    msg: Yup.string().required("Message is required Ex: Please provide more details about your project"),
  });


export const footerEmailForm = Yup.object().shape({
    Gmail: Yup.string().required("Gmail is required Ex: contact@amourtechnology.com"),
});