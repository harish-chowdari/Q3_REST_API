const express = require("express")
const app = express()
app.use(express.json())


const UserRoutes = require("./Routes/UserRoutes")
app.use("/api/userDb", UserRoutes)

require("./DB")

PORT = process.env.PORT || 3000
 
app.listen(PORT, ()=>{
    console.log(`server running on ${PORT} port`)
})