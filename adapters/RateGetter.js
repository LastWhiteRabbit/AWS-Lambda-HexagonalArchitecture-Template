const axios = require("axios")

const getCurrencies = async (currencies) => {
    try{   
    // replace with  URL from the service   
        const res = await axios.get(`https://open.er-api.com/v6/latest/EUR?rates=${currencies}`)

        console.log("RateGetter.js res ->");
        console.log(res);

        return res.data
    } catch(err) {
        return err; 
    }
}

module.exports = getCurrencies;