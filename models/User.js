const { Schema, model, SchemaTypes } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    thoughts: [
        {
            type: SchemaTypes.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: SchemaTypes.ObjectId,
            ref: 'User'
        }
    ]

},
{
    toJSON: {
        virtuals: true
    },
    id: false
});


userSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.length;
});

userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = user;