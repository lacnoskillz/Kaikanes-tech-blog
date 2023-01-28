const router = require('express').Router();

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
  

  
  
  module.exports = router;