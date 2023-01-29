const router = require('express').Router();
const { Blog, User } = require('../models');
router.get('/', async (req, res) => {
    res.render('all');
  });

  router.get('/login', async (req, res) => {
    res.render('login');
  });

  router.get('/signup', async (req, res) => {
    res.render('signup');
  });

  router.get('/logout', async (req, res) => {
    res.redirect('/');
  });
  
  router.get('/dashboard', async (req, res) => {
    try {
      const BlogData = await Blog.findAll({
        include: [
          {
            model: User,
            attributes: ['user_name'], 
          },
        ],
      });
      console.log(BlogData,"blogdata");
  const Blogs = BlogData.map((blog) =>
  blog.get({plain: true})
  
  );
  console.log(Blogs,"Blogs");
      res.render('dashboard', {
        Blogs,
        //loggedIn: req.session.loggedIn, add login sesh later
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  
  module.exports = router;