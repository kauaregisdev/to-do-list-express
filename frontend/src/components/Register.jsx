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
        <form id="register-form" onSubmit={handleSubmit}>
            <h2>Registro de usuários</h2>
            <input
                type="text"
                name="username"
                placeholder="Nome de usuário:"
                value={formData.username}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="password"
                placeholder="Senha:"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="submit">Registrar usuário</button>
            {message && <p>{message}</p>}
        </form>
    );
}