import React from "react";

function Contacts() {
  const [contacts, setContacts] = React.useState();

  return (
    <div>
      <h3>First Name</h3>
      <input
        onChange={(e) => setContacts(e.target.value)}
        name="firstName"
        value="firstName"
      ></input>
    </div>
  );
}

export default Contacts;
