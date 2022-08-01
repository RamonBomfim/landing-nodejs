import { Request, Response } from 'express';
import { Inscricao } from '../models/Inscricao';

export const confirmationPage = (req: Request, res: Response) => {
    res.render('confirmacao');
};

export const confirmation = async (req: Request, res: Response) => {
    let name: string = req.body.name as string;
    let email: string = req.body.email as string;
    let whatsapp: string = req.body.whatsapp as string;

    const subscribe = await Inscricao.create({
        name,
        email,
        whatsapp
    });

    console.log('nome ', subscribe.name);
    console.log('email ', subscribe.email);
    console.log('whatsapp ', subscribe.whatsapp);

    res.redirect('/confirmacao');
}