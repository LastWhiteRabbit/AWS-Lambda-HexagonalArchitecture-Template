const HTTPHandler = require("../ports/HTTPHandler")


async function getAllProductsRequest(){
    let res;
    try {   
        const productsData = await HTTPHandler.retrieveAllProducts()
        
        res = productsData;


    } catch (err) {
        console.log(err);
        return err;
    }

    return res;
} 

module.exports = {  
    getAllProductsRequest }