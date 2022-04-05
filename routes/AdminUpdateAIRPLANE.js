import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) => {
    const AIRPLANE_res = await selectSql.getAIRPLANE();
    res.render('AdminUpdateAIRPLANE', {
        title: "AIRPLANE Update",
        AIRPLANE_res
    });
});

router.post('/', async (req, res) => {
    const vars = req.body;

    const data = {
        Airplane_id: vars.airplane_id,
        Total_number_of_seats: vars.total_number_of_seats
    }

    await updateSql.updateAIRPLANE(data);

    res.redirect('/AdminSelect');
});

module.exports = router;