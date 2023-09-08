import Express from 'express';
import { connectDb } from  './config/connectDb.js'
import { accountRoute } from './route/accountRoute.js'
import dotenv from 'dotenv'
// this two lines below is used to solve error arising when you use "type": "module" in package.json. it does not allow "require" which is a js method
import { createRequire } from "module";
const require = createRequire(import.meta.url);
dotenv.config()

const cors = require("cors")


const PORT = process.env.PORT
const URL = process.env.MONGODB_URL
const app = Express();
app.use(Express.json())


app.use(
    cors({
        origin: "http://localhost:3000",
        method: ["POST"],
    })
)

app.get('/', (req, res) => {
    res.json({
        message: "Welcome our newsletter subscription...😍😍😍"
    })
})

app.use('/account', accountRoute)

app.listen(PORT, async() => {
    await connectDb(URL)
    console.log(`server running on http://localhost:${PORT}...👨‍🦲👨‍🦲👴👴`)
})