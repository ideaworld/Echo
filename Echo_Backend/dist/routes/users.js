'use strict';

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({
    'username': "Bowen"
  });
});

module.exports = router;
//# sourceMappingURL=users.js.map
