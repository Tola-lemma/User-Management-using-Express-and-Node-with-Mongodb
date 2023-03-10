const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.render('index');
 });
 router.get('/add-user',(req,res) => {
     res.render('add_user');
  });
  router.get('/update-user',(req,res) => {
     res.render('update_user');
  });
  module.exports = router;