const express = require("express")
const app = express()
app.use(express.json())
const dotenv = require("dotenv")
dotenv.config()
require("./DB")


const UserRoutes = require("./Routes/UserRoutes")
app.use("/api", UserRoutes)



PORT = process.env.PORT || 3000
 
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT} port`)
})