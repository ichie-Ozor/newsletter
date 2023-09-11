import { User } from "./accountModel.js"

const createAccountService = async(body) => {
    const user = new User(body)
    await user.save()
    return user
}

export const createAccount = async(req, res) => {
try {
    console.log(req.body)
    const {email}  = req.body
    if (!email) {
      return  res.status(400).json({
            success: false,
            message: "Email field is required!"
        })
    }
  await createAccountService(req.body)
    res.status(201).json({
        success: true,
        message: "thanks for subscribing👌👌!"
    })
} catch (error) {
    return res.status(500).json({Error: error.message})
}
}
