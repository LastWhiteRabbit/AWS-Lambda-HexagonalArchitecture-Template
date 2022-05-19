const HTTPHandler = require("../ports/HTTPHandler")


async function inputUserRequest(requestJSON){
    let res;
    try {   
        const usersData = await HTTPHandler.inputUser(requestJSON)
        
        res = usersData;


    } catch (err) {
        console.log(err);
        return err;
    }

    return res;
} 

module.exports = {  
    inputUserRequest }