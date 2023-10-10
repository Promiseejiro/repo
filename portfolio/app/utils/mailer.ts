import nodemailer from "nodemailer"
const Mailer =async(email: string)=>{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'promiseejiro43@gmail.com',
    pass: 'gufmbtoghpjswmye'
  }
});
 let message =await {
   from: "promiseejiro43@gmail.com", 
  to: "promiseemosivbe43@gmail.com" ,
  subject: "Someone sent a message from your portfolio",
  html:`<h1>Welcome </h1><p>That was easy!</p>
  <p>${url}</p>`
};
transporter.sendMail(message, function(error:any, info:any){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

export default Mailer