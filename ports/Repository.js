const getProductValue = require("../adapters/ProductsDB");

const getProductData = async (productId) => {
    try{
        const data = await getProductValue.getProductValue(productId);
        return data;
    } catch(err) {
        console.log(err)
        return err
    }
}

const inputProductData = async (requestJSON) => {
    try{
        const data = await getProductValue.inputProductValue(requestJSON);
        return data;
    } catch(err) {
        console.log(err)
        return err
    }
}



const deleteProductData = async (deleteId) => {
    try{
        const data = await getProductValue.deleteProductValue(deleteId);
        return data;
    } catch(err) {
        console.log(err)
        return err
    }
}



const getAllProductsData = async () => {
    try{
        const data = await getProductValue.getAllProductsValue();
        return data;
    } catch(err) {
        console.log(err)
        return err
    }
}




module.exports = {
    getProductData,
    getAllProductsData,
    deleteProductData,
    inputProductData
}