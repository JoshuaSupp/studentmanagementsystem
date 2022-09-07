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
          placeholder="Enter Student's name..."
          name="anname"
          value={editFormData.anname}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter Student's Age..."
          name="anage"
          value={editFormData.anage}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Present Class..."
          name="anclasses"
          value={editFormData.anclasses}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Parent Name..."
          name="anparentname"
          value={editFormData.anparentname}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="phone"
          required="required"
          placeholder="Enter Phone Number..."
          name="phone"
          value={editFormData.phone}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Address..."
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
