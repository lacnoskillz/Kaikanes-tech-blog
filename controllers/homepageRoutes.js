const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('all');
  });

  router.get('/example', async (req, res) => {
    res.render('two');
  });
  
  module.exports = router;