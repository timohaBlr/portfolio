import React from "react";
import s from './ContactForm.module.css'
import {Formik, Field, Form, FormikHelpers} from 'formik';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faComments} from "@fortawesome/free-solid-svg-icons/faComments";
import Button from "../../../Common/Button/Button";

type Values = {
    firstName: string;
    message: string;
    email: string;
}


export const ContactForm = () => {
    return <div className={s.contactForm}>
        <p>
            If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I
            will reply you shortly.
        </p>
        <Formik
            initialValues={{
                firstName: '',
                email: '',
                message: '',
            }}
            onSubmit={(
                values: Values,
                {setSubmitting}: FormikHelpers<Values>
            ) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
        >
            <Form className={s.form}>

                <div className={s.email}>
                    <FontAwesomeIcon icon={faEnvelope} className={s.fa}/>
                    <Field id="firstName" name="firstName" placeholder="YOUR NAME"/>
                </div>

                <div className={s.email}>
                    <FontAwesomeIcon icon={faUser} className={s.fa}/>
                    <Field
                        id="email"
                        name="email"
                        placeholder="YOUR EMAIL"
                        type="email"
                    />
                </div>

                <div className={s.message}>
                    <FontAwesomeIcon icon={faComments} className={s.fa}/>
                    <Field id="message" name="message" placeholder="YOUR MESSAGE" as={'textarea'}/>
                </div>

                <div className={s.submit}>
                    <Button name={'Send Message'} icon={faPaperPlane}/>
                </div>

            </Form>
        </Formik>
    </div>
}