import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Layout() {
    const { isAuthenticated, logout } = useAuth();
    return (
        <>
        <header className="bg-blue-600 rounded-xl text-white shadow-md mb-5">
            <nav className="container mx-auto flex items-center justify-around py-4 px-6">
                <Link to='/' className="hover:underline">Home</Link>
                <Link to='/tasks' className="hover:underline">Tarefas</Link>
                <Link to='/login' className="hover:underline">Login</Link>
                <Link to='/register' className="hover:underline">Criar usuário</Link>
                {isAuthenticated && <button className="cursor-pointer hover:underline" onClick={logout}>Logout</button>}
            </nav>
        </header>
        <main className="container rounded-xl mx-auto py-8 px-4 min-h-screen bg-gray-50">
            <Outlet />
        </main>
        <footer className="bg-gray-800 rounded-xl text-white text-center py-4 mt-3">
            <small>© 2025 - Todos os direitos reservados</small>
        </footer>
        </>
    );
}