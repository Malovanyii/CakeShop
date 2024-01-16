import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UserModel from '../models/user.js';


export const register = async (req, res) => {
    try {
        // хеширование пароля
        const passwordHash = req.body.password;                 // получение пароля
        const salt = await bcrypt.genSalt(10);                  // генерируется соль с cost-фактором 10
        const hash = await bcrypt.hash(passwordHash, salt);     // Процесс хэширования пароля с помощью bcrypt.hash()

        // создание пользователя
        const user = await UserModel.create({
            email: req.body.email,
            fullName: req.body.fullName,
            password: hash,
        });

        const token = jwt.sign(
            {
                _id: user._id,
            },
            'secret',
            {
                expiresIn: '30d',
            },
        );

        const { password, ...userData } = user._doc;

        res.json({
            user: userData,
            token: token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось создать пользователя',
        });
    }
};

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден',
            })
        }
        // bcrypt.compare ф-ция которая используется для сравнения переданного пароля с сохранённым хэшированным паролем пользователя
        const isValidPassword = await bcrypt.compare(req.body.password, user._doc.password);

        if (!isValidPassword) {
            return res.status(400).json({
                message: 'Неверный логин или пароль',
            });
        }
        // создание токена аутентификации
        const token = jwt.sign(
            {
                _id: user._id,
            },
            'secret',   // серктеный ключ, который используется для подписи токена
            {
                expiresIn: '30d',
            },
        );

        const { password, ...userData } = user._doc;            // password - извлекается из объекта user._doc

        res.json({
            user: userData,
            token: token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не удалось создать авторизоваться',
        })
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                message: 'Пользователь не найден'
            });
        }

        const { password, ...userData } = user._doc;

        res.json({
            user: userData,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Нет доступа',
        });
    }
};