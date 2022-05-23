const HTTPHandler = require("../ports/HTTPHandler")


async function inputProductRequest(requestJSON){
    let res;
    try {   
        const productData = await HTTPHandler.inputProduct(requestJSON)
        
        res = productData;


    } catch (err) {
        console.log(err);
        return err;
    }

    return res;
} 

module.exports = {  
    inputProductRequest }