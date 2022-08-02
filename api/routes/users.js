import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from USERS');
})

router.get('/register', (req, res) => {
    res.send('Hi from USERS REGISTER')
})

export default router;