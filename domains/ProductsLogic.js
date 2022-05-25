const Repository = require("../ports/Repository");
const Rate = require("../ports/CurrenciesService.js")

const retrieveProductValues = async (productId, query = undefined) => {
    try{
        const productValue = await Repository.getProductData(productId);

        console.log("ProductLogic.js productValue ->");
        console.log(productValue);

        console.log("ProductLogic.js query ->");
        console.log(query);

        if(query!=undefined){

            const rateValue = await Rate.getRateData(query);
  
            const temp = rateValue.rates[query];
            console.log("currency rate stringify-->");
            console.log(temp);

            productValue.Item.price = productValue.Item.price * temp;
            console.log("productValue rate stringify-->");
            console.log(productValue);

            console.log("currency rate-->");
            console.log(rateValue.rates.AED);
        }
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