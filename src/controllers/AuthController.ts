import { TypedRequest, TypedResponse } from "../utils/TypedController"
interface IUser {
    username: string
    email: string 
    password: string
}

export const register = async (req: TypedRequest<{}, IUser>, res: TypedResponse<{message: string}>) => {
    const {username, email, password} = req.body
    console.log(username, email, password);

    res.send({message: 'successfully register'})
    
}