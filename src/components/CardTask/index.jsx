import { Card } from "./styles";

export function TaskCard({ status, count }) {
  const BorderColorStatus = (status) => {
    switch (status) {
      case "Tarefas pendentes":
        return "#523F00"; 
      case "Tarefas em progresso":
        return "#007bff"; 
      case "Tarefas concluídas":
        return "#28a745";
      default:
        return "#cccccc";
    }
  };

  return (
    <Card style={{ borderColor: BorderColorStatus(status) }}>
      <strong>{status}</strong>
      <p>{count} Tarefas</p>
    </Card>
  );
}
