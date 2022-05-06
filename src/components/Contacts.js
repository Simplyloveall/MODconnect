import React from "react";
import contactsjson from "../contacts.json";

let contacts = contactsjson;
function Contacts() {
  const [contacts, setContacts] = React.useState([]);
  const [contact, setContact] = React.useState({
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    address: "",
    // IsColleague: false,
  });

  // function addNewContact(contact) {
  //   contact = {
  //     firstName: { firstName },
  //     lastName: { lastName },
  //     phoneNumber: { phoneNumber },
  //     address: { address },
  //   };
  // }

  function addContact() {
    if (contacts.length > 0) {
      setContacts(contacts.concat(contact));

      console.log(addNewContact(info));

      // function addToContacts() {
      //   setContacts(contacts.concat(contact));
    }

    return (
      <div>
        <form onSubmit={addNewContact}>
          <h3>First Name</h3>
          <input
            onChange={(e) => setContact(e.target.value)}
            type="text"
            name="firstName"
            value={firstName}
          ></input>
          <input
            onChange={(e) => setContact(e.target.value)}
            type="text"
            name="lastName"
            value={lastName}
          ></input>
          <input
            onChange={(e) => setContact(e.target.value)}
            type="number"
            name="phoneNumber"
            value={phoneNumber}
          ></input>
          <input
            onChange={(e) => setContact(e.target.value)}
            type="text"
            name="address"
            value={address}
          ></input>
          <input
            onChange={(e) => setContact(e.target.value)}
            type="boolean"
            name="colleague"
            // value={colleague}
          ></input>
          <button type="button">Add a new Contact</button>
        </form>
        {contacts.map((contact) => {
          return (
            <div>
              <p>{contact.firstName}</p>
              <p>{contact.lastName}</p>
              <p>{contact.phoneNumber}</p>
              <p>{contact.address}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Contacts;
