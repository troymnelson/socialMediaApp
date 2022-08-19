const { Schema, model, SchemaTypes } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: SchemaTypes.ObjectId,
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})