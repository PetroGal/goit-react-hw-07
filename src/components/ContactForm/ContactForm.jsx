import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsSlice';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('This field is required'),
  number: Yup.string()
    .min(3, 'Minimum 3 numbers')
    .max(50, 'Maximum 50 symbols')
    .required('This field is required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        ...values,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.nameWrap}>
          <label className={css.nameLabel} htmlFor="name">
            Name
          </label>
          <Field className={css.nameInput} type="text" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div className={css.phoneWrap}>
          <label className={css.phoneLabel} htmlFor="number">
            Number
          </label>
          <Field className={css.phoneInput} type="number" name="number" />
          <ErrorMessage name="number" />
        </div>
        <button className={css.formBtn}>Add contact</button>
      </Form>
    </Formik>
  );
}
