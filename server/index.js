import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';

import { registerValidation, loginValidation, postCreateValidation } from './validations.js';
import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js';

mongoose
    .connect('mongodb+srv://malovaniyy:12345@cluster0.gryuto4.mongodb.net/blog?retryWrites=true&w=majority',)
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB err', err));

const app = express();

const storage = multer.diskStorage({                // создаем хранилище для картинок

});

app.use(express.json());

app.use('/img', express.static('img'));


app.post('/auth/login', loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe); // app.get для получение ифнормации

app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, postCreateValidation, PostController.create);
app.delete('/posts/:id', checkAuth, PostController.remove);
app.patch('/posts/:id', checkAuth, PostController.update);


app.listen(5000, (err) => {
    if (err) {
        return console.log('err');
    }

    console.log('Сервер запущен на порту 5000');
})