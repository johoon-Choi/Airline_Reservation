import mysql from "mysql2";

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'johoon',
        database: 'airline',
        password: 'johoonee',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

export const selectSql = {
    getAIRPORT : async () => { // await 는 query 가 끝날 때 까지 기다린다.
        const [rows] = await promisePool.query(`select * from AIRPORT`);
        return rows
    },
    getAIRPLANE : async () => {
        const [rows] = await promisePool.query(`select * from AIRPLANE`);
        return rows
    },
    getFLIGHT : async () => {
        const [rows] = await promisePool.query(`select * from FLIGHT`);
        return rows
    },
    getLEG_INSTANCE : async () => { // await 는 query 가 끝날 때 까지 기다린다.
        const [rows] = await promisePool.query(`select * from LEG_INSTANCE`);
        return rows
    },
    getSEAT_RESERVATIONS : async () => { // await 는 query 가 끝날 때 까지 기다린다.
        const [rows] = await promisePool.query(`select * from SEAT_RESERVATIONS`);
        return rows
    }
}

export const updateSql = {
    updateAIRPORT : async(data) => {
        const sql = `update AIRPORT set Name = "${data.Name}" where Airport_code = "${data.Airport_code}"`;// WHERE Airport_code = "${data.airport_code}"`;
        await promisePool.query(sql);
    },
    updateAIRPLANE : async (data) => {
        const sql = `update AIRPLANE set Total_number_of_seats = "${data.Total_number_of_seats}" where Airplane_id = "${data.Airplane_id}"`;
        await promisePool.query(sql);
    },
    updateFLIGHT : async (data) => {
        const sql = `update FLIGHT set Weekdays = "${data.Weekdays}" where Flight_number = "${data.Flight_number}"`;
        await promisePool.query(sql);
    }
}

export const deleteSql = {
    deleteAIRPORT : async (data) => {
        const sql = `delete from AIRPORT WHERE Airport_code = "${data.Airport_code}"`;
        await promisePool.query(sql);
    },
    deleteAIRPLANE : async (data) => {
        const sql = `delete from AIRPLANE WHERE Airplane_id = "${data.Airplane_id}"`;
        await promisePool.query(sql);
    },
    deleteFLIGHT : async (data) => {
        const sql = `delete from FLIGHT WHERE Flight_number = "${data.Flight_number}"`;
        await promisePool.query(sql);
    },
    deleteSEAT_RESERVATIONS : async (data) => {
        const sql = `delete from SEAT_RESERVATIONS WHERE Flight_number = "${data.Flight_number}"
                                                    AND  Leg_number = "${data.Leg_number}"
                                                    AND  Date = "${data.Date}"
                                                    AND  Seat_number = "${data.Seat_number}"`;
        await promisePool.query(sql);
    },
}

export const insertSql = {
    setAIRPORT : async (data) => {
        const sql = `insert into AIRPORT values (
            "${data.Airport_code}", "${data.Name}",  "${data.City}", "${data.State}")`;
            await promisePool.query(sql);
    },
    setAIRPLANE : async (data) => {
        const sql = `insert into AIRPLANE values (
            "${data.Airplane_id}", "${data.Total_number_of_seats}",  "${data.Airplane_type}")`;
            await promisePool.query(sql);
    },
    setFLIGHT : async (data) => {
        const sql = `insert into FLIGHT values (
            "${data.Flight_number}", "${data.Airline}",  "${data.Weekdays}")`;
            await promisePool.query(sql);
    },
    setSEAT_RESERVATIONS : async (data) => {
        const sql = `insert into SEAT_RESERVATIONS values (
            "${data.Flight_number}", "${data.Leg_number}",  "${data.Date}", "${data.Seat_number}", 
            "${data.Customer_name}", "${data.Customer_phone}")`;
            await promisePool.query(sql);
    }
}

// export const insertSql = {
//     setAIRPORT : async (data) => {
//         const sql = `insert into AIRPORT values (
//             "${data.Airport_code}", "${data.Name}",  "${data.City}", "${data.State}")`;
        
//             await promisePool.query(sql);
//     },

//     setDepartment : async (data) => {
//         const sql = `insert into department values (
//             "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}")`;

//             await promisePool.query(sql);
//     },
// }

// data 를 받고, query 문을 실행한다.
// export const deleteSql = {
//     deleteDepartment : async (data) => {
//         // Step 3
//         console.log('deleteSql.deleteDepartment:', data.Dnumber); // console 창에 삭제버튼을 누른 DATA의
//                                                                   //   Dnumber를 출력한다.
//         const sql = `delete from department WHERE Dnumber BETWEEN ${data.Dnumber} - 2 AND ${data.Dnumber}`;
        
//         // Step 2
//         //console.log('deleteSql.deleteDepartment:', data.Dnumber);
//         //const sql = `delete from department where Dnumber = ${data.Dnumber}`;

        
//         await promisePool.query(sql);
//     },
// }

// export const updateteSql = {
//     deleteDepartment : async (data) => {
//         // Step 3
//         console.log('deleteSql.deleteDepartment:', data.Dnumber); // console 창에 삭제버튼을 누른 DATA의
//                                                                   //   Dnumber를 출력한다.
//         const sql = `delete from department WHERE Dnumber BETWEEN ${data.Dnumber} - 2 AND ${data.Dnumber}`;
        
//         // Step 2
//         //console.log('deleteSql.deleteDepartment:', data.Dnumber);
//         //const sql = `delete from department where Dnumber = ${data.Dnumber}`;

        
//         await promisePool.query(sql);
//     },
// }