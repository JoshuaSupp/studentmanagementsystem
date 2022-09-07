import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import "./Teachers.css";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Teachers = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    teachername: "",
    age: "",
    classes: "",
    phone: "",
    address: "",
  });

  const [editFormData, setEditFormData] = useState({
    teachername: "",
    age: "",
    classes: "",
    phone: "",
    address: "",
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
      teachername: addFormData.teachername,
      age: addFormData.age,
      classes: addFormData.classes,
      phone: addFormData.phone,
      address: addFormData.address,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      teachername: editFormData.teachername,
      age: editFormData.age,
      classes: editFormData.classes,
      phone: editFormData.phone,
      address: editFormData.address,
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
      teachername: contact.teachername,
      age: contact.age,
      classes: contact.classes,
      phone: contact.phone,
      address: contact.address,
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
      <h2 class="instructorheading">
        <u>Instructors</u>
      </h2>
      <div class="explorebody">
        <div className="app-container">
          <form onSubmit={handleEditFormSubmit}>
            <table>
              <thead>
                <tr>
                  <th>Instructor Name</th>
                  <th>Age</th>
                  <th>Current Classes</th>
                  <th>Phone</th>
                  <th>Address</th>
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

          <h2 class="contactheading">Add Instructor</h2>
          <form onSubmit={handleAddFormSubmit}>
            <div class="adminform">
              <input
                type="text"
                name="teachername"
                required="required"
                placeholder="Enter Instructor's Name..."
                onChange={handleAddFormChange}
              />
              <input
                type="number"
                name="age"
                required="required"
                placeholder="Enter Instructor's Age..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="classes"
                required="required"
                placeholder="Enter Instructor's Ongoing Classes..."
                onChange={handleAddFormChange}
              />
              <input
                type="phoneNumber"
                name="phone"
                required="required"
                placeholder="Enter Instructor's Phone Number..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="address"
                required="required"
                placeholder="Enter Instructor's Address..."
                onChange={handleAddFormChange}
              />
            </div>
            <button class="addbutton" type="submit">
              Add
            </button>
            <button class="clearbutton" type="reset">
              Clear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
