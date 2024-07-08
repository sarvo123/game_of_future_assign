import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import serverRoutes from './routes/serverRoutes.js'
import connectToDb from './db/connectToDb.js'
import dotenv from 'dotenv'


// building server ...
const app = express();

// middlewares ...
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000 ;

// routes 
app.get("/" ,(req,res)=>{
    res.send("hello don't worry !")
})
app.use("/servers" , serverRoutes);

app.listen(PORT , ()=>{
    connectToDb();
    console.log(`server is working on PORT ${PORT}`);
});

