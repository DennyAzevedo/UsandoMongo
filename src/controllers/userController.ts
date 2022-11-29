import { Request, Response } from 'express';
import User from "../models/User";

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};

export const addUserAction = async (req: Request, res: Response) => {
    let emptyFields = false;
    let newUser = new User();
    if (
        req.body.firstName &&
        req.body.lastName &&
        req.body.email &&
        req.body.age &&
        req.body.interests
    ) {
        try {
            console.log("usuário sendo adicionado!!");
            let interests = req.body.interests.split(' ')
            newUser.fullName.firstName = req.body.firstName;
            if (req.body.midleName) {
                newUser.fullName.midleName = req.body.midleName;
            }
            newUser.fullName.lastName = req.body.lastName;
            newUser.age = parseInt(req.body.age);
            newUser.email = req.body.email;
            newUser.interests = interests
            let resultado = await newUser.save()
            console.log("usuário adicionado com sucesso!!");
        } catch (error) {
            console.log("usuário não adicionado!!");
        }
    } else {
        emptyFields = true;
    }
    let users = await User.find({});
    res.render('pages/home', {
        emptyFields,
        users
    })
};