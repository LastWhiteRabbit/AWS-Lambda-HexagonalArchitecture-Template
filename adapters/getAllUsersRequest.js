const HTTPHandler = require("../ports/HTTPHandler")


async function getAllUsersRequest(){
    let res;
    try {   
        const usersData = await HTTPHandler.retrieveAllUsers()
        
        res = usersData;


    } catch (err) {
        console.log(err);
        return err;
    }

    return res;
} 

module.exports = {  
    getAllUsersRequest }