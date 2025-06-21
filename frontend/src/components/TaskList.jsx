import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import { getToken, api } from "../api/api";

export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        carregarTarefas();
    }, []);

    async function carregarTarefas() {
        setLoading(true);
        let token = localStorage.getItem('token');
        if (!token) {
            token = await getToken('admin', 'admin123');
            localStorage.setItem('token', token);
        }
        api.get('tasks/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            setTasks(res.data);
            setLoading(false);
        })
        .catch(err => {
            setTasks([]);
            setLoading(false);
            console.error(err);
        });
    }

    async function deletarTarefa(id) {
        if (window.confirm('Deseja realmente excluir esta tarefa?')) {
            let token = localStorage.getItem('token');
            if (!token) {
                token = await getToken('admin', 'admin123');
            }
            api.delete(`tasks/${id}/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(() => {
                alert('Tarefa excluída com sucesso!');
                setTasks(tasks.filter(task => task._id !== id));
            })
            .catch(err => {
                alert('Erro ao excluir tarefa.');
                console.error(err);
            })
        }
    }

    if (loading) return <p id="loading">Carregando tarefas...</p>;

    return (
        <div className="max-w-2xl mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Tarefas existentes</h2>
            <ul id="tarefas">
                {tasks.map((task) => (
                    <TaskCard
                        key={task.id}
                        task={task}
                        onRemover={() => deletarTarefa(task._id)}
                    />
                ))}
            </ul>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Enviar tarefa</h2>
            <TaskForm onUpload={carregarTarefas} />
        </div>
    );
}