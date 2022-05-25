const products = require("../domains/ProductsLogic");

const retrieveProduct = async (productId, query = undefined) => {
    try{
        const product = await products.retrieveProductValues(productId, query)

        console.log("HTTPHandler.js res ->");
        console.log(product);

        return product;
    }
    catch(err){
        console.log(err)
        return err
    }
}

const inputProduct = async (requestJSON) => {
    try{
        const product = await products.inputProductValues(requestJSON)
        return product;
    }
    catch(err){
        console.log(err)
        return err
    }
}



const retrieveAllProducts = async () => {
    try{
        const allProducts = await products.retrieveAllProductsValues();
        return allProducts;
    }
    catch(err){
        console.log(err)
        return err
    }
}

const deleteProduct = async (deleteId) => {
    try{
        const product = await products.deleteProductValues(deleteId)
        return product;
    }
    catch(err){
        console.log(err)
        return err
    }
}




module.exports = {
    retrieveProduct,
    retrieveAllProducts,
    deleteProduct,
    inputProduct
}