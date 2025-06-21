import { useState } from "react";
import { getToken, api } from "../api/api";

export default function TaskForm({onUpload}) {
    const [title, setTitle] = useState('');
    const [done, setDone] = useState(false);

    const handleChange = (e) => {
        setDone(e.target.value === 'concluida' ? true : false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token');
        if (!token) {
            token = await getToken('admin', 'admin123');
            localStorage.setItem('token', token);
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('done', done);

        try {
            await api.post('tasks/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            if (onUpload) onUpload();
            alert('Tarefa enviada com sucesso!');
            setTitle('');
            setDone(false);
            e.target.reset();
        } catch (err) {
            alert('Erro ao enviar tarefa.');
            console.error(err);
        }
    };

    return (
        <form id="task-form" onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 mt-6 space-y-4">
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Título da tarefa:"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status:</label>
            <select id="status" name="status" onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2">
                <option value="pendente">Pendente</option>
                <option value="concluida">Concluída</option>
            </select>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Enviar tarefa</button>
        </form>
    );
}