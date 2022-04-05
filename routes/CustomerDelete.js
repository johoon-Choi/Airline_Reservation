import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) => {
    const SEAT_RESERVATIONS = await selectSql.getSEAT_RESERVATIONS();

    res.render('CustomerDelete', {
        title: "Cancel Reservation",
        SEAT_RESERVATIONS
    })
});

router.post('/', async (req, res) => {
    console.log('delete router:', req.body.delBtn);

    const data = {
        Flight_number: req.body.delBtn, // Button 을 누른 Data 의 Dnumber 값을   
    };                            //   Dnumber 에 저장을 한다.

    await deleteSql.deleteSEAT_RESERVATIONS(data); // 삭제하려는 data 가 삭제가 될 때 까지 기다린다.

    res.redirect('/CustomerDelete'); // 삭제 완료 후 /delete page 로 다시 이동을 한다.
});                       //   로 이동한다.

module.exports = router;

