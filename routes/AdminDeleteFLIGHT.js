import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) => {
    const FLIGHT = await selectSql.getFLIGHT();

    res.render('AdminDeleteFLIGHT', {
        title: "Delete FLIGHT Data",
        FLIGHT  
    })
});

router.post('/', async (req, res) => {
    console.log('delete router:', req.body.delBtn);

    const data = {
        Flight_number: req.body.delBtn,
    };

    await deleteSql.deleteFLIGHT(data);

    res.redirect('/AdminDeleteFLIGHT');
});

module.exports = router;

