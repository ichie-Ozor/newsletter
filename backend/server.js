import Express from 'express';
import { connectDb } from  './config/connectDb.js'
import { accountRoute } from './route/accountRoute.js'
import dotenv from 'dotenv'
dotenv.config()


const PORT = process.env.PORT
const URL = process.env.MONGODB_URL
const app = Express();
app.use(Express.json())


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://172.20.10.7:8000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

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