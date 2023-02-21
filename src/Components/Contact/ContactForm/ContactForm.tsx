import React from "react";
import s from './ContactForm.module.css'
import {Formik, Field, Form, FormikHelpers} from 'formik';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faComments} from "@fortawesome/free-solid-svg-icons/faComments";

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
                {/*<label htmlFor="firstName">First Name</label>*/}
                <div className={s.email}>
                    <FontAwesomeIcon icon={faEnvelope} className={s.fa}/>
                    <Field id="firstName" name="firstName" placeholder="YOUR NAME"/>
                </div>

                {/*<label htmlFor="email"></label>*/}

                <div className={s.email}>
                    <FontAwesomeIcon icon={faUser} className={s.fa}/>
                    <Field
                        id="email"
                        name="email"
                        placeholder="YOUR EMAIL"
                        type="email"
                    />
                </div>

                {/*<label htmlFor="message">your message</label>*/}
                <div className={s.message}>
                    <FontAwesomeIcon icon={faComments} className={s.fa}/>
                    <Field id="message" name="message" placeholder="YOUR MESSAGE" as={'textarea'}/>
                </div>

                <div className={s.submit}>
                    <button className={s.btn} type="submit">
                        <span>
                            <FontAwesomeIcon icon={faPaperPlane} className={s.fa}/>
                            Send Message
                        </span>
                    </button>
                </div>

            </Form>
        </Formik>
    </div>
}