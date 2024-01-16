//jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const QRCode = require('qrcode');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const paymentID = "upi://pay?cu=INR&pa=9810527429@paytm&pn=uttu&";

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post("/", (req, res) => {
    var cola = Number(req.body.textbox1);
    var lemon = Number(req.body.textbox2);
    var dew = Number(req.body.textbox3);
    var juice = Number(req.body.textbox4);
    var result = ((cola + lemon + dew + juice) * 50);
    var paymentString = paymentID + 'am=' + result + '.00';
    QRCode.toDataURL(paymentString, function (err, url) {
        res.render('payment', { Qr: url, amount: result });
    });
});

app.listen(3000, () => console.log("Server started on port 3000"));
