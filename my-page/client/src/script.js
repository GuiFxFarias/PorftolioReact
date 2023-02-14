import nodemailer from "nodemailer";

const sendEmail = (formData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "guilhermefarias210303@gmail.com",
      pass: "Bilhar11!",
    },
  });

  const mailOptions = {
    from: formData.email,
    to: "destinatario@email.com",
    subject: "Assunto do email",
    text: formData.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email enviado: " + info.response);
    }
  });
};

export const handleSubmit = (event) => {
  event.preventDefault();
  const formData = {
    name: event.target.name.value,
    email: event.target.email.value,
    message: event.target.message.value,
  };
  sendEmail(formData);
  axios
    .post("/enviar-email", formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
