const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

  
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
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/blog/:id', async (req, res) => {
    try {
      const dbBlogData = await Blog.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: [
              'user_name',
            ],
          },
          {
            model: Comment,
            attributes: [
              'content',
              'user_id',
            ],
          },
        ],
      });
  
      const blog = dbBlogData.get({ plain: true });
      //res.status(200).json(dbBlogData);
      res.render('blog-details', { blog });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


  router.post('/comment', withAuth,async (req, res) => {
    try {
      const dbUserData = await Comment.create({
        content: req.body.content,
       // user_id: ,
        //blog_id: ,
      });
  
   
  
        res.status(200).json(dbUserData);
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  //need to make it to show user posts when logged in.
  router.get('/dashboard', withAuth, async (req, res) => {
    
    res.render('dashboard');
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
  module.exports = router;