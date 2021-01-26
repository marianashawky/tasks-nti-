


const request = require('request')



const getAllData = (cb) => {
    const url = `http://newsapi.org/v2/top-headlines?country=eg&category=science&apiKey=e83c1bf51ae141218ab2d129cf0071f5
    `

    request({ url, json:true }, (err,respnse) => {
        if(err){
            cb('server error', undefined)
        }
        else{
            cb(undefined, respnse.body)
        }
    })
}


module.exports = getAllData
