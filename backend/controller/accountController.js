import { User } from "./accountModel.js"

const createAccountService = async(body) => {
    const user = new User(body)
    await user.save()
    return user
}

export const createAccount = async(req, res) => {
    const newUser = await createAccountService(req.body)
    res.status(201).json({
        success: true,
        message: "thanks for subscribing👌👌!"
    })
}



