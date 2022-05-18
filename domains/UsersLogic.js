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

module.exports = {
    retrieveUserValues
}