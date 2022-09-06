import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import "./Classes.css";
import EditableRow from "../EditableRow";
import ReadOnlyRow from "../ReadOnlyRow";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Explore = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    classname: "",
    studentnumber: "",
    status: "",
    startdate: "",
  });

  const [editFormData, setEditFormData] = useState({
    classname: "",
    studentnumber: "",
    status: "",
    startdate: "",
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
      classname: addFormData.classname,
      studentnumber: addFormData.studentnumber,
      status: addFormData.status,
      startdate: addFormData.startdate,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      classname: editFormData.classname,
      studentnumber: editFormData.studentnumber,
      status: editFormData.status,
      startdate: editFormData.startdate,
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
      classname: contact.classname,
      studentnumber: contact.studentnumber,
      status: contact.status,
      startdate: contact.startdate,
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
                  <th>Class Name</th>
                  <th>Student Number</th>
                  <th>Phone Number</th>
                  <th>Status</th>
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

export default Explore;
