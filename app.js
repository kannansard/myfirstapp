var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3003);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});

app.get('/', function (req, res) {
  res.send('Hello World By Kannan1');
});

app.get('/users', function (req, res) {
    res.send([{ id: 1, name: 'Express' }, { id : 2, name: 'Express1' }]);
});

app.get('/email', function (req, res) {
    res.send([{ id: 1, name: 'Express' }, { id : 2, name: 'Express1' }]);
});

console.log("test");

// var nodemailer = require('nodemailer');




// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'kannanprec7777@gmail.com',
//     pass: ''
//   }
// });

// var mailOptions = {
//   from: 'kannanprec7777@gmail.com',
//   to: 'ganesankannan379@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
