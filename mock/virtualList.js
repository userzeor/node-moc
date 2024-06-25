var Mock = require('mockjs/src/mock')
var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/fixedHeightList', function (req, res, next) {
  res.send(
    Mock.mock({
      code: 200,
      'list|1000': [
        {
          img: Mock.Random.image('100x100', '@city()'),
          text: '@city()',
          'value|+1': 0,
        },
      ],
    })
  )
})

module.exports = router
