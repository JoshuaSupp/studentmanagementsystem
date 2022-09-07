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
                  <th>Status</th>
                  <th>Start Date</th>
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

          <h2 class="contactheading">Add Class</h2>
          <form onSubmit={handleAddFormSubmit}>
            <div class="adminform">
              <input
                type="text"
                name="classname"
                required="required"
                placeholder="Enter Class Name..."
                onChange={handleAddFormChange}
              />
              <input
                type="number"
                name="studentnumber"
                required="required"
                placeholder="Enter Number Of Students..."
                onChange={handleAddFormChange}
              />
              <input
                type="text"
                name="status"
                required="required"
                placeholder="Enter Class Status..."
                onChange={handleAddFormChange}
              />
              <input
                type="Date"
                name="startdate"
                required="required"
                placeholder="Enter Class Start Date..."
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
