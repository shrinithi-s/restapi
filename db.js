require('dotenv').config()
const Pool=require('pg').Pool;

const pool=new Pool({
    user:process.env.USER,
    host:process.env.HOST,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    port:process.env.PORT,
});

module.exports=pool;