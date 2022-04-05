import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) => {
    const FLIGHT_res = await selectSql.getFLIGHT();
    res.render('AdminUpdateFLIGHT', {
        title: "FLIGHT Update",
        FLIGHT_res
    });
});

router.post('/', async (req, res) => {
    const vars = req.body;

    const data = {
        Flight_number: vars.flight_number,
        Weekdays: vars.weekdays
    }

    await updateSql.updateFLIGHT(data);

    res.redirect('/AdminSelect');
});

module.exports = router;