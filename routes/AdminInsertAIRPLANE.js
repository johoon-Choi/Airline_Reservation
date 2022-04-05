import express from "express";
import { insertSql, selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('AdminInsertAIRPLANE');
})

router.post('/', (req, res) => {
    const AIRPLANE = req.body;

    const data = {
        Airplane_id: AIRPLANE.Airplane_id,
        Total_number_of_seats: AIRPLANE.Total_number_of_seats,
        Airplane_type: AIRPLANE.Airplane_type
    }
    
    insertSql.setAIRPLANE(data);

    res.redirect('/AdminSelect');
})

module.exports = router;

