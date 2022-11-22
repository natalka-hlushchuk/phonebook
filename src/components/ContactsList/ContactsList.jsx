import React from 'react';

const ContactsList = ({ contactsList }) => {
  return (
    <ul>
      {contactsList.map(({ name, number, id }) => (
        <li key={id}>
          {name} {number}
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
