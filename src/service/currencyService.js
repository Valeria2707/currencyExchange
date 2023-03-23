const getCurrency = async (currencyFrom, currencyTo) =>{
    try{
        const response =  await fetch(`https://v6.exchangerate-api.com/v6/c2f390f68c2f25986d648f7a/latest/${currencyFrom}`);
        const dataCurrent =  await response.json();
        const { conversion_rates } = dataCurrent; 
        return conversion_rates[currencyTo];
    }
    catch (error) {
        console.error("Error currency:", error);
        throw error;
      }
}

export default getCurrency;