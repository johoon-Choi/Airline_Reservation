import express from "express";
import { insertSql, selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('AdminInsertAIRPORT');
})

router.post('/', (req, res) => {
    const AIRPORT = req.body;

    const data = {
        Airport_code: AIRPORT.Airport_code,
        Name: AIRPORT.Name,
        City: AIRPORT.City,
        State: AIRPORT.State
    }
    console.log(AIRPORT.Airport_code);
    insertSql.setAIRPORT(data);

    res.redirect('/AdminSelect');
})

module.exports = router;

