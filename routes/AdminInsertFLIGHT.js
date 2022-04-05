import express from "express";
import { insertSql, selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('AdminInsertFLIGHT');
})

router.post('/', (req, res) => {
    const FLIGHT = req.body;

    const data = {
        Flight_number: FLIGHT.Flight_number,
        Airline: FLIGHT.Airline,
        Weekdays: FLIGHT.Weekdays
    }
    
    insertSql.setFLIGHT(data);

    res.redirect('/AdminSelect');
})

module.exports = router;

