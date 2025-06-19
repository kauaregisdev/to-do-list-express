const mongoose = require('mongoose');

async function connectDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ MongoDB connected successfully!');
    } catch (err) {
        console.error('❌ Error at connecting to MongoDB:', err.message);
        process.exit(1);
    }
}

module.exports = connectDatabase;