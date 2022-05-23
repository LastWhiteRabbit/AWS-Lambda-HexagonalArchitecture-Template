const Repository = require("../ports/Repository");

const retrieveProductValues = async (productId) => {
    try{
        const productValue = await Repository.getProductData(productId);
        console.log(productValue)
        

        return productValue;

    } catch(err) {
        console.log(err)
        return err;
    }
}

const inputProductValues = async (requestJSON) => {
    try{
        const productValue = await Repository.inputProductData(requestJSON);
        console.log(productValue)
        

        return productValue;

    } catch(err) {
        console.log(err)
        return err;
    }
}


const deleteProductValues = async (deleteId) => {
    try{
        const productValue = await Repository.deleteProductData(deleteId);
        console.log(productValue)
        

        return productValue;

    } catch(err) {
        console.log(err)
        return err;
    }
}


const retrieveAllProductsValues = async () => {
    try{
        const productValue = await Repository.getAllProductsData();
        console.log(productValue)
        

        return productValue;

    } catch(err) {
        console.log(err)
        return err;
    }
}



module.exports = {
    retrieveProductValues,
    retrieveAllProductsValues,
    deleteProductValues,
    inputProductValues
}