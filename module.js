module.exports = function(filepath, fileExt, isback) {
  var fs = require('fs');
  var path = require('path');

  fs.readdir(filepath, function(err, list) {
    if (err) {
      return isback(err);
    } else {

      var retArr = [];

      list.forEach(function(file, index, list) {
        var fullExt = '.'.concat(fileExt);
        if (path.extname(file) === fullExt) {
          retArr.push(file);
        }
      });
      return isback(null, retArr);
    }
  });
}
