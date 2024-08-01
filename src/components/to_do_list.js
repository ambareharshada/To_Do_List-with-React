import React, { useState } from "react";
import ListItems from "./listItems";

const TODOLIST = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    setItems([...items, { id: Date.now(), inputList }]);
    setInputList("");
  };

  const handleDelete = (id) => {
    setItems(items.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>TO DO List</h1>
      <br />
      <input
        type="text"
        placeholder="Add a Items"
        value={inputList}
        onChange={(e) => {
          setInputList(e.target.value);
        }}
      />
      <button onClick={handleAdd}> Add </button>

      {items.length !== 0 ? (
        <ListItems dataItems={items} onDelete={handleDelete} />
      ) : (
        ""
      )}
    </>
  );
};
export default TODOLIST;
