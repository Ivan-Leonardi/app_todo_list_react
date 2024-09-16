import { useState, useEffect } from "react";
import {
    Container,
    ContainerCards,
    Header,
    Titleh2,
    ModalContainer,
    ModalContent,
} from "./styles";
import { TaskCard } from "../../components/CardTask";
import { TaskForm } from "../../components/FormTask";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { ListTasks } from "../../components/ListTask";
import { LogOut, XIcon } from "lucide-react";
import { CardAddNewTask } from "../../components/CardAddNewTask";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
    const [tasks, setTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    function handleLogout() {
        logout();
        navigate("/");
    }

    useEffect(() => {
        async function getTasks() {
            const response = await api.get("/tasks");
            setTasks(response.data);
        }

        getTasks();
    }, []);

    const tasksPending = tasks.filter((task) => task.status === "pending");
    const tasksInProgress = tasks.filter(
        (task) => task.status === "in_progress"
    );
    const tasksCompleted = tasks.filter((task) => task.status === "completed");

    if (!user) {
        return <div>Erro...Faça o login</div>;
    }

    return (
        <Container>
            <Header>
                <div>
                    <h3>Olá {user.firstName}</h3>
                </div>
                <div>
                    <LogOut onClick={handleLogout} size={26} />
                    Sair
                </div>
            </Header>

            <Titleh2>Gerencie suas tarefas diárias</Titleh2>

            <ContainerCards>
                <CardAddNewTask onClick={handleOpenModal} />
                <TaskCard
                    status="Tarefas pendentes"
                    count={tasksPending.length}
                />
                {isModalOpen && (
                    <ModalContainer>
                        <ModalContent>
                            <XIcon onClick={handleCloseModal} size={26} />
                            <TaskForm setTasks={setTasks} />
                        </ModalContent>
                    </ModalContainer>
                )}
                <TaskCard
                    status="Tarefas em progresso"
                    count={tasksInProgress.length}
                />
                <TaskCard
                    status="Tarefas concluídas"
                    count={tasksCompleted.length}
                />
            </ContainerCards>

            <ListTasks tasks={tasks} setTasks={setTasks} key={tasks.title} />
        </Container>
    );
}
