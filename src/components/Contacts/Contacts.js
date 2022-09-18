import React from 'react';

export function Contacts({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
