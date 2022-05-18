const HTTPHandler = require("../ports/HTTPHandler")


async function getUsersRequest(userId){
    let res;

    try {   
        const userData = await HTTPHandler.retrieveUser(userId)
        
        res = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: userData,
            })
        }

    } catch (err) {
        console.log(err);
        return err;
    }

    return res;
} 

module.exports = { getUsersRequest }