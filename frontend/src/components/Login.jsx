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
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Usuário:"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Senha:"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 cursor-pointer rounded-lg hover:bg-blue-700 transition">Entrar</button>
                {message && <p className="mt-5">{message}</p>}
            </form>
        </div>
    );
}