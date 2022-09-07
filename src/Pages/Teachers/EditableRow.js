import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Instructor's Name..."
          name="teachername"
          value={editFormData.teachername}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="phoneNumber"
          required="required"
          placeholder="Enter Instructor's Age..."
          name="age"
          value={editFormData.age}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Instructor's Ongoing Classes..."
          name="classes"
          value={editFormData.classes}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="phoneNumber"
          required="required"
          placeholder="Enter Instructor's Phone Number..."
          name="phone"
          value={editFormData.phone}
          onChange={handleEditFormChange}
        ></input>
        <input
          type="text"
          required="required"
          placeholder="Enter Instructor's Address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
