


// ____________________________________________________________
// ~~~their solution~~~~
// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
//
// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }
//
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)
//
//       results[index] = data.toString()
//       count++
//
//       if (count == 3)
//         printResults()
//     }))
//   })
// }
//
// for (var i = 0; i < 3; i++)
//   httpGet(i)
//
// ~~~my solution~~~~
// var bl = require('bl');
// var http = require('http');
// var url = require('url');
// var async = require('async');
//
// async.series([
//
//   function(callback) {
//       function innerCall(response) {
//         response.setEncoding('utf8');
//         response.pipe(bl(function(err, data) {
//           return callback(null, data.toString());
//         }));
//       }
//       http.get(process.argv[2], innerCall);
//   },
//   function(callback) {
//
//       function innerCall(response) {
//         response.setEncoding('utf8');
//         response.pipe(bl(function(err, data) {
//           return callback(null, data.toString());
//         }));
//       }
//       http.get(process.argv[3], innerCall);
//   },
//   function(callback) {
//
//       function innerCall(response) {
//         response.setEncoding('utf8');
//         response.pipe(bl(function(err, data) {
//           return callback(null, data.toString());
//         }));
//       }
//       http.get(process.argv[4], innerCall);
//   },
//
// ],
//   function(err, results) {
//
//     results.forEach(function(val) {
//       console.log(val);
//     });
//
//   }
// );
//


//------------------------------------------------------------------
// Example 8
// var bl = require('bl');
// var http = require('http');
//
//
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.pipe(bl(function(err,data){
//     console.log(data.length);
//     console.log(data.toString());
//   }));
// });

//.................................................................
// var http = require('http');

// http.get(process.argv[2],callback);
//
//
// function callback (response){
//   response.setEncoding('utf8');
//   response.on('data',function(data){ console.log(data);});
//
// }
//
//
// var http = require('http')
//
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })


//-------------------------------------------------------
// when they say use require('blah') that means they are
// saying require this module
// var mymodule = require('./module.js');
// var filepath = process.argv[2];
// var fileExt = process.argv[3];
//
// mymodule(filepath, fileExt, function(err, data) {
//   if (err) {
//     console.log("an error occured");
//   } else {
//     data.forEach(function(value) {
//       console.log(value);
//     });
//   }
// });
// ------------------------------------------------------
// solution to mod learnyounode
// solution.js:
//
//     var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]
//
//     filterFn(dir, filterStr, function (err, list) {
//       if (err)
//         return console.error('There was an error:', err)
//
//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })
//
// ───────────────────────────────────────────────────────────────────
// solution_filter.js:
//
//     var fs = require('fs')
//     var path = require('path')
//
//     module.exports = function (dir, filterStr, callback) {
//
//       fs.readdir(dir, function (err, list) {
//         if (err)
//           return callback(err)
//
//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })
//
//         callback(null, list)
//       })
//     }
//
//
// ------------------------------------------------------

// var fs = require('fs');
// var path = require('path'); //*** they don't mention require('path')
// var filepath = process.argv[2];
// var fileExt = process.argv[3];
//
// function callback(err, list) {
//   if (err != true) {
//     list.forEach(function(file, index, list) {
//       var fullExt = '.'.concat(fileExt);
//       if (path.extname(file) === fullExt) {
//         console.log(file);
//       }
//     });
//
//   } else {
//     console.log("error occured");
//   }
// }
// fs.readdir(filepath, callback);






// //had problem with reading in command line arg [didnt use 2]
// var fs = require('fs');
// var filepath = process.argv[2];
// //using relative
// function callback(err,data){
//   if(err != true){
//
//     //console.log(data);
//     var arrStr = data.split('\n');
//     console.log(arrStr.length-1);
//   }else{
//     console.log("error occured");
//   }
// }
// fs.readFile(filepath,'utf8',callback);






//console.log(process.argv);


// var array = (process.argv);
//
// var sum = 0;
//
// array.shift();
// array.shift();
//
//  array.forEach(
//   function addNumber(value){sum += parseInt(value);}
//  );
//
// // for(var i = 0; i < array.length; i++){
// //
// //   sum = sum + array[i];
// // }
//
// console.log(sum);
// var http = require('http');
//
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World\n');
// }).listen(8124);
//
// console.log('Server running at http://127.0.0.1:8124/');
