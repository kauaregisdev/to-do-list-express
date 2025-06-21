import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Layout() {
    const { isAuthenticated, logout } = useAuth();
    return (
        <>
        <header>
            <nav>
                <Link to='/'>Home</Link> |{' '}
                <Link to='/dashboard'>Dashboard</Link> |{' '}
                <Link to='/login'>Login</Link> |{' '}
                <Link to='/register'>Criar usuário</Link>
                {isAuthenticated && <button className="logout" onClick={logout}>Logout</button>}
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <small>© 2025 - Todos os direitos reservados</small>
        </footer>
        </>
    );
}