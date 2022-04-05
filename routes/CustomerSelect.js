import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res) {
    const SEAT_RESERVATIONS = await selectSql.getSEAT_RESERVATIONS();

    res.render('CustomerSelect', {
        title: 'Reservation Status',

        SEAT_RESERVATIONS
    });
});

module.exports = router;

