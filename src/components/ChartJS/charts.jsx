import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export function TaskChart({ tasksPending, tasksInProgress, tasksCompleted }) {
    // Dados do gráfico
    const data = {
        labels: ["Tarefas Pendentes", "Tarefas em Progresso", "Tarefas Concluídas"],
        datasets: [
            {
                data: [tasksPending, tasksInProgress, tasksCompleted],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.6)",
                    "rgba(54, 162, 235, 0.6)",
                    "rgba(75, 192, 192, 0.6)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
            <Pie data={data} />
        </div>
    );
}
