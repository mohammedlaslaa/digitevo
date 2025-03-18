import { NextApiRequest, NextApiResponse } from 'next';

import { ContactData } from 'utils/types/types';

import nodemailer from 'nodemailer';

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: 'mohamed.laslaa@gmail.com',
          pass: 'spug fxcd tior fvbm',
        },
      });



      const params: ContactData = JSON.parse(req.body);
      const { name, phone, email, object, message } = params;

      const options = {
        from: 'mohamed.laslaa@gmail.com',
        to: 'digitevo7@gmail.com',
        subject: 'Demande de contact',
        text: '',
        html: `<style>
                h2, strong {
                  color: #8a5cf6;
                }
              </style>
              <div>
                  <h2 style=>Nouvelle demande de contact</h2>
                  <p><strong>Nom/prénom : </strong><span>${name}</span></p>
                  <p><strong>Numéro de téléphone : </strong><span>${phone}</span></p>
                  <p><strong>Email : </strong><span>${email}</span></p>
                  <p><strong>Sujet : </strong><span>${object}</span></p>
                  <p><strong>Commentaire : </strong><span>${message}</span></p>
              </div>`,
      };

      await transporter.sendMail(options);
      await transporter.sendMail({ ...options,  to: 'mohamed.laslaa@gmail.com', });

    } catch (error) {
      if (error instanceof Error) return res.status(500).send(error.message);
    }

    return res.status(200).json({ success: true });
  }

  return res.status(404).send(' ');
};

export default send;
