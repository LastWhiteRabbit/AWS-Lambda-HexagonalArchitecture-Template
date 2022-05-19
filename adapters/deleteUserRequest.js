const HTTPHandler = require("../ports/HTTPHandler")


async function deleteUserRequest(deleteId){
    let res;
    try {   
        const usersData = await HTTPHandler.deleteUser(deleteId)
        
        res = usersData;


    } catch (err) {
        console.log(err);
        return err;
    }

    return res;
} 

module.exports = {  
    deleteUserRequest }

