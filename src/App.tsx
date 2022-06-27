import { useState } from "react";
import "./App.css";

import Layout from "./components/Layouts";
import Input from "./components/Input";
import Button from "./components/Button";
import ToDoList from "./components/ToDoList";

const toDoData = ["Learn React", "Learn TypeScript"];

function App() {
  const [todos, setTodos] = useState(toDoData);
  const [input, setInput] = useState("");
  const addTodo = () => {
    setTodos([...todos, input]);
  };

  const onDelete = (index: number) => {
    const filtered = todos.filter((_, i) => i !== index);
    setTodos(filtered);
  };

  return (
    <Layout>
      <Input onChange={(e) => setInput(e.target.value)} value={input} />
      <Button onClick={addTodo}>Add</Button>
      <ToDoList list={todos} onDelete={onDelete} />
    </Layout>
  );
}

export default App;
