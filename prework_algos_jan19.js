/////////////////////////////////////////////////
//Page 16 
/////////////////////////////////////////////////

//Setting and Swapping
var myNumber = 42;
var myName = "Katie";

var temp = myNumber;
myNumber = myName;
myName = temp;

console.log(myNumber);
console.log(myName);


//Print and Count
var multFive = [];
var count = 0;
for(var x=512; x<=4096; x++)
{
    if(x%5 == 0)
    {
        multFive.push(x);
        count = count +1;
    }
}
console.log(multFive);
console.log(count);

//Print -52 to 1066
for(var x = -52; x<=1066; x++)
{
    console.log(x);
}

//Multiples of 6
var x = 6;
while(x<=60000)
{
    console.log(x);
    x=x+6;
}

//Don't Worry, Be Happy
function beCheerful() {
    for(var i = 0; i<98; i++)
    {
        console.log("good morning!");
    }
}
beCheerful()

//Counting, the Dojo Way
for(var d = 1; d<=100; d++)
{
    if(d%5 == 0)
    {
        console.log("Coding");
        if(d%10 == 0)
        {
            console.log(" Dojo");
        }
    }
    else 
    {
        console.log(d);
    }
}

//Multiples of Three - but Not All
for(var t = -300; t<=0; t=t+3)
{
    if(t != -6 || t != -3)
    {
        console.log(t);
    }
}

//What Do You Know?
function wdyk(incoming) {
    if(incoming == "Donuts")
    {
        console.log("Did you bring coffee, too?");
    }
    else
    {
        console.log("No, thanks.");
    }
}
wdyk();

//Printing Integers with While
var x = 2000;
while(x<=5280)
{
    console.log(x);
    x = x+1;
}

//Whoa, That Sucker's Huge
var sum = 0;
for(var h = -300000; h<=300000; h++)
{
    if(h%2 != 0)
    {
        sum = sum + h;
    }
}
console.log(sum);

//You Say It's Your Birthday
function birthday (month, day) {
    if(month == 08 && day == 14)
    {
        console.log("How did you know?")
    }
    else
    {
        console.log("Just another day....")
    }
}
birthday();

//Countdown by Fours
var f = 2000;
while(f>0)
{
    console.log(f);
    f = f-4;
}

//Leap Year
function leapyear(year) {
    if(year%4 == 0)
    {
        console.log("This is a leap year");
    }
    else if(year%100 == 0)
    {
        console.log("Not a leap year");
    }
    else if(year%400 == 0)
    {
        console.log("This is a leap year");
    }
    else
    {
        console.log("Not a leap year");
    }
}
leapyear();

//Flexible Countdown
var lowNum = 2;
var highNum = 9;
var mult = 3;

function flexible(lowNum, highNum, mult) {
    for(var a = highNum; a>lowNum; a--)
    {
        while(a%mult == 0) 
        {
            console.log(flex);
        }
    }
}
flexible();

//The Final Countdown
var param1 = 3;
var param2 = 5;
var param3 = 17;
var param4 = 9;

function countdown(param1, param2, param3, param4) {
    for (var i = param2; i<param3; i++)
    {
        while(i%param1 == 0 && i!=param4) {
            console.log(i);
        }
    }
}
countdown();


/////////////////////////////////////////////////
//Page 20
/////////////////////////////////////////////////


//Countdown
function zeroth(num) {
    var arr = [];
    for (var x = num; x>=0; x--) {
        arr.push[x];
        console.log(arr);
        console.log(arr.length);
    }
}
zeroth();

//Print and Return
function pandr(arr) {
    console.log(arr[0]);
    return arr[1];
}
pandr();

//First Plus Length
function fpl(array) {
    return array[0]+array.length; //if array[0] is a string or boolean it will show the two values together, ex: waht?2, false2
}
fpl();

//Values Greater Than Second
var arr = [1,3,5,7,9,13];
var count = 0;
for(var x = 0; x<arr.length; x++){
    if(arr[x]>arr[1]) {
        console.log(arr[x]);  
        count = count + 1;  
    }
    return count;
}

//Values Greater Than Second, Generalized
function vgtsg(arr) {
    var count = 0;
    var newarr = [];
    for(var x = 0; x<arr.length; x++){
        if(arr.length == 1) { //if the 1st arr is only one element long
            console.log("Your array is not long enough.")
        }
        else if(arr[x]>arr[1]) {
            console.log(arr[x]);  
            count = count + 1; 
            newarr.push(arr[x]); 
        }
        return newarr;
        return count; 
    }
}
vgtsg();

//This Length, That Value
function tltv(arr, num1, num2) {
    for(var x=0; x<arr.length; x++) {
        while(arr.length == num1) {
            if(num1 == num2) {
                console.log("Jinx!");
            }
            arr[x] = num2;
        }
    }
    return arr;
}
tltv();

//Fit the First Value
function ftfv(arr) {
    for(var i = 0; x<arr.length; x++) {
        if(arr[0]>arr.length) {
            console.log("Too big!");
        }
        else(arr[0]<arr.length) {
            console.log("Too small!");
        }
        else {
            console.log("Just right!");
        }
    }
}
ftfv();

