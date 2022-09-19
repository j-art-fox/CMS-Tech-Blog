const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Post, { 
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});


module.exports = {
    User,
    Comment,
    Post,
}