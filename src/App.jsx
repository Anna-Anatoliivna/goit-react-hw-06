import { useEffect } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { SearchBox } from './components/SearchBox/SearchBox';
import { ContactList } from './components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from './redux/contacts/contactsReducer';
import { setFilterValue } from './redux/filter/filterReducer';

const App = () => {
  // const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts")) ??
  //     [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ]
  // );

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  });

  const filterValue = useSelector(state => state.filter.filterValue);
  // const [filterValue, setFilterValue] = useState('');

  const onContactForm = contact => {
    const finalContact = {
      ...contact,
      id: nanoid(),
    };
    dispatch(addContact(finalContact));
    // setContacts([finalContact, ...contacts])
  };

  const handleFilter = e => {
    const value = e.target.value;
    const action = setFilterValue (value);
    dispatch(action);
    // setFilterValue(value)
    console.log(value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase()),
  );

  const onDelContact = contactId => {
    dispatch(deleteContact(contactId));
    // setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div>
      <>
        <h1>Phonebook</h1>
        <ContactForm onContactForm={onContactForm} />
        <SearchBox
          handleFilter={handleFilter}
          value={filterValue}
          onChange={handleFilter}
        />
        <ContactList contacts={filteredContacts} onDelContact={onDelContact} />
      </>
    </div>
  );
};

export default App;
