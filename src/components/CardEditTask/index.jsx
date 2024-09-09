import { useState } from "react";
import { ModalContainer, ModalContent } from "./styles";
import { api } from "../../services/api";
import { XIcon } from "lucide-react";

export function CardEditTask({ isOpen, onClose, task, setTasks }) {
  const [status, setStatus] = useState(task.status);

  const handleUpdateTask = async () => {
    const isCompleted = status === "completed";
    try {
      await api.put(`/tasks/${task.id}`, { status, is_completed: isCompleted });
      setTasks((prevTasks) =>
        prevTasks.map((t) =>
          t.id === task.id ? { ...t, status, is_completed: isCompleted } : t
        )
      );
      onClose();
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  return isOpen ? (
    <ModalContainer>
      <ModalContent>
        <XIcon onClick={onClose} size={26} />
        <h4>Editar Tarefa</h4>
        <div>
          <label>
            <input
              type="checkbox"
              checked={status === "in_progress"}
              onChange={() => setStatus("in_progress")}
            />
            Em Progresso
          </label>
          <label>
            <input
              type="checkbox"
              checked={status === "completed"}
              onChange={() => setStatus("completed")}
            />
            Concluída
          </label>
        </div>
        <button onClick={handleUpdateTask}>Salvar</button>
      </ModalContent>
    </ModalContainer>
  ) : null;
}
