//pg34 Date on a Deserted Island
function weekdayName(weekdayNum) {
    switch(weekdayName) {
        case 1:
            console.log("Sunday");
            break;
        case 2: 
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
    }
}
// weekdayName(1)
// weekdayName(7)


function weekdayName2(weekdayNum) {
    while(weekdayNum<366){
        switch(weekdayNum%7) {
            case 1:
                console.log("Sunday");
                console.log("Enjoy your day off!");
                break;
            case 2: 
                console.log("Monday");
                console.log("Work hard!");
                break;
            case 3:
                console.log("Tuesday");
                console.log("Work hard!");
                break;
            case 4:
                console.log("Wednesday");
                console.log("Work hard!");
                break;
            case 5:
                console.log("Thursday");
                console.log("Work hard!");
                break;
            case 6:
                console.log("Friday");
                console.log("Work hard!");
                break;
            case 7:
                console.log("Saturday");
                console.log("Enjoy your day off!");
                break;
        }
        break;
    }
}
// weekdayName2(2)
// weekdayName2(16)
// weekdayName2(57)
// weekdayName2(3)
// weekdayName2(324)

function someDay() {
    for(var x=0; x<17; x++) {
        var rand = Math.floor(Math.random() * 365)+1;
        weekdayName2(rand);
    }
}
// someDay()

function monthName(monthNum) {
    monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 
    "November", "December"];
    console.log(monthArr[monthNum-1]);
}

//monthName(7);

function monthToDays(monthNum) {
    switch(monthNum) {
        // 31 days - 1, 3, 5, 7, 8, 10, 12 
        // 28 days - 2
        // 30 days - 4, 6, 9, 11     
        case 1:
            console.log("January has 31 days");
            break;
        case 2:
            console.log("February has 28 days");
            break;
        case 3:
            console.log("March has 31 days");
            break;
        case 4:
            console.log("April has 30 days");
            break;
        case 5:
            console.log("May has 31 days");
            break;
        case 6:
            console.log("June has 30 days");
            break;
        case 7:
            console.log("July has 31 days");
            break;
        case 8:
            console.log("August has 31 days");
            break;
        case 9:
            console.log("September has 30 days");
            break;
        case 10:
            console.log("October has 31 days");
            break;
        case 11:
            console.log("November has 30 days");
            break;
        case 12:
            console.log("December has 31 days");
            break;    
    }
}
// monthToDays(2)
// monthToDays(4)
// monthToDays(13) // returns nothing

function dayToMonth(dayNum) {
    monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 
    "November", "December"];
    monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];

    var sumDays = 0;
    var x = 0;

    if(dayNum > 365) {
        console.log("That day is sometime next year.");
    }
    else if(dayNum < 1) {
        console.log("That day is sometime last year.");
    }
    else {
        while(dayNum > sumDays) {
            sumDays += monthDays[x];
            x++;
        }
        console.log(monthArr[x-1]);
    }
}
// dayToMonth(32)
// dayToMonth(365)
// dayToMonth(366)

function fullDate(dateNum) {
    monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 
    "November", "December"];
    monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];

    var sumDays = 0;
    var x = 0;
    var dayName;
    var dayNum;
    var month;

    if(dateNum > 365) {
        console.log("That day is sometime next year.");
    }
    else if(dateNum < 1) {
        console.log("That day is sometime last year.");
    }
    else {
        while(dateNum > sumDays) {
            sumDays += monthDays[x];
            x++;
        }

        if(dateNum > 31) {
            prevSum = sumDays - monthDays[x-1];
            dayNum = dateNum - prevSum;
        }
        else {
            dayNum = dateNum;
        }
        
        month = monthArr[x-1];
        switch(dateNum%7) {
            case 1:
                dayName = "Sunday";
                break;
            case 2: 
                dayName = "Monday";
                break;
            case 3:
                dayName = "Tuesday";
                break;
            case 4:
                dayName = "Wednesday";
                break;
            case 5:
                dayName = "Thursday";
                break;
            case 6:
                dayName = "Friday";
                break;
            case 7:
                dayName = "Saturday";
                break;
        }
        console.log(dayName+", "+month+" "+dayNum+", 2017");  
    }
}
// fullDate(1)
// fullDate(32)
// fullDate(142)

