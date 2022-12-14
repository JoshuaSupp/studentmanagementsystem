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
          placeholder="Enter Class Name..."
          name="classname"
          value={editFormData.classname}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter Number Of Students..."
          name="studentnumber"
          value={editFormData.studentnumber}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Class Status..."
          name="status"
          value={editFormData.status}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="Date"
          required="required"
          placeholder="Enter Class Start Date..."
          name="startdate"
          value={editFormData.startdate}
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
