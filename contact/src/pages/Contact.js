import { Link } from 'react-router-dom'
import { useState } from 'react'
import contactJSON from '../contact.json'
import '../App.css'
// console.log(contactJSON)
//PROPS --?
export default function Contact(props) {
    const [contacts, setContacts] = useState(contactJSON)
    return <div className="myContacts">
            <div className = "fullList"><h2>My Peeps</h2></div>
                <ul>
                    {contacts.map(contact => <li>
                        <Link contactId={contact.id}to={`detail/${contact.id}`}>
                            {contact.name.first} {contact.name.last}</Link>
                    </li>)}
                </ul>
        </div>
}