//  Teacher Assignment
 
//  var cityName = prompt("Please enter your city name")
//  console.log(cityName)

//  if(cityName ==="Karachi"){
// alert("Welcome to the city of lights") }


// Q2
//  Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var userGender = prompt("Please enter your gender")
// console.log(userGender)

//  if (userGender === "male"){ 
//     alert( "Good Morning sir")}  
    
//     else (userGender === "female") 
//     {alert("Good Morning Ma'am")}



  

// Q3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

// var signalColor=    prompt("Please enter the clour of traffic signal")
// console.log(signalColor)

// if(signalColor === "Red"){alert("You Must Stop")}

// else if(signalColor === "Yellow")
// {alert("Get Ready to move")}

// else if(signalColor === "Green")
// {alert( "Move on")}




// Q4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”


// var checkFuelLevel = prompt("Enter the remaining fuel in your car","in litres");
// console.log(checkFuelLevel)


// if(checkFuelLevel <= 0.25){alert ("Please refill the fuel in your car")}

// else{alert ("please continue your journey")}






// Q5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//(a)
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }


// // (b)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// else{alert("given condition for variable b is false")}



// // (c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  condition 2 and 4 is true



// Q.6
var em = +prompt("enter you  english number");

var mm = +prompt("enter you maths number");

var um = +prompt("enter you urdu number");


var totalMarks = 300;
var om = em + mm + um;
var percentage = (om / totalMarks) * 100;
 
if(percentage >= 80)
    { var grade = "A-1";
        var remarks = "Excelent";

    }else if(percentage >= 70 && percentage < 80)
        {var grade = "A";
            var remarks = "Good";
        }
        else if(percentage >= 60 && percentage < 70)
            { var grade = "B";
            var remarks = "You need to improve";

        }else if (percentage < 60)
            {var grade = "fail";
                var remarks = "Sorry";
            }

document.write('<h1>Marks Sheet </h1>' + 
    '<h3>' + 'Total Marks: ' + totalMarks + '</h3>' +
'<h3>' + 'Marks Obtained: ' + om + '</h3>' + 
'<h3>' + 'Percentage: ' +   percentage  +  '</h3>' +
'<h3>' + 'Grade: ' + grade + '</h3>' + '<h3>' + "Remarks: " +
remarks +
'</h3>'
)