function fullDate2(dateNum) {
    var sumDays = 0;
    var x = 0;
    var dayName;
    var dayNum;
    var month;
    var year = 2017;
    var yearCount = 0;
    var leapDays = 0;
    var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(dateNum < 1000) {
        console.log("Number of days too small");
    }
    else {
        while(dateNum > sumDays) {
            sumDays += monthDays[x];
            x++;
            if(x > 11) {
                x = 0;
                yearCount++;
                if(yearCount%4 == 3) {
                    sumDays += 1;
                    leapDays += 1;
                }
            }
        }

        if(dateNum > 31) {
            var prevSum = sumDays - monthDays[x-1];
            dayNum = dateNum - prevSum;
        }
        else {
            dayNum = dateNum;
        }
        
        month = monthArr[x-1];
        switch(dateNum%7) {
            case 1:
                dayName = "Sunday";
                break;
            case 2: 
                dayName = "Monday";
                break;
            case 3:
                dayName = "Tuesday";
                break;
            case 4:
                dayName = "Wednesday";
                break;
            case 5:
                dayName = "Thursday";
                break;
            case 6:
                dayName = "Friday";
                break;
            case 7:
                dayName = "Saturday";
                break;
        }
        year += yearCount;
        console.log(dayNum);
        console.log(leapDays);
        console.log(dayName+", "+month+" "+dayNum+", "+year);  
    }
}
// fullDate2(142)
// fullDate2(8475)

function fullDate3(dateNum) {
    var sumDays = 0;
    var x = 0;
    var dayName;
    var dayNum;
    var month;
    var year = 2017;
    var yearCount = 0;
    var leapDays = 0;
    var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(dateNum < 1) {
        console.log("Eduardo wasn't on the island yet!");
    }
    else if(dateNum > 140000) {
        console.log("Eduardo escaped the island!!");
    }
    else {
        while(dateNum > sumDays) {
            sumDays += monthDays[x];
            x++;
            if(x > 11) {
                x = 0;
                yearCount++;
                var checkYear = (year + yearCount);
                if(checkYear%4 == 0){
                    if (checkYear%100 == 0 && checkYear%400 != 0){
                        // console.log("****");
                    }
                    // else if(checkYear%400 == 0) {
                    //     sumDays += 1;
                    //     leapDays += 1;
                    //     console.log(checkYear + "**")
                    // }
                    else {
                        // console.log(checkYear);
                        sumDays += 1;
                        leapDays += 1;
                    }
                }
            }
        }

        year += yearCount;

        if(year%4 == 0){
            if (checkYear%100 == 0 && checkYear%400 != 0){
                if(dateNum > 31) {
                    prevSum = sumDays - monthDays[x-1]; 
                    dayNum = dateNum - prevSum;
                }
                else {
                    dayNum = dateNum;
                }    
            }
            else {
                monthDays = [31,29,31,30,31,30,31,31,30,31,30,31];
                if(dateNum > 31) {
                    prevSum = sumDays - monthDays[x-1]; 
                    dayNum = dateNum - prevSum;
                }
                else {
                    dayNum = dateNum;
                }
            }
        }
        else {
            if(dateNum > 31) {
                prevSum = sumDays - monthDays[x-1]; 
                dayNum = dateNum - prevSum;
            }
            else {
                dayNum = dateNum;
            }
        }
        
        month = monthArr[x-1];
        switch(dateNum%7) {
            case 1:
                dayName = "Sunday";
                break;
            case 2: 
                dayName = "Monday";
                break;
            case 3:
                dayName = "Tuesday";
                break;
            case 4:
                dayName = "Wednesday";
                break;
            case 5:
                dayName = "Thursday";
                break;
            case 6:
                dayName = "Friday";
                break;
            case 7:
                dayName = "Saturday";
                break;
        }
        console.log(dayName+", "+month+" "+dayNum+", "+year);  
    }
}
fullDate3(0)
fullDate3(32)
fullDate3(142)
fullDate3(8475)
fullDate3(139947)
fullDate3(139948)
