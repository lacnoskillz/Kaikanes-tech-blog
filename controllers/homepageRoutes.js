const router = require('express').Router();
const { Blog, User } = require('../models');
// router.get('/', async (req, res) => {
//     res.render('all');
//   });

  router.get('/login', async (req, res) => {
    res.render('login');
  });

  router.get('/signup', async (req, res) => {
    res.render('signup');
  });

  router.get('/logout', async (req, res) => {
    res.redirect('/');
  });
  
  router.get('/', async (req, res) => {
    try {
      const BlogData = await Blog.findAll({
        include: [
          {
            model: User,
            attributes: ['user_name'], 
          },
        ],
      });
  const Blogs = BlogData.map((blog) =>
  blog.get({plain: true})
  
  );
      res.render('all', {
        Blogs,
        //loggedIn: req.session.loggedIn, add login sesh later
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  
  module.exports = router;