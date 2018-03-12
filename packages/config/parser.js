var fs = require('fs');
var scssToJson = require('scss-to-json');
var camelCase = require('camelcase');
var path = require('path');
var filePath = path.resolve(__dirname, './variables.scss');
var variables = scssToJson(filePath);
var result = {}

Object.keys(variables).forEach( key => {
  var value = variables[key]
  var parsedKey = camelCase(key).substring(1)

  result[parsedKey] = value
})

fs.writeFile(path.resolve(__dirname, './variables.json'), JSON.stringify(result), 'utf8');
