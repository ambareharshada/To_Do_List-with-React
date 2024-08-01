import React from "react";

const ListItems = ({ dataItems, onDelete }) => {
  return (
    <>
      <ul>
        {dataItems.map((itemVal) => (
          <li key={itemVal.id}>
            {itemVal.inputList}
            <button onClick={() => onDelete(itemVal.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListItems;
