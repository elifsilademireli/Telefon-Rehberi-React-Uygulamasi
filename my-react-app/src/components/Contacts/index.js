import { useState, useEffect } from 'react'

import {} from './style.css'


import List from './List'
import Form from './Form'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: 'Elif Sıla',
            phoneNumber: "123123123"
        }, {
            fullname: 'Defne',
            phoneNumber: "456456456"
        }, {
            fullname: 'Cevahir',
            phoneNumber: "789789789"
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]
    )

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    );
}

export default Contacts;

