import { TaskContainer, TaskItem } from "./styles";
import { Trash, Pencil } from "lucide-react";

import { api } from "../../services/api";

export function ListTasks({ tasks, setTasks }) {
  async function updateTask(taskId, status) {
    try {
      await api.put(`/tasks/${taskId}`, { status });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, status } : task
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteTask(taskId) {
    try {
      await api.delete(`/tasks/${taskId}`);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <TaskContainer>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem key={task.id} status={task.status}>
            <section>
              <div>
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <span>Prazo: {task.due_date}</span>
              </div>
              <div>
                <Pencil />
                <Trash onClick={() => deleteTask(task.id)} />
              </div>
            </section>
          </TaskItem>
        ))
      ) : (
        <p>No tasks available</p>
      )}
    </TaskContainer>
  );
}
