import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from HOTELS');
})

router.get('/register', (req, res) => {
    res.send('Hi from HOTELS register')
})

export default router;