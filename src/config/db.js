
const mongose = require('mongoose');
require('dotenv').config();

async function  connect_db()
{
    try{   await mongose.connect(process.env.MONGO_URI) ; console.log("success")} 
    catch (error) { console.error("Error db ", error); process.exit(1)} 
}

module.exports =   connect_db;