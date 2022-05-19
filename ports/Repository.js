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

const inputUserData = async (requestJSON) => {
    try{
        const data = await getUserValue.inputUserValue(requestJSON);
        return data;
    } catch(err) {
        console.log(err)
        return err
    }
}



const deleteUserData = async (deleteId) => {
    try{
        const data = await getUserValue.deleteUserValue(deleteId);
        return data;
    } catch(err) {
        console.log(err)
        return err
    }
}



const getAllUsersData = async () => {
    try{
        const data = await getUserValue.getAllUsersValue();
        return data;
    } catch(err) {
        console.log(err)
        return err
    }
}




module.exports = {
    getUserData,
    getAllUsersData,
    deleteUserData,
    inputUserData
}