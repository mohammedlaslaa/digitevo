import { NextApiRequest, NextApiResponse } from 'next';

import { ContactData } from 'utils/types/types';

import nodemailer from 'nodemailer';

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const transporter = nodemailer.createTransport({
        host: 'pro1.mail.ovh.net',
        port: 587,
        auth: {
          user: 'contact@digitevo.fr',
          pass: 'r8oGkeSlf2',
        },
      });

      const params: ContactData = JSON.parse(req.body);
      const { name, phone, email, object, message } = params;

      const options = {
        from: 'contact@digitevo.fr',
        to: 'contact@digitevo.fr',
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
    } catch (error) {
      if (error instanceof Error) return res.status(500).send(error.message);
    }

    return res.status(200).json({ success: true });
  }

  return res.status(404).send(' ');
};

export default send;
