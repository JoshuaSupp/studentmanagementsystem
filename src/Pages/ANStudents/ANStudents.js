import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "./mock-data-an1e05.json";
import "./ANStudents.css";
import EditableRow from "./EditableRow";
import ReadOnlyRow from "./ReadOnlyRow";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Students = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    anname: "",
    anage: "",
    anclasses: "",
    anparentname: "",
    phone: "",
    address: "",
  });

  const [editFormData, setEditFormData] = useState({
    anname: "",
    anage: "",
    anclasses: "",
    anparentname: "",
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
      anname: addFormData.anname,
      anage: addFormData.anage,
      anclasses: addFormData.anclasses,
      anparentname: addFormData.anparentname,
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
      anname: editFormData.anname,
      anage: editFormData.anage,
      anclasses: editFormData.anclasses,
      anparentname: editFormData.anparentname,
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
      anname: contact.anname,
      anage: contact.anage,
      anclasses: contact.anclasses,
      anparentname: contact.kxparentname,
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

      <div class="explorebody">
        <div className="app-container">
          <h2 class="studentheading">AN1E05</h2>
          <form onSubmit={handleEditFormSubmit}>
            <table>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Student Age</th>
                  <th>Present Class</th>
                  <th>Parent Name</th>
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
          <h2 class="studentheading">Add Student</h2>
          <form onSubmit={handleAddFormSubmit}>
            <div class="adminform">
              <input
                type="text"
                name="anname"
                required="required"
                placeholder="Enter Student's Name..."
                onChange={handleAddFormChange}
              />
              <input
                type="number"
                name="anage"
                required="required"
                placeholder="Enter Student's Age..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="anclasses"
                required="required"
                placeholder="Enter Students's Present Classes..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="anparentname"
                required="required"
                placeholder="Enter Parent's Name..."
                onChange={handleAddFormChange}
              />
              <input
                type="phone"
                name="phone"
                required="required"
                placeholder="Enter Student's Phone..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="address"
                required="required"
                placeholder="Enter Student's Address..."
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

export default Students;
