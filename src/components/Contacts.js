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

  // const addContact = () => {
  //   setContacts([...contacts, contact]);
  // };

  function addContact(){
    setContacts(contacts.concat(contact))
    console.log(contact)
  }

        // function addToContacts() {
      //   setContacts(contacts.concat(contact));


  const handleChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    console.log('this')
    e.preventDefault();
    addContact(contact);
    setContact({ firstName: "", lastName: "", phoneNumber: 0, address: '' });
  };
  // function addNewContact(contact) {
  //   contact = {
  //     firstName: { firstName },
  //     lastName: { lastName },
  //     phoneNumber: { phoneNumber },
  //     address: { address },
  //   };
  // }

  // function addContact() {
  //   if (contacts.length > 0) {
  //     setContacts(contacts.concat(contact));

  //     console.log(addNewContact(info));

  //     // function addToContacts() {
  //     //   setContacts(contacts.concat(contact));
  //   }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h3>First Name</h3>
          <input
            onChange={handleChange}
            type="text"
            name="firstName"
            value={contact.firstName}
          ></input>
          <input
            onChange={handleChange}
            type="text"
            name="lastName"
            value={contact.lastName}
          ></input>
          <input
            onChange={handleChange}
            type="number"
            name="phoneNumber"
            value={contact.phoneNumber}
          ></input>
          <input
            onChange={handleChange}
            type="text"
            name="address"
            value={contact.address}
          ></input>
          {/* <input
            onChange={handleChange}
            type="boolean"
            name="colleague"
            // value={colleague}
          ></input> */}
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


export default Contacts;
