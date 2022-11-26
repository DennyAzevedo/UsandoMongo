import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response) => {
    //let usuarios = await User.find({}); //todos
    //let usuarios = await User.findOne({ email: 'dennyazevedo@gmail.com' }); //unico
    //let usuarios = await User.findById('636f003790976a2cf544c037'); //pelo id
    //let usuarios = await User.find({ "fullName.firstName": "Denny" });
    //let usuarios = await User.find({ interests: "Programação" });
    //let usuarios = await User.find({ age: { $gt: 25 } });
    //let usuarios = await User.find({ age: { $gt: 25, $lt: 45 } });
    /*
        gt = Greater Then = maior
        gte = Greater Then or Equal = Maior ou Igual
        lt = Lower Then = Menor
        lte = Lower Then or Equal = Menor ou Igual

        ordenação: 
            1 - ascendente
            -1 - descendente
    */
    //let usuarios = await User.find({ age: { $gt: 25 } }).sort({ age: -1 });
    //let usuarios = await User.find({ age: { $gt: 25 } }).sort({ email: 1 });
    //let usuarios = await User.find({ age: { $gt: 25 } }).sort({ "fullName.firstName": -1 });
    let usuarios = await User.find({ age: { $gt: 25 } }).sort({ "fullName.firstName": 1, age: -1 });
    
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