var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', async function(req, res, next) {
  var response = 0
  if (req.query.cep !== undefined) {
    response = await axios.get(`https://viacep.com.br/ws/${req.query.cep}/json/`);
  }

  res.render('index', { 
    title: 'Express', 
    user_data: req.query,
    data: response.data 
  });
});

router.get('/', async function(req, res, next) {
  var response = 0
  if (req.query.cep !== undefined) {
    response = await axios.get(`https://viacep.com.br/ws/${req.query.cep}/json/`);
  }

  res.render('index', { 
    title: 'Express', 
    user_data: req.query,
    data: response.data 
  });
});


module.exports = router;
