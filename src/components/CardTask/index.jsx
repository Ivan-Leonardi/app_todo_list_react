import { Card } from './styles'

export function TaskCard({ status, count }) {
  return (
    <Card>
      <strong>{status}</strong>
      <p>{count} Tarefas</p>
    </Card>
  );
}
