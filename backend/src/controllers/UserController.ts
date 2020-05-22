import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Pedro' , email: 'pedromiguelmvs@gmail.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async store(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { 
        name: 'Pedro Mingau',
        email: 'pedromiguelmvs@gmail.com'
      },      
      message: { 
        subject: 'Assunto do Email', 
        body: 'aaaaaaaaaaa to com depressao 2', 
      },
    })
    
    return res.json({ ok: true });
  }
};