import { useState } from "react";

function AddTodo({ onAdd }) {
    const [text, setText] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd(text);
      setText('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>
    );
  }

  export default AddTodo;