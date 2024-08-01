import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';

// import Counter from './components/counter';
import TODOLIST from './components/to_do_list';

function App() {
  // const [todos, setTodos] = useState([]);

  // const handleAdd = (text) => {
  //   setTodos([
  //     ...todos,
  //     { id: Date.now(), text },
  //   ]);
  // };

  // const handleDelete = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };
  return (
    <div className="App">
      <TODOLIST />
     {/* <Counter /> */}
     {/* <h1>Todo List</h1>
      <AddTodo onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} /> */}
    </div>
  );
}

export default App;




// List component
// function TodoList({ todos, onDelete }) {
//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>
//           {todo.text}
//           <button onClick={() => onDelete(todo.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// }
