require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const { swaggerUi, swaggerSpec } = require('./swagger');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/task');
const connectDatabase = require('./config/database');

(async () => {
    app.use(cors({
        origin: 'http://localhost:5173',
        credentials: true
    }));
    app.use(express.json());
    app.use('/admin', adminRoutes);
    app.use('/auth', authRoutes);
    app.use('/tasks', taskRoutes);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    console.log('Connecting database...');
    await connectDatabase();

    console.log('Running server...');
    app.listen(3000, () => console.log('✅ Server running at http://localhost:3000\nSwagger docs: http://localhost:3000/api-docs'));
})();