import nodemailer from "nodemailer";

const mailer = async (to: string, html: string, subject: string) => {
  try {
    // let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        // user: testAccount.user, // generated ethereal user
        // pass: testAccount.pass, // generated ethereal password
        user: "nova31@ethereal.email", // generated ethereal user
        pass: "RE2fRnwz1QabeZtntt", // generated ethereal password
      },
    });

    let info = await transporter.sendMail({
      from: '"Nova Spinka 🌽" nova31@ethereal.email', // sender address
      to, // list of receivers
      subject, // Subject line
      //   text: "Hello world?", // plain text body
      html, // html body
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.log("nodemailer error", err);
  }
};

export const forgotPasswordMail = (to: string, html?: string) =>
  mailer(to, (html = html || ""), "Create New Password");

export const confirmAccountMail = (to: string) =>
  mailer(to, "", "Confirm Your Account");
