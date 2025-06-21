import { useState } from "react";
import { useAuth } from '../auth/AuthContext';
import { getToken } from "../api/api";

export default function Login() {
    const {login} = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const token = await getToken(username, password);
            login(token);
            setMessage('Login realizado com sucesso!');
        } catch (err) {
            setMessage('Usuário ou senha inválidos.');
            console.error(err);
        }
    };

    return (
        <form id="form-login" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold">Login</h2>
            <input
                type="text"
                placeholder="Usuário:"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Senha:"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <button type="submit">Entrar</button>
            {message && <p>{message}</p>}
        </form>
    );
}