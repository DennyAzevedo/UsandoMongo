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
    //limitano o número de exibições
    //let usuarios = await User.find({age: { $gt: 18 }}).sort({ "fullName.firstName": 1, age: -1 }).limit(2);
    /*
        Uso de paginação:
        exemplo:

        usuarios = 10.000 registros
        página está mostrando de 20 em 20 registros.

        página 0 = 1 até 20 (pule o registros e exiba 20)
        página 1 = 21 até 40 (pule 20 registros e exiba 20)
        página 2 = 41 até 60 (pule 40 registros e exiba 20)

        página n = (pule n*20 registros e exiba 20)
    */
    //let usuarios = await User.find({age: { $gt: 18 }}).sort({ "fullName.firstName": 1, age: -1 }).skip(0).limit(2);//página 0
    //let usuarios = await User.find({age: { $gte: 18 }}).sort({ "fullName.firstName": 1, age: -1 }).skip(2).limit(2);//página 1
    //console.log("USUARIOS", usuarios);
    //
    //Criando dados no banco - método 01
    /*
    let newUser = await User.create({
        fullName: { firstName: 'Maria', lastName: 'Leite' },
        email: 'marialeite@gmail.com',
        age: 21,
        interests: ['Arte','Pizza']
    });
    console.log("Novo Usuário", newUser);*/
    //
    //Criando dados no banco - método 01
    /*
    let newUser = new User();
    newUser.fullName = { firstName: 'Julia', midleName: 'Luz', lastName: 'Correia' };
    newUser.email = 'juliacorreia@gmail.com';
    newUser.age = 33;
    newUser.interests = ['Programação', 'Musica'];
    let resultado = await newUser.save();
    console.log("Novo Usuário", resultado);
    */
    //três formas principais de atualizar dados

    //Atualizando diversos dados
    //await User.updateMany({ age: { $lte: 18 } }, { age: 19 });
    //Atualizando um registro - documento
    //await User.updateOne({ email: 'marialeite@gmail.com' }, { age: 22 });
    let paulo = await User.findOne({ email: 'paulocosta@gmail.com' });
    paulo.fullName.lastName = "Costa Correia";
    paulo.age = 35;
    await paulo.save();

    let users = await User.find({}).sort({'fullName.firstName': 1})


    res.render('pages/home', {
        users
    });
};