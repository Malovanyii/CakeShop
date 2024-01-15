import PostModel from "../models/post.js";

export const getAll = async (req, res) => {
    try {
        const posts = await PostModel.find().populate('user').exec();   //получаем пользователя

        res.json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не вдалося отримати статті',
        });
    }
}

export const remove = async (req, res) => {
    try {
        const postId = req.params.id;

        const removeDoc = await PostModel.findOneAndDelete(
            {
                _id: postId,
            },
        );

        if (!removeDoc) {
            return res.status(404).json({
                message: 'Не вдалося видалити статтю',
            });
        }

        res.json({
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не вдалося отримати статтю',
        });
    }
}

export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;

        const updatedDoc = await PostModel.findOneAndUpdate(
            {
                _id: postId,
            },
            {
                $inc: { viewsCount: 1 },
            },
            {
                new: true,          // чтобы получить обновленный документ
            },
        );

        if (!updatedDoc) {
            return res.status(404).json({
                message: 'Стаття не знайдена',
            });
        }

        res.json(updatedDoc);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не вдалося отримати статтю',
        });
    }
}

export const create = async (req, res) => {
    try {
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            user: req.userId,
        });

        const post = await doc.save();

        res.json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не вдалося створити статтю',
        });
    }
}

export const update = async (req, res) => {
    try {
        const postId = req.params.id;

        await PostModel.updateOne(
            {
                _id: postId,
            },
            {
                title: req.body.title,
                text: req.body.text,
                imageUrl: req.body.imageUrl,
                user: req.userId,
            },
        );

        res.json({
            success: true,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не вдалося оновити статтю',
        });
    }
}