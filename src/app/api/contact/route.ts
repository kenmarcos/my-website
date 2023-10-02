import { NextResponse } from "next/server";

import nodemailer from "nodemailer";

const email = process.env.GMAIL_EMAIL;
const pass = process.env.GMAIL_PASSWORD;

export const POST = async (req: Request) => {
  const body = await req.json();

  // Criar o objeto transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass,
    },
  });

  // Criar o objeto mailOptions
  const mailOptions = {
    from: body.email,
    to: email,
    subject: body.subject,
    html: `
      <h1>Nova Mensagem de Contato</h1>
      <p>Name: ${body.name} </p>
      <p>Email: ${body.email} </p>
      <p>Assunto: ${body.subject}</p>
      <p>Message: ${body.message} </p>
      `,
  };

  // Usar o método transporter.sendMail() para enviar o email
  try {
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "E-mail sent successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Error sending e-mail",
      },
      { status: 500 }
    );
  }
};
