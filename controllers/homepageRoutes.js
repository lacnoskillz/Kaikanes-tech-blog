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
              'date_created',
            ], include: [
              {
                model: User,
              }
            ],
          },
        ],
      });
  
      const blog = dbBlogData.get({ plain: true });
      console.log(blog);
      //res.status(200).json(dbBlogData);
      res.render('blog-details', 
      { blog,
        loggedIn: req.session.loggedIn,
       });
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  router.post('/blog', withAuth, async (req, res) => {
    try {
      const newBlog = await Blog.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete('/blog/:id', async (req, res) => {
    try {
      const blogData = await Blog.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!blogData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // router.post('/comment', async (req, res) => {
  //   try {
  //     const dbcommentData = await Comment.create({
  //       content: req.body.content,
  //       user_id: session.user_id,
  //       //blog_id: req.body.blog_id,
  //     });
  
   
  
  //       res.status(200).json(dbcommentData);
      
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
  // });

  //need to make it to show user posts when logged in.
  //need to make it to show user posts when logged in.
  router.get('/dashboard', withAuth, (req, res) => {
    Blog.findAll({
      where: {
        user_id: req.session.user_id
      }
    })
      .then(dbPostData => {
        const blog = dbPostData.map((blog) => blog.get({ plain: true }));
        
        res.render("dashboard", {
          blog,
          loggedIn: req.session.loggedIn,
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
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