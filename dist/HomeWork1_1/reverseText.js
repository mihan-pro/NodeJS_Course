"use strict";var _process=require("process");function reverse(str){return str.split('').reverse().join('').trim();}_process.stdin.setEncoding('utf-8');_process.stdin.on('data',data=>{_process.stdout.write(`${reverse(data)}\n\n`);});