import axios from 'axios';
const cUrl = "curl --request GET \\\n" +
    "\t--url 'https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/modules?ticker=AAPL&module=financial-data' \\\n" +
    "\t--header 'x-rapidapi-host: yahoo-finance15.p.rapidapi.com' \\\n" +
    "\t--header 'x-rapidapi-key: 688d0aaademsh371e04b2debc45fp12667bjsnc3f55f4eeb13'"




const options = {
    headers: {
        'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
        'x-rapidapi-key': '688d0aaademsh371e04b2debc45fp12667bjsnc3f55f4eeb13'
    }
};

export const getFinancialDataOperations = async () => {

    const res = await axios.get('https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/modules?ticker=AAPL&module=financial-data', options)

    return res.data

}
