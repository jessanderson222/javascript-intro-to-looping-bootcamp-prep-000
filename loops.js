	
function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i <= 1) {
      array.push (`I am ${i} strange loop.`);
    } else {
      array.push (`I am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop (n) {
  while (n > 0) {
    console.log(--n)
    }
    return 'done'
  }
  
<<<<<<< HEAD
function doWhileLoop(array) {
  do {
    array.shift();
  } while (array.length > 0);
  return array;
=======
  function doWhileLoop(array) {
    function incrementVariable() {
  i = i + 1;
}
 
do {
  console.log("doo-bee-doo-bee-doo");
  incrementVariable();
} while (i < 5);
>>>>>>> 9c9ba9d249eb24419e99cd0dfd6ad56ab0187b53
  }