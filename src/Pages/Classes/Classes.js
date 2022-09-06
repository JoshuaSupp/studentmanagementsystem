import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import "./Classes.css";
import EditableRow from "../EditableRow";
import ReadOnlyRow from "../ReadOnlyRow";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Classes = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    password: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    password: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      password: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      password: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      password: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div>
      <Sidebar />
      <div class="explorebody">
        <div className="app-container">
          <form onSubmit={handleEditFormSubmit}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Password</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <Fragment>
                    {editContactId === contact.id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        contact={contact}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>

          <h2 class="contactheading">Create Admin</h2>
          <form onSubmit={handleAddFormSubmit}>
            <div class="adminform">
              <input
                type="text"
                name="fullName"
                required="required"
                placeholder="Enter a name..."
                onChange={handleAddFormChange}
              />
              <input
                type="password"
                name="password"
                required="required"
                placeholder="Enter Your Password..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="phoneNumber"
                required="required"
                placeholder="Enter a phone number..."
                onChange={handleAddFormChange}
              />
              <input
                type="email"
                name="email"
                required="required"
                placeholder="Enter an email..."
                onChange={handleAddFormChange}
              />
            </div>
            <button class="addbutton" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Classes;
