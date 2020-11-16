const express = require('express');
var nodemailer = require('nodemailer');
const router = express.Router();

router.post('/send-email',async (req, res)=>{
    let {company,name,email,message} = req.body;
    
    contentHTML=`
        <h1>User Infomartion</h1>
        <ul>
            <li>Company: ${company}</li>
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            
        </ul>

        <p>${message}</p>
    `

        
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'alexzambra2610@gmail.com',
            pass: 'nice try'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: '"Alexoid1 Server"', // sender address,
        to: 'alex_zam@hotmail.es',
        subject: 'Website Contact Form',
        // text: 'Hello World'
        html: contentHTML
    })

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    res.redirect('/index.html');
    
})


module.exports = router