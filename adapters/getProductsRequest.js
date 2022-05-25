const HTTPHandler = require("../ports/HTTPHandler")


async function getProductsRequest(productId, query = undefined){
    let res;
    try {   
        const productData = await HTTPHandler.retrieveProduct(productId, query)
        
        res = {
            'statusCode': 200,
            'body': JSON.stringify(productData)
        }
        if (res == null){
            res = {
                'statusCode': 404
            }
        }
        console.log("getProductsRequest.js res ->");
        console.log(res);

    } catch (err) {
        console.log(err);
        return err;
    }

    return res;
} 

module.exports = { getProductsRequest }