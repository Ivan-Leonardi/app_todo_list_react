import { CardNewTask } from "./styles"
import { Plus } from "lucide-react";

export function CardAddNewTask({ onClick }) {
    return (
        <CardNewTask onClick={onClick}>
            <strong>Add nova tarefa</strong>
            <Plus />
        </CardNewTask>
    )
}