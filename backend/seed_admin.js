const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();

const seedAdmin = async () => {
    try {
        await connectDB();
        
        // Remove existing user with admin email if any
        await User.deleteOne({ email: 'admin' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('admin', salt);

        const adminUser = new User({
            name: 'Admin',
            email: 'admin',      // using 'admin' as both username/email
            password: hashedPassword
        });

        await adminUser.save();
        console.log('Successfully seeded admin user: email=admin password=admin');
        process.exit();
    } catch (error) {
        console.error('Failed to seed admin', error);
        process.exit(1);
    }
};

seedAdmin();
