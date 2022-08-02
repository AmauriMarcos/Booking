import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from ROOMS');
})

router.get('/register', (req, res) => {
    res.send('Hi from ROOMS register')
})

export default router;