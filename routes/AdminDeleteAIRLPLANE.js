import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) => {
    const AIRPLANE = await selectSql.getAIRPLANE();

    res.render('AdminDeleteAIRPLANE', {
        title: "Delete AIRPLANE Data",
        AIRPLANE         
    })
});

router.post('/', async (req, res) => {
    console.log('delete router:', req.body.delBtn);

    const data = {
        Airplane_id: req.body.delBtn, 
    };                      

    await deleteSql.deleteAIRPLANE(data);

    res.redirect('/AdminDeleteAIRPLANE');
});       

module.exports = router;

