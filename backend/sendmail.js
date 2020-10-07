var nodemailer = require('nodemailer');
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("The server started on port 3000 !!!!!!");
});

app.post("/sendmail", (req, res) => {
    console.log("request came");
    let user = req.body;
    sendMail(user, info => {
        console.log(`The mail has beed send  and the id is ${info.messageId}`);
        res.send(info);
    });
});

// Call send_mail from contact component

async function send_mail(my_mail, my_text, my_name){
        
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'youremail@gmail.com',
            pass: 'yourpassword'
        }
    });
        
        /*
            If error comes : 
        
            First of all, you have to enable the settings to allow less secure apps for the gmail account that you are using. Here is the link : https://myaccount.google.com/lesssecureapps
        
            Secondly, Allow access for "Display Unlock captcha option" (Allow access to your Google account). Here is the link : https://accounts.google.com/DisplayUnlockCaptcha
        */ 
        
    var mailOptions = {
        from: 'yourmail0@gmail.com',
        to: 'yourmail@gmail.com',
        subject: my_name,
        text: my_text
    };
        
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}