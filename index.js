"use strict"

const req = require('request');

const URL = 'https://finance.google.com/finance/info?&q=';
var stocks = ["KO", "BRK.A"]

const stocksToGet = stocks.join(',');

console.log(stocksToGet);

function get_prices(){
  req(URL + stocksToGet, function (err, response, stockInfo) {
    if (!err && response.statusCode == 200) {
      stockInfo = JSON.parse(stockInfo.replace(/\/+/g, ''))
        console.log(stockInfo)
    } else {
      throw err;
    }  
  })
}
setInterval(get_prices, 1000);
