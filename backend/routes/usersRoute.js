import express, { response } from 'express';
import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Route to register an user
router.post('/', async (request, response) => {
    try{
        if (
            !request.body.name ||
            !request.body.email ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: 'Send all required fields: name, email, password',
            });
        }

        // hashing password for encryption
        const hashedPassword = await bcrypt.hash(request.body.password, 10);

        const newUser = {
            name: request.body.name,
            email: request.body.email,
            password: hashedPassword,
        };

        const user = await User.create(newUser);

        return response.status(201).send(user);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.post('/login', async (request, response) => {
    const user = await User.findOne({ email: request.body.email });

    if (user) {
        try {
            if (await bcrypt.compare(request.body.password, user.password)) {
                response.json("Success");
            }
            else {
                response.json("Wrong Password");
            }
        } catch (error) {
            console.log(error.message);
            response.status(500).json("Wrong Password");
        }
    } else {
        response.status(400).json("No Account Found");
    }
});

// get all users 
router.get('/', async (request, response) => {
    try{
        const users = await User.find({});

        return response.status(200).json({
            count: users.length,
            data: users
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;