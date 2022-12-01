import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject'
import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response) => {
    
    let users = await User.find({}).sort({'fullName.firstName': 1})

    res.render('pages/home', {
        users,
        menu: createMenuObject('home'),
        tituloPagina: "Página Principal",
        tituloAba: "Lista Usuários - MongoDB"
    });
};