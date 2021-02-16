// Most time was spent on other homework.  No time to style this.  I don't
// know why I flailed so much trying to style!

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
            <div className = "contactPhoto"><h2>A PHOTO</h2></div>
            <div className="individuals">
        {<Link to="/">Back</Link>}
        {activeUser.name.first} {activeUser.name.last}
        <p>{activeUser.email}</p>
        <p>{activeUser.phone}</p>
        <p>{activeUser.cell}</p>
        {activeUser.location.city}, {activeUser.location.state}
        
            </div>

    </div>
  }