const mysql = require('mysql');
module.exports = {
    query: async function(sql, cb){
        console.log('sql', sql);
        const connection = await dbconnection();    
        // console.log('connection', connection);
        await connection.connect(function(err){
            if (err) throw err;
            console.log("Connected!");
        });
        try{
            await connection.query(sql, async function (err2, result) {
                // console.log('result', result); 
                connection.end();
                await cb(result);
            });
        }catch(e){
            console.log('e', e);
        }
    
    }
}

async function dbconnection(){
    return await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: 'bYQV{"df-"sP*p4;',
        database: "get_screenshot"
    })
}

