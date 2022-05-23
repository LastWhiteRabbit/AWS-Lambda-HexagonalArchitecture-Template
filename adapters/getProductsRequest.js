const HTTPHandler = require("../ports/HTTPHandler")


async function getProductsRequest(productId){
    let res;
    try {   
        const productData = await HTTPHandler.retrieveProduct(productId)
        
        res = {
            'statusCode': 200,
            'body': JSON.stringify(productData)
        }
        if (res == null){
            res = {
                'statusCode': 404
            }
        }

    } catch (err) {
        console.log(err);
        return err;
    }

    return res;
} 

module.exports = { getProductsRequest }