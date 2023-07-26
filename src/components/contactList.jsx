import React from "react";
import ContactRow from "./contactRow";
const ContactList = ({ contacts, setSelectedContactID}) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return (
            <ContactRow
              key={contact.id}
              contact={contact}
              setSelectedContactId={setSelectedContactID}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
