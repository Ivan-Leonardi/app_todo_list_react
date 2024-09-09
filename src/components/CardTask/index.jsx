import { Card } from "./styles";

export function TaskCard({ status, count }) {
  const BorderColorStatus = (status) => {
    switch (status) {
      case "Tarefas pendentes":
        return "#523F00"; // Amarelo
      case "Tarefas em progresso":
        return "#007bff"; // Azul
      case "Tarefas concluídas":
        return "#28a745"; // Verde
      default:
        return "#cccccc"; // Cinza para status desconhecidos
    }
  };

  return (
    <Card style={{ borderColor: BorderColorStatus(status) }}>
      <strong>{status}</strong>
      <p>{count} Tarefas</p>
    </Card>
  );
}
