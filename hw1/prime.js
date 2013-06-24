// JavaScript Document

//Input: Array of known Prime numbers
// and a number to check if it is prime.
//Returns: true if numToCheck is prime
//assumption:numbers in knowPrimeArray are less
//than numToCheck.
function isPrime(knownPrimeArray, numToCheck)
{
    var i = 0; //index for array
    var done = false; //bool for while loop
    var isPrime; //bool for numToCheck
    
    while (done == false)
    {
        if (knownPrimeArray[i] == null)
        {
            isPrime = true;
            done = true;
        }
        else if (numToCheck%knownPrimeArray[i] == 0)
        {
            isPrime = false;
            done = true;
        }
        else
        {
            i = i + 1;
        }
         
    }
    return isPrime;
}

//function to take array and turn into string
function arrayToString(numArray, numString)
{
    numString = numArray[0].toString();
    for(i = 1;i<numArray.length;i++)
    {
      numString = numString + "," + numArray[i].toString();
    }
    
    return numString;
}
//main program
//list of variables
var fs = require('fs'); //file variable
var outfile ="prime.txt";//name of file string to be written to.
var knownPrimeArray = [2]; //initalized to contain 2
var numToCheck = 3; //initalized to 3 since it is next integer to check
var numOfPrimes = 1; //number of primes currently found.
var maxPrimeIndex = 0; //array index of the last prime.
var Prime; //bool is true if number is prime.
var primeString = ""; //string to be output to file.

//loop to run through integers until all primes of 
//desired amount are found.
while (numOfPrimes < 100)
{
    Prime = isPrime(knownPrimeArray, numToCheck);
    
    if (Prime == true)
    {
        maxPrimeIndex = maxPrimeIndex + 1;
        knownPrimeArray[maxPrimeIndex] = numToCheck;
        numOfPrimes = numOfPrimes + 1;
        numToCheck = numToCheck + 1;  
    }
    else
    {   
        numToCheck = numToCheck + 1;
    }
}



primeString = arrayToString(knownPrimeArray, primeString);
fs.writeFileSync(outfile, primeString);   
console.log(primeString);



