import { User, UserStore } from "../models/users";
import express, { Request, Response } from 'express';

const store = new UserStore();

const index = async (req: Request, res: Response) => {
    try {
        const result = await store.index();
        res.send(result);
    } catch (err) {
        res.send(`${err}`);
    }
}
const addMember = async (req: Request, res: Response) => {
    try {
        const user: User = {
            name: req.body.name,
            email: req.body.email
        }
        const result = await store.addMember(user);
        res.send(result)
    } catch (err) {
        res.send(`${err}`)
    }
}

const userstoreroutes = (app: express.Application) => {
    app.get('/members', index)
    app.post('/members/add', addMember)
}

export default userstoreroutes;
