 const  axios = require('axios')
 const mapToArrToStrings = require('../mapArrToStrings/mapArrToStrings')


 const getData = async ()=>{
    try{

    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const usersIds = res.data.map(users => users.id)
        return mapToArrToStrings(usersIds)
    }catch (e){
        console.error(e)
    }

 }

 module.exports = getData