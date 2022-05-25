const getRate = require("../adapters/RateGetter.js");

const getRateData = async (currency) => {
    try{
        const data = await getRate(currency);

        console.log("CurrenciesService.js data ->");
        console.log(data);

        return data
    } catch(err) {
        return err
    }
}

module.exports = {
    getRateData
}