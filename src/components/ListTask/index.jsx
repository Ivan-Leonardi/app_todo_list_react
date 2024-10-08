import { useState } from "react";
import { TaskContainer, TaskItem } from "./styles";
import { Trash, Pencil } from "lucide-react";
import { api } from "../../services/api";
import { CardEditTask } from "../CardEditTask";
import dayjs from "dayjs";
import { toast } from "sonner";

export function ListTasks({ tasks, setTasks }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const openModal = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    async function deleteTask(taskId) {
        try {
            await api.delete(`/tasks/${taskId}`);
            setTasks((prevTasks) =>
                prevTasks.filter((task) => task.id !== taskId)
            );
            toast.success("Tarefa deletada!");            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <TaskContainer>
            <div>
                {tasks && tasks.length > 0 ? (
                    tasks.map((task) => (
                        <TaskItem key={task.id} status={task.status}>
                            <section>
                                <div>
                                    <h4>{task.title}</h4>
                                    <p>{task.description}</p>
                                    <span>
                                        {" "}
                                        Prazo:{" "}
                                        {dayjs(task.due_date).format(
                                            "DD-MM-YYYY"
                                        )}
                                    </span>
                                </div>
                                <div>
                                    <Pencil onClick={() => openModal(task)} />
                                    <Trash
                                        onClick={() => deleteTask(task.id)}
                                    />
                                </div>
                            </section>
                        </TaskItem>
                    ))
                ) : (
                    <p>Nenhuma tarefa encontrada!</p>
                )}
                {selectedTask && (
                    <CardEditTask
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        task={selectedTask}
                        setTasks={setTasks}
                    />
                )}
            </div>
        </TaskContainer>
    );
}
