import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import {
  Label,
  FormContainer,
  InputField,
  SubmitButton,
  StyleForm,
} from './ContactForm.styled';
function ContactForm() {
  const contacts = useSelector(state => state.contacts.list);
  const dispatch = useDispatch();

  const handleSubmitForm = (values, { resetForm }) => {
    const { name, number } = values;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} already exists.`);
      resetForm();
      return;
    }

    dispatch(addContact(name, number));

    const updatedContacts = [...contacts, { name, number }];
    window.localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    toast.success(`${name} has successfully added to your phonebook`);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmitForm}
    >
      {({ handleSubmit }) => (
        <FormContainer>
          <StyleForm onSubmit={handleSubmit}>
            <Label htmlFor="name">Name:</Label>
            <InputField
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            />
            <Label htmlFor="number">Number:</Label>
            <InputField
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              required
            />
            <SubmitButton type="submit">Add Contact</SubmitButton>
            <Toaster />
          </StyleForm>
        </FormContainer>
      )}
    </Formik>
  );
}

export default ContactForm;
