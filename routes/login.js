import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const vars = req.body;
    let whoAmI = vars.id;
 
    if (whoAmI === 'Admin') {
        res.redirect('/AdminSelect'); 
    } else if (whoAmI === 'Customer') {
        res.redirect('/CustomerSelect'); 
    } else {                               
        console.log('login failed!');
        res.send("<script>alter('로그인에 실패했습니다.'); location.href='/';</script>");
    }
});

module.exports = router;

