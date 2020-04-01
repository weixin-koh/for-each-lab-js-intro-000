function iterativeLog(array) {
  var index = 0;
  
  array.forEach(element => {
    console.log(`${index}: ${element}`);
    index++;
  });
}

function iterate(callback) {
  var array = [1, 2, 3];
  array.forEach(callback);

  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
