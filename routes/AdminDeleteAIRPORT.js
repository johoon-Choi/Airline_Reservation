import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) => {
    const AIRPORT = await selectSql.getAIRPORT();

    res.render('AdminDeleteAIRPORT', {
        title: "Delete AIRPORT Data", 
        AIRPORT 
    })
});

router.post('/', async (req, res) => {
    console.log('delete router:', req.body.delBtn);

    const data = {
        Airport_code: req.body.delBtn, 
    };              

    await deleteSql.deleteAIRPORT(data);

    res.redirect('/AdminDeleteAIRPORT');
});         

module.exports = router;

