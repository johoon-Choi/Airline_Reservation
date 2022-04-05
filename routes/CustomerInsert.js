import express from "express";
import { insertSql, selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('CustomerInsert');
})

router.post('/', (req, res) => {
    const RESERVATION = req.body;

    const data = {
        Flight_number: RESERVATION.Flight_number,
        Leg_number: RESERVATION.Leg_number,
        Date: RESERVATION.Date,
        Seat_number: RESERVATION.Seat_number,
        Customer_name: RESERVATION.Customer_name,
        Customer_phone: RESERVATION.Customer_phone
    }
    
    insertSql.setSEAT_RESERVATIONS(data);

    res.redirect('/CustomerSelect');
})

module.exports = router;

