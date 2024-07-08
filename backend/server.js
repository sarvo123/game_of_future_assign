import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import serverRoutes from './routes/serverRoutes.js'
import connectToDb from './db/connectToDb.js'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// building server ...
const app = express();

// middlewares ...
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000 ;


// routes 
// app.get("/" ,(req,res)=>{
//     res.send("hello don't worry !")
// })

app.use("/api/servers" , serverRoutes);

app.use(express.static(path.join(__dirname ,'..', "/frontend","dist")));

app.get("*" , (req, res) =>{
    res.sendFile(path.resolve(__dirname ,'..',"frontend" , "dist" , "index.html" ));
})


app.listen(PORT , ()=>{
    connectToDb();
    console.log(`server is working on PORT ${PORT}`);
});

