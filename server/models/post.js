import { Schema, model, mongoose } from "mongoose";

const PostSchema = new Schema({
    title: { type: String, required: true, },
    text: { type: String, required: true, unique: true },
    viewsCount: { type: Number, default: 0 },                                       // по-умолчанию кол-во просмотров 0 
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },    // ссылаемся по Id на модель User'а
    imageUrl: String,
}, {
    timestamps: true,
});

export default model('Post', PostSchema);