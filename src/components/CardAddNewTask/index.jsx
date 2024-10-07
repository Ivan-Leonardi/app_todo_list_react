import { CardNewTask } from "./styles"
import { Plus } from "lucide-react";

export function CardAddNewTask({ onClick }) {
    return (
        <CardNewTask onClick={onClick}>
            <strong>Criar tarefa</strong>
            <Plus />
        </CardNewTask>
    )
}