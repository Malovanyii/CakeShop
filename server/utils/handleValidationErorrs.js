import { validationResult } from 'express-validator'

export default (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    next();        // если ошибок нету идем дальше выполняя другую часть кода
}