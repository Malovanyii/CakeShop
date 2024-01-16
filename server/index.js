import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';

import { registerValidation, loginValidation, postCreateValidation } from './validations.js';

import { checkAuth, handleValidationErorrs } from './utils/index.js';
import { UserController, PostController } from './controllers/index.js';

mongoose
    .connect('mongodb+srv://malovaniyy:12345@cluster0.gryuto4.mongodb.net/blog?retryWrites=true&w=majority',)
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB err', err));

const app = express();

const storage = multer.diskStorage({                // создаем хранилище для сохранения картинок
    destination: (__, _, cd) => {                   // ф-ция которая возвращает путь файла
        cd(null, 'uploads');
    },

    filename: (__, file, cd) => {                   // перед тем как файл сохранить ф-ция обьяснит как назівается єтот файл 
        cd(null, file.originalname);
    },
});

const upload = multer({ storage });                 // создаем хранилище

app.use(express.json());

app.use('/uploads', express.static('uploads'));     // проверяем есть ли в папке файл который мы передаем

// app.use('/img', express.static('img'));


app.post('/auth/login', loginValidation, handleValidationErorrs, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErorrs, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe); // app.get для получение ифнормации

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    });
});

app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, postCreateValidation, handleValidationErorrs, PostController.create);
app.delete('/posts/:id', checkAuth, PostController.remove);
app.patch('/posts/:id', checkAuth, postCreateValidation, handleValidationErorrs, PostController.update);


app.listen(5000, (err) => {
    if (err) {
        return console.log('err');
    }

    console.log('Сервер запущен на порту 5000');
})