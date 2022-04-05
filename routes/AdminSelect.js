import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res) {
    const AIRPORT = await selectSql.getAIRPORT();
    const AIRPLANE = await selectSql.getAIRPLANE();
    const FLIGHT = await selectSql.getFLIGHT();

    res.render('AdminSelect', {
        title1: 'AIRPORT List',
        title2: 'AIRPLANE List',
        title3: 'FLIGHT List',

        AIRPORT, 
        AIRPLANE, 
        FLIGHT 
    });
});

module.exports = router;

