function csvJSON(csv){
// console.log(csv);
  var lines=csv.split("\r");

  var result = [];

  var headers=lines[0].split(",");

  // console.log(headers);

  for(var i=1;i<lines.length;i++){

    var obj = {};
    var currentline=lines[i].split(",");
    // console.log(currentline);

    for(var j=0;j<headers.length;j++){
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);

  }
  // console.log(JSON.stringify(result));
  return result; //JavaScript object
  // return JSON.stringify(result); //JSON
}