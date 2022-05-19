const Repository = require("../ports/Repository");

const retrieveUserValues = async (userId) => {
    try{
        const userValue = await Repository.getUserData(userId);
        console.log(userValue)
        

        return userValue;

    } catch(err) {
        console.log(err)
        return err;
    }
}

const inputUserValues = async (requestJSON) => {
    try{
        const userValue = await Repository.inputUserData(requestJSON);
        console.log(userValue)
        

        return userValue;

    } catch(err) {
        console.log(err)
        return err;
    }
}


const deleteUserValues = async (deleteId) => {
    try{
        const userValue = await Repository.deleteUserData(deleteId);
        console.log(userValue)
        

        return userValue;

    } catch(err) {
        console.log(err)
        return err;
    }
}


const retrieveAllUsersValues = async () => {
    try{
        const usersValue = await Repository.getAllUsersData();
        console.log(usersValue)
        

        return usersValue;

    } catch(err) {
        console.log(err)
        return err;
    }
}



module.exports = {
    retrieveUserValues,
    retrieveAllUsersValues,
    deleteUserValues,
    inputUserValues
}