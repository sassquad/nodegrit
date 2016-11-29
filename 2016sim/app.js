#!/usr/bin/env node

"use strict";

var chalk = require('chalk');
var figlet = require('figlet');
var randomInt = require('random-int');
var ohdear = require('./ohdear.js');

// Clear screen
process.stdout.write('\x1Bc');

// Display title 
console.log(
  chalk.yellow(
    figlet.textSync('2016 Simulator', { horizontalLayout: 'full' }, function(err, data) {
    	if (err) {
    		console.log('Something went wrong...');
    		console.dir(err);
    		return;
    	}
    	console.log(data);
    })
  )
);

// Start simulation
setInterval(function(){
  console.log(chalk.red(ohdear.something(randomInt(5))));
}, 2000);      
