import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from AUTH');
})

router.get('/register', (req, res) => {
    res.send('Hi from register')
})

export default router;