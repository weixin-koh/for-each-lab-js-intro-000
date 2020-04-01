function iterativeLog(array) {
  array.forEach(element => {
    console.log(`${index}: ${element}`);
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