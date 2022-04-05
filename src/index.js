import express from "express";
import logger from "morgan";
import path from "path";  

import homeRouter from "../routes/login";
import AdminSelectRouter from "../routes/AdminSelect";
import AdminUpdateAIRPORT_Router from "../routes/AdminUpdateAIRPORT";
import AdminUpdateFLIGHT_Router from "../routes/AdminUpdateFLIGHT";
import AdminUpdateAIRPLANE_Router from "../routes/AdminUpdateAIRPLANE";
import AdminInsertAIRPORT_Router from "../routes/AdminInsertAIRPORT";
import AdminInsertAIRPLANE_Router from "../routes/AdminInsertAIRPLANE";
import AdminInsertFLIGHT_Router from "../routes/AdminInsertFLIGHT";
import AdminDeleteAIRPORT_Router from "../routes/AdminDeleteAIRPORT";
import AdminDeleteAIRPLANE_Router from "../routes/AdminDeleteAIRLPLANE";
import AdminDeleteFLIGHT_Router from "../routes/AdminDeleteFLIGHT";
import CustomerSelectRouter from "../routes/CustomerSelect";
import CustomerDeleteRouter from "../routes/CustomerDelete";
import CustomerInsertRouter from "../routes/CustomerInsert";

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')

app.use(logger("dev"));

app.use('/', homeRouter);
app.use('/AdminSelect', AdminSelectRouter); 
app.use('/AdminUpdateAIRPORT', AdminUpdateAIRPORT_Router); 
app.use('/AdminUpdateFLIGHT', AdminUpdateFLIGHT_Router); 
app.use('/AdminUpdateAIRPLANE', AdminUpdateAIRPLANE_Router); 
app.use('/AdminInsertAIRPORT', AdminInsertAIRPORT_Router); 
app.use('/AdminInsertAIRPLANE', AdminInsertAIRPLANE_Router); 
app.use('/AdminInsertFLIGHT', AdminInsertFLIGHT_Router);
app.use('/AdminDeleteAIRPORT', AdminDeleteAIRPORT_Router); 
app.use('/AdminDeleteAIRPLANE', AdminDeleteAIRPLANE_Router); 
app.use('/AdminDeleteFLIGHT', AdminDeleteFLIGHT_Router); 
app.use('/CustomerSelect', CustomerSelectRouter); 
app.use('/CustomerDelete', CustomerDeleteRouter); 
app.use('/CustomerInsert', CustomerInsertRouter); 

// Server 를 실행시키는 부분
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

