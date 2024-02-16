const express = require("express")
const router = express.Router() 

const UserController = require("../Controllers/UserControllers")


router.post("/users", UserController.postUser)


router.get("/users", UserController.getUsers)


router.delete("/users/:id", UserController.deleteUsers)


router.put("/users/:id", UserController.putUsers)



module.exports = router