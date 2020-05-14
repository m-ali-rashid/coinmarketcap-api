const express = require("express")
const axios = require("axios")

const PORT = process.env.PORT || 5000
const app = express()
const requestopts = {
   convert: 'USD',
   headers: {
      'X-CMC_PRO_API_KEY': 'fb0fb910-0850-4f4b-9b41-cac24e188187'
   }
}

app.set("json spaces", 2)

// .com/v1/cryptocurrency/info?id=1
// .com/v1/cryptocurrency/map
// .com/v1/cryptocurrency/map?start=10&limit=20
// .com/v1/cryptocurrency/listings/latest
// .com/v1/cryptocurrency/quotes/latest?symbol=BTC
// .com/v1/fiat/map
// .com/v1/fiat/map?start=1&limit=10

app.get('/top/:page/:limit', (req, res) => {
   let page = req.params.page
   let limit = req.params.limit
   // console.log(req.params)
   axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=${page}&limit=${limit}`, requestopts)
      .then(function (response) {
         res.json(response.data)
      }).catch(function (error) {
         res.json(error)
      })
})
app.get('/currencies/:coin', (req, res) => {
   let coin = req.params.coin
   // console.log(coin)
   axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${coin}`, requestopts)
      .then(function (response) {
         res.json(response.data)
      }).catch(function (error) {
         res.json(error)
      })
})



// Top 100 CryptoCurrency Listings
// app.get('/all', (req, res) => {
//    axios.get(`https://pro-api.coinmarketcap.com/v1${url.map}`, requestopts)
//       .then(function (response) {
//          res.json(response.data)
//       }).catch(function (error) {
//          res.json(error)
//       })
// })

// Total CryptoCurrency Mappings
// app.get('/top', (req, res) => {
//    console.log(req.params);
//    axios.get(`https://pro-api.coinmarketcap.com/v1${url.listings}?start=1&limit=10`, requestopts)
//       .then(function (response) {
//          res.json(response.data)
//       }).catch(function (error) {
//          res.json(error)
//       })
// })

//App listen to PORT
app.listen(PORT, function () {
   console.log(`Express server listening on port ${PORT}`);
})
