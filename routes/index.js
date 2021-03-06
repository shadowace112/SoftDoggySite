/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
var express = require('express');
var router = express.Router();
var path = require('path');
var mime = require('mime');
var fs = require('fs');
var emailler = require('./emailler');

function openPDF(filename, res){
	var stream = fs.createReadStream(__dirname + '/../downloads/' + filename);
	var filename = filename; 
	
	filename = encodeURIComponent(filename);
	
	res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
	res.setHeader('Content-type', 'application/pdf');
	
	stream.pipe(res);
}

router.get('/download/resume', function (req, res) {
	openPDF('Resume.pdf', res)
});
router.get('/download/certiport', function (req, res) {
	openPDF('Certiport.pdf', res)
});
router.get('/download/certiport', function (req, res) {
	openPDF('Certiport.pdf', res)
});
router.get('/download/strengthsReport', function (req, res) {
	openPDF('GallupReport.pdf', res)
});
router.get('/download/strengthsFinder', function (req, res) {
	openPDF('streangthsFinder.pdf', res)
});
router.get('/download/SkillsEval', function (req, res) {
	openPDF('SkillsEval.pdf', res)
});
router.get('/download/OSHA', function (req, res) {
	openPDF('OSHA.pdf', res)
});
router.get('/', function (req, res) {
	//render the main menu
	console.log(req.body);
	res.render('index');
});
router.get('/about', function (req, res) {
	res.render('about');
});
router.get('/projects', function (req, res) {
	res.render('projects');
});
router.get('/standards', function (req, res) {
	res.render('standards');
});
router.get('/contact', function (req, res) {
	res.render('contact');
});
router.get('/donations', function (req, res) {
	res.render('donations');
});
router.get('/license', function (req, res) {
	res.render('license');
});
router.post('/reciveData', function (req, res) {
	//https://www.npmjs.com/package/express-mailer
	if (!req.body.email || !req.body.message) {
		res.send('Please go back and fill in both the email and message portion of the form.')
	} else if (!req.body.address) {
		var webAddress = req.get('host') + req.originalUrl;
		emailler(webAddress).sendEmailForm(req.body.email, req.body.message);;
		res.render('dataRecieved', {
			email: req.body.email,
			message: req.body.message
		});
	} else {
		res.send('YOU ARE A MONSTER, or you just didn\'t know what you were doing.')
	}
});

router.get('/cartMaster', function (req, res) {
	//render the game
	res.render('cartMaster', {
		isHosting: true,
		isPublicGame: false
	});
});

router.get('/questMaster', function (req, res) {
	//render the main menu
	res.render('questMaster', {
		title: 'Quest Master'
	});
});

router.get('/game2', function (req, res) {
	//render the game
	res.render('babylon');
});
module.exports = router;