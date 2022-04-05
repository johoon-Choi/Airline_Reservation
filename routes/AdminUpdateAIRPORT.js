import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) => {
    const AIRPORT_res = await selectSql.getAIRPORT();
    res.render('AdminUpdateAIRPORT', {
        title: "AIRPORT Update",
        AIRPORT_res
    });
});

router.post('/', async (req, res) => {
    const vars = req.body;

    const data = {
        Name: vars.name,
        Airport_code: vars.airport_code
    }

    console.log(data.Name);
    console.log(data.Airport_code);

    await updateSql.updateAIRPORT(data);

    res.redirect('/AdminSelect');
});

module.exports = router;