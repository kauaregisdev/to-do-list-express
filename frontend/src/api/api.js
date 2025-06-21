import axios from 'axios';

export async function getTokenData(username, password) {
    const res = await axios.post(import.meta.env.VITE_API_URL + '/api/token', {
        username,
        password
    });
    return res.data;
}

const api = axios.create({
    baseURL: 'http://localhost:3000/'
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access');
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (err) => Promise.reject(err)
);

api.interceptors.response.use(
    (response) => response,
    async (err) => {
        const originalRequest = err.config;
        if (
            err.response &&
            err.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            try {
                const res = await axios.post('http://localhost:8000/token', {
                    username: 'admin',
                    password: 'admin123'
                });
                localStorage.setItem('access', res.data.access);
                originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
                return api(originalRequest);
            } catch (refreshError) {
                alert('Erro de autenticação.');
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(err);
    }
);