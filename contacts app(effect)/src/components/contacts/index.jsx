import { useState } from 'react'
import List from './List';
import Form from './Form';
import './style.css';

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      name: "ali",
      number: "132324"
    },
    {
      name: "veli",
      number: "153713"
    }
  ]);
  return (
    <div id='anaKutu'>
      <List contacts={contacts}></List>
      <Form addContact={setContacts} contacts={contacts}></Form>
    </div>
  )
}

export default Contacts