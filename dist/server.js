import express from 'express';
import router from './router.js';
import morgan from 'morgan';
import { protect } from './modules/auth.js';
import { createNewUser, signIn } from './handlers/user.js';
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send("Doggie");
});
console.log("it comes to this");
app.use('/api', protect, router);
app.post('/user', createNewUser);
app.post('signin', signIn);
export default app;
