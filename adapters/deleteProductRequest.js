const HTTPHandler = require("../ports/HTTPHandler")


async function deleteProductRequest(deleteId){
    let res;
    try {   
        const productData = await HTTPHandler.deleteProduct(deleteId)
        
        res = productData;


    } catch (err) {
        console.log(err);
        return err;
    }

    return res;
} 

module.exports = {  
    deleteProductRequest }

