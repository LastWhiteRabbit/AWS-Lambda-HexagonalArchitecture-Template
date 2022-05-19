const stock = require("../domains/UsersLogic");

const retrieveUser = async (userId) => {
    try{
        const user = await stock.retrieveUserValues(userId)
        return user;
    }
    catch(err){
        console.log(err)
        return err
    }
}

const inputUser = async (requestJSON) => {
    try{
        const user = await stock.inputUserValues(requestJSON)
        return user;
    }
    catch(err){
        console.log(err)
        return err
    }
}



const retrieveAllUsers = async () => {
    try{
        const users = await stock.retrieveAllUsersValues()
        return users;
    }
    catch(err){
        console.log(err)
        return err
    }
}

const deleteUser = async (deleteId) => {
    try{
        const user = await stock.deleteUserValues(deleteId)
        return user;
    }
    catch(err){
        console.log(err)
        return err
    }
}




module.exports = {
    retrieveUser,
    retrieveAllUsers,
    deleteUser,
    inputUser
}