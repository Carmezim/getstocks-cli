#!/usr/bin/env node

const req = require('request');
const app = require('commander');

const URL = 'https://finance.google.com/finance/info?&q=';

app
  .arguments('<stock-ticker>')
  .action(function(stocksToGet){
    req(URL + stocksToGet, function (err, response, stockInfo) {
      if (!err && response.statusCode == 200) {
        stockInfo = JSON.parse(stockInfo.replace(/\/+/g, ''))
        console.log(stockInfo)
      } else {
        throw err;
      }
    });
  });

app.parse(process.argv);
