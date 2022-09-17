import React from 'react';

export function Contacts({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => {
        return <li key={contact.id}>{contact.name}</li>;
      })}
    </ul>
  );
}