//Farenheit to Celsius
function fahrenheitToCelsius(fDegrees) {
    cDegrees = (5/9)*(fDegrees - 32);
    return cDegrees;
}
fahrenheitToCelsius();

//Celsius to Fahrenheit
function celsiusToFahrenheit(cDegrees) {
    fDegrees = (9/5 * cDegrees) + 32;
    return fDegrees;
}
celsiusToFahrenheit();
///optional, C=F?
var cDegrees = 200;
var fDegrees = 0;
while(cDegrees != fDegrees) {
    fDegrees = (9/5 * cDegrees) + 32;
    cDegrees --;
}
console.log("Celsius and Fahrenheit are the same value at " + cDegrees);


/////////////////////////////////////////////////
//Page 22
/////////////////////////////////////////////////

//Biggie Size
function biggie(makeItBig) {
	for(var index = 0; index<arr.length; index++)
		if(makeItBig[index]<0) {
			makeItBig[index] = "big";
		}
	return makeItBig;
}
biggie();

//Print Low, Return High
function lowhigh(arr) {
	var low = arr[0];
	var high = arr[0];
	for(var x=0; x<arr.length; x++) {
		if(arr[x]<low) {
			low = arr[x];
		}
		if(arr[x]>high) {
			high = arr[x];
		}
	}
	console.log(low);
	return high;
}
lowhigh();

//Print One, Return Another
function oneanother(arr) {
	var odd = arr[0];
	for(var x=0; x<arr.length; x++) {
		if(arr[x]%2 != 0) {
			odd = arr[x];
			break;
		}
	}
	console.log(arr[arr.length-2]);
	return odd;
}
oneanother();

//Double Vision
function doublevision(arr) {
	var newarr = [];
	for(var x=0; x<arr.length; x++) {
		arr[x] = arr[x]*2;
		newarr.push(arr[x]);
	}
	return newarr;
}
doublevision();

//Count Positives
function copo(arr) {
	var pos = 0;
	for(var x=0; x<arr.length; x++) {
		if(arr[x]>0) {
			pos = pos+1;
		}
	}
	arr[arr.length-1] = pos;
	return arr;
}
copo();

//Evens and Odds
function evensodds(arr) {
	for(var x=0; x<arr.length; x++) {
		if(arr[x]%2 != 0 && arr[x+1]%2 != 0 && arr[x+2]%2 != 0){
			console.log("That's odd!");
		}
		if(arr[x]%2 == 0 && arr[x+1]%2 == 0 && arr[x+2]%2 == 0){
			console.log("Even more so!");
		}
	}	
}
evensodds();

//Increment the Seconds
function seconds(arr) {
	for(var x=1; x<arr.length; x=x+2) {
		arr[x] = arr[x]+1;
		console.log(arr[x]);
	}
	return arr;
}
seconds();

//Previous Lengths
function prevleng(arr) {
	for(var x=1; x<arr.length; x++) { //arr[0] has no previous string to count the length of...(?) so did not include
		arr[x] = arr[x-1].length;
	}
	return arr;
}
prevleng();

//Add Seven to Most
function seven(array) {
	var newarray = [];
	newarray.push(array[0]);
	for(var x=1; x<array.length; x++) {
		newarray.push(array[x]+7);
	}
	return newarray;
}
seven();

//Reverse Array
function reverse(arr) {
	for(var i = 0; i<arr.length; i++) {
		if(i > (arr.length-1)/2) {
			break;
		}
		else {
			var temp = arr[i]
			arr[i] = arr[arr.length-1-i]; //what about when the first half of values are already replaced....
			arr[arr.length-1-i] = temp;
		}
	}
	return arr;
}
reverse();

//Outlook: Negative
function badoutlook(arr) {
	var newarr = [];
	for(var z=0; z<arr.length; z++) {
		if(arr[z]<0) { 
			newarr.push(arr[z]);
		}
		else if(arr[z]>0) {
			newarr.push(arr[z]*-1);
		}
		else {
			newarr.push(arr[z]); //no such thing as -0
		}
	}
	return newarr;
}
badoutlook();

//Always Hungry
function stomach(arr) {
	var count = 0;
	for(var x=0; x<arr.length; x++) {
		if(arr[x] = "food") {
			console.log("yummy");
			count = count + 1;
		}
	}
	if(count ==0) {
		console.log("I'm hungry");
	}
}
stomach();

//Swap Towards the Center
function swap(arr) {
	for(var i = 0; i<arr.length; i=i+2) {
		if(i > (arr.length-1)/2) {
			break;
		}
		else {
			var temp = arr[i]
			arr[i] = arr[arr.length-1-i]; 
			arr[arr.length-1-i] = temp;
		}
	}
	return arr;
}
swap();

//Scale the Array
function scale(arr, num) {
	for(var x = 0; x<arr.length; x++) {
		arr[x] = arr[x]*num;
	}
	return arr;
} 
scale();