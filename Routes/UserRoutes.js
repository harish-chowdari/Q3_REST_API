const express = require("express")
const router = express.Router() 

const UserController = require("../Controllers/UserControllers")


router.post("/POST/users", UserController.postUser)


router.get("/GET/users", UserController.getUsers)


router.delete("/DELETE/users/:id", UserController.deleteUsers)


router.put("/PUT/users/:id", UserController.putUsers)



module.exports = router