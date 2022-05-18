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

module.exports = {
    retrieveUser
}