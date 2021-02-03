import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  getContacts,
  getLoader,
} from '../../redux/contacts/contacts-selectors';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import NumberContacts from '../../components/NumberContacts';

import styles from './ContactView.module.css';

function ContactView() {
  const contacts = useSelector(getContacts);
  const loader = useSelector(getLoader);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <div className="App">
      <Container>
        <h1 className={styles.main__title}>Phonebook</h1>
        <ContactForm />

        {contacts.length > 0 ? (
          <div>
            <h2 className={styles.section__title}>Contacts</h2>
            <Filter />
            <ContactList />
            <NumberContacts />
          </div>
        ) : (
          <p>Your phone book is empty :(</p>
        )}

        {loader && <p>Loading...</p>}

        <ToastContainer autoClose={3000} />
      </Container>
    </div>
  );
}

export default ContactView;
