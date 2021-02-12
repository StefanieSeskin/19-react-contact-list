import { Link } from 'react-router-dom';
import contactJSON from '../contact.json'
import { useState } from 'react'
import '../App.css';

export default function ContactDetail(props) {
    const id = props.match.params.id
   
    const [contacts, setContacts] = useState(contactJSON)
    const [activeUser, setActiveUser] = useState(contacts.find((contact) => contact.id == id))
    
    console.log(activeUser)
  
    return <div className = "contactDetails">
            <div className = "contactPhoto">{<Link to="/">Back</Link>}</div>
        {activeUser.name.first} {activeUser.name.last}
        <p>{activeUser.email}</p>
        <p>{activeUser.phone}</p>
        <p>{activeUser.cell}</p>
        <p>{activeUser.location.city}, {activeUser.location.state}</p>

    </div>
  }