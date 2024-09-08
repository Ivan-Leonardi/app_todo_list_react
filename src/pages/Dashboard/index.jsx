import { DashboardContainer, Header, TasksContainer, TaskCard, AddTaskButton } from "./styles"
import { useAuth } from "../../hooks/auth";

export function Dashboard() {
    const { user } = useAuth()
  return (
    <DashboardContainer>
      <Header>Olá, {user.firstName}! Suas tarefas de hoje</Header>
      <TasksContainer>
        <TaskCard priority="high">Tarefa 1 - Alta prioridade</TaskCard>
        <TaskCard priority="medium">Tarefa 2 - Média prioridade</TaskCard>
        <TaskCard priority="low">Tarefa 3 - Baixa prioridade</TaskCard>
      </TasksContainer>
      <AddTaskButton>+</AddTaskButton>
    </DashboardContainer>
  );
}
