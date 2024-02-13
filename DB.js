const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

module.exports = mongoose.connect(process.env.DB_URI)

const con = mongoose.connection 

con.on("error", ()=>{
    console.log("Error connecting database")
})

con.once("open", ()=>{
    console.log("Database Connected...")
})