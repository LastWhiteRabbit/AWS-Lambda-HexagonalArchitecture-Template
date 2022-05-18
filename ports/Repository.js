const getUserValue = require("../adapters/UsersDB");

const getUserData = async (userId) => {
    try{
        const data = await getUserValue.getUserValue(userId);
        return data;
    } catch(err) {
        console.log(err)
        return err
    }
}

module.exports = {
    getUserData
}