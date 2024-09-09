import { Form, Input, Button, FormGroup, Label } from "./syles";
import { api } from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function TaskForm({ setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const navigate = useNavigate();

  async function handleAddTask() {    
    const newTask = {
      title,
      description,
      due_date: dueDate,
    };

    try {
      const response = await api.post("/tasks", newTask);
      setTasks((prevTasks) => [...prevTasks, response.data]);
      setTitle("");
      setDescription("");
      setDueDate("");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form>        
       <FormGroup>
        <Label htmlFor="title">Título</Label>
        <Input
          type="text"
          id="title"          
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="description">Descrição</Label>
        <Input
          type="text"
          id="description"          
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="dueDate">Prazo para conclusão</Label>
        <Input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </FormGroup>
      <Button onClick={handleAddTask}>Adicionar tarefa</Button>
    </Form>
  );
}
