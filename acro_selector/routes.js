var express = require('express')
var app = express()
var router = express.Router()
var acroData = require('./data.json')
var path = require('path')

module.exports = router

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/acroyoga/index'));


  // res.sendFile('/acroyoga/index');
})

router.get('/pose', function (req, res) {
  var randomPose = Math.floor(Math.random() * acroData.poses.length);
  var selectedPoseData = acroData[randomPose]
  res.render('/pose', {selectedPoseData: selectedPoseData})
})
