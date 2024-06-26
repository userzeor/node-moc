var Mock = require('mockjs/src/mock')
var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/fixedHeightList', function (req, res, next) {
  res.send(
    Mock.mock({
      code: 200,
      'data|1000': [
        {
          img: Mock.Random.image('100x100', Mock.Random.color().substring(1, 6), '@city'),
          text: '@city',
          'value|+1': 0,
          address: '@county(true)',
        },
      ],
    })
  )
})

module.exports = router
