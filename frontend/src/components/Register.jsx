import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { api } from "../api/api";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev, [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('auth/register', formData);
            setMessage('Usuário registrado com sucesso!');
            let token = await api.post('auth/login', formData);
            localStorage.setItem('token', token);
            navigate('/dashboard');
        } catch (err) {
            setMessage(
                err.response?.data?.message || 'Erro ao registrar usuário.'
            );
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Registro de usuários</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="Nome de usuário:"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        name="password"
                        placeholder="Senha:"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 cursor-pointer rounded-lg hover:bg-blue-700 transition">Registrar usuário</button>
                {message && <p className="mt-5">{message}</p>}
            </form>
        </div>
    );
}