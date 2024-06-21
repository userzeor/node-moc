var Mock = require('mockjs');
var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/storeList', function(req, res, next) {
// 	res.send(Mock.mock({
// 		"code": 200,
// 		"list|9": [{
// 			"name": '@city()',
// 			"id|+1": 1,
// 			"value|0-500": 20
// 		}]
// 	}));
// });

/* GET users listing. */
router.get('/dictList', function(req, res, next) {
	setTimeout(() => {
		res.send(Mock.mock({
			"code": 200,
			"list|9": [{
				"text": '@city()',
				"value|+1": 0
			}]
		}));
	}, 1000);
});

module.exports = router;