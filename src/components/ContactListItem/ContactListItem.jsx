export const ContactListItem = ({ contact, handleDeleteContact }) => {
  return (
    <li>
      <span>{contact.name}: </span>
      <span>{contact.number}</span>
      <button type="button" onClick={() => handleDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};
