"use strict";

console.log('Starting 2016 Simulator\n');

var ohdear = require('./ohdear.js');

var output = ohdear.something();

console.log("####################");
console.log("#  2016 SIMULATOR  #");
console.log("####################");

setInterval(function(){
  console.log(output);
}, 2000);      
