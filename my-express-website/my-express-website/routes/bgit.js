var express = require('express');
var router = express.Router();

/* GET bgit page. */
router.get('/', function(req, res, next) {
  res.render('bgit', { 
  	title: 'BGIT',
  	author: 'Stephen Scott',
  	subheading: 'About the company',
  	text: 'Lorem ipsum dolor sit amet ad nauseum. Lorem ipsum dolor sit amet ad nauseum. Lorem ipsum dolor sit amet ad nauseum. Lorem ipsum dolor sit amet ad nauseum. ' 
  });
});

module.exports = router;
