var nodemailer = require('nodemailer');
const express = require("express");
//const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());



app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.post("/sendmail", (req, res) => {
    //console.log("request came");
    let user = req.body;
    console.log(user);
    // send_mail(user, info => {
    //     console.log(`The mail has beed send  and the id is ${info.messageId}`);
    //     res.send(info);
    // });

    send_mail(user.Email, user.Comment, user.Fullname);

});

// Call send_mail from contact component

async function send_mail(my_mail, my_text, my_name){
        
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sahilmorankar2000@gmail.com',
            pass: 'Sahil@2000gmail'
        }
    });
        
        /*
            If error comes : 
        
            First of all, you have to enable the settings to allow less secure apps for the gmail account that you are using. Here is the link : https://myaccount.google.com/lesssecureapps
        
            Secondly, Allow access for "Display Unlock captcha option" (Allow access to your Google account). Here is the link : https://accounts.google.com/DisplayUnlockCaptcha
        */ 
        
    var mailOptions = {
        from: 'sahilmorankar2000@gmail.com',
        to: 'sahilmorankar2000@gmail.com',
        subject: my_name,
        text: my_text+ '    ' + my_mail
    };
        
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    var mailOptions1 = {
        from: 'sahilmorankar2000@gmail.com',
        to: my_mail,
        subject: 'Priyam IT Services',
        text: 'Thanks For Visiting our website! We will get back to you soon.'
    };

    transporter.sendMail(mailOptions1, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
app.listen(3000, () => {
    console.log("The server started on port 3000 !!!!!!");
});