function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

function isPrime(num) {
    // Check if it's an even number
    if (num % 2 === 0) return false;

    // Loop through all odd numbers that might divide
    for (var x = 3; x <= Math.round(num/2); x += 2)
        // Check if it divides cleanly
        if (num % x === 0)
            return false
    // Otherwise, it is a prime
    return true
}



function checkPalindrom(str) {
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function Application() {
}

Application.prototype.myFunction = function() {
  
  	//this will fail because null does not equal undefined
  	//return;

  	//this will pass!
   	return null;
  
};

Application.prototype.getLargestPrimePalindrome = function() {

  // get all prime number less then 1000;
  var primeRoot = getPrimes(1000),
      primeNumber = "";
      palindromResult = "";
      ResultString = "";

  // start consuming the primeRoot array from the end backwords and check
  // if it is a palindrom    
  for (var i = primeRoot.length - 1; i >= 0; i--) {
    primeNumber = primeRoot[i];

    // check if the primeNumber is a 
    palindromResult = checkPalindrom(primeNumber.toString());
    if(palindromResult)
    {
      //ResultString = primeNumber + " is a prime palindrom " + palindromResult;
      break;
    }
  };
  //return the first prime number that is a palindrom
  return primeNumber;
   
}

Application.prototype.getSumOfPrimes = function() {

  var currentPrime = 2,
      sumOfPrimes = 0,
      primeRoot = [],
      primeSeed = currentPrime;

  primeRoot = getPrimes(currentPrime);
  while (primeRoot.length < 1000)
  {
    currentPrime = primeRoot[primeRoot.length - 1];
    primeRoot = getPrimes(primeSeed);
    primeSeed = primeSeed + 1;
  }

  for (var i = primeRoot.length - 1; i >= 0; i--) {
    sumOfPrimes = sumOfPrimes + primeRoot[i]
  };
  
  return sumOfPrimes;
}

Application.prototype.getLowerCase = function(file) {

  var txtFile = new XMLHttpRequest();
  var lines = [];
  var returnArray = new Array();

  txtFile.open("GET", file, true);
  txtFile.onreadystatechange = function()
  {
    if (txtFile.readyState === 4) {  // document is ready to parse.
      if (txtFile.status === 200) {  // file is found
        allText = txtFile.responseText; 
        lines = txtFile.responseText.split("\n");      
        returnArray = lines.slice(0);
        for (var i = returnArray.length - 1; i >= 0; i--) {
          outputString = returnArray[i];
          outputString = outputString.toLowerCase();
          console.log(outputString);
        };

      }
    }
  }
  txtFile.send(null);

  

 	//return returnArray;  
}


Application.prototype.getFibonacciSeries = function() {

	//this will fail because null does not equal undefined
  	return;

  	//this will pass!
   	//return null;
  
}

Application.prototype.MultiplicationTables = function() {

	//this will fail because null does not equal undefined
  	return;

  	//this will pass!
   	//return null;
  
}


Application.prototype.QueryBoard = function() {

	var boardX = 256;
	var boardY = 256;
	//this will fail because null does not equal undefined
  	return;

  	//this will pass!
   	//return null;
  
}
