const UserProfiles = require("../Model/UserModel")


async function postUser(req,res)
{
    try
    {
        const user = new UserProfiles({
            name:req.body.name,
            email:req.body.email,
            age:req.body.age,
            country:req.body.country,
            password:req.body.password
        })
    
        const userData = await user.save()

        const responseData = {
            name:userData.name,
            email: userData.email,
            age: userData.age,
            country: userData.country
        }
        return res.status(200).json(responseData)
    }

    catch(error)
    {        
        console.log({error : "Internal server error"})
        return res.status(500).json({error : "Internal server error"})
    }
     
}



async function getUsers(req,res){
    try
    {
        const users = await UserProfiles.find(
            {}, {name:1, age:1, email:1, country:1, _id:0}
        )
        
        if(!users || users.length === 0)
        {
            return res.status(404).json("Can not find users")
        }

        else
        {
            return res.status(200).json(users)
        }
    }

    catch(error)
    {
        console.log({error : "Internal server error"})
        return res.status(500).json({error : "Internal server error"})  
    }
}



async function putUsers(req,res){
    try
    {
        const userId = req.params.id
        const updatedUser = req.body

        const user = await UserProfiles.findByIdAndUpdate(userId, updatedUser, {new:true})   

        if(!user)
        {
            return res.status(404).json("User not found")
        }
        else
        {
            const responseData = {
                name: user.name,
                email: user.email,
                age: user.age,
                country: user.country
            }
            return res.status(200).json(responseData)
        }
    }

    catch(error)
    {
        console.log({error : "Internal server error"})
        return res.status(500).json({error : "Internal server error"}) 
    }

}



async function deleteUsers(req,res){

    try
    {
        const id = req.params.id
        const user = await UserProfiles.findByIdAndDelete(id)   
        
        if(!user)
        {
            return res.status(404).json("User not found")
        } 

        else
        {
            return res.status(200).json("User has been deleted")
        }
    }

    catch(error)
    {
        console.log({error : "Internal server error"})
        return res.status(500).json({error : "Internal server error"})   
    }
}



module.exports = {
    getUsers,
    postUser,
    deleteUsers,
    putUsers

}