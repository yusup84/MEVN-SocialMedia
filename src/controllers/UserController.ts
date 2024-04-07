import { Request, Response } from "express";

type User = {
    name : string,
    email: string
}

export const getUser = (req: Request, res: Response) => {
    const users: Array<User> = [
        {
            name: 'John',
            email: 'john@admin.com'
        },
        {
            name: 'Doe',
            email: 'doe@admin.com'
        }   
    ]

    return res.json(users)
}