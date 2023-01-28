const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Blog.belongsTo(User, {
    foreignKey: 'user_id'
})

Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
})
module.exports = { User, Blog , Comment};
