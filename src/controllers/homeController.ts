import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response) => {
    //let usuarios = await User.find({}); //todos
    //let usuarios = await User.findOne({ email: 'dennyazevedo@gmail.com' }); //unico
    let usuarios = await User.findById('636f003790976a2cf544c037'); //pelo id
    console.log("USUARIOS", usuarios);
    
    let age: number = 58;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Denny',
        lastName: 'Azevedo',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};