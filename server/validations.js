import { body } from "express-validator";

export const loginValidation = [
    body('email', 'Неправильний формат пошти').isEmail(),
    body('password', 'Пароль повинен бути мінімум 5 символів').isLength({ min: 5 }),
];

export const registerValidation = [
    body('email', 'Неправильний формат пошти').isEmail(),
    body('fullName', "Вкажіть ім'я").isLength({ min: 3 }),
    body('password', 'Пароль повинен бути мінімум 5 символів').isLength({ min: 5 }),
];

export const postCreateValidation = [
    body('title', 'Введіть заголовок статті').isLength({ min: 10 }).isString(),
    body('text', "Введіть текст статті").isLength({ min: 80 }).isString(),
    body('imageUrl', 'Неправильне посилання на картинку').optional().isString(),
];