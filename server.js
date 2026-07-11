require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);


app.post("/contact", async (req, res) => {

    const {
        name,
        email,
        phone,
        service,
        message
    } = req.body;


    console.log(`
=================================
NEW CUSTOMER REQUEST
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}
=================================
`);


    try {

        const emailResponse = await resend.emails.send({

    from: "Francis Clothing <onboarding@resend.dev>",

    to: process.env.EMAIL_TO,

    subject: "New Francis Clothing Customer Request",

    html: `
    <h2>New Customer Request</h2>

    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Service: ${service}</p>
    <p>Message: ${message}</p>
    `

});

console.log("RESEND RESPONSE:", emailResponse);

        res.json({
            success: true,
            message: "Message sent successfully"
        });


    } catch(error){

        console.log(error);

        res.status(500).json({
            success:false,
            message:"Email failed to send"
        });

    }

});


app.listen(process.env.PORT, ()=>{

    console.log(
        `Server is running on http://localhost:${process.env.PORT}`
    );

});