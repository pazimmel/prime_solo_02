//possible errors
    //line 19 changed array[i] = calculateSTI(array) to array[i] = calculateSTI(array[i]). That way the input into the function calculateSTI is only the ith nested array in array.
    // line 73, why is base percent - 1, I got rid of the -1, I may have to multiply it by 100
    // line 47, the salary should be rounded
// ! ! !
// Three Bugs

//I changed these arrays into objects
var arrayAtticus = {
  name: "Atticus", 
  number: "2405", 
  salary: "47000",
  rating: 3
};

var arrayJem = {
  name: "Jem", 
  number: "62347", 
  salary: "63500",
  rating: 4
};
var arrayBoo = {
  name: "Boo", 
  number: "11435",
  salary: "54000",
  rating: 3
};
var arrayScout = {
  name: "Scout", 
  number: "6243", 
  salary: "74750",
  rating: 5
}; //declare variables

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

var employeeObject = {
    processEmployee: function calculateSTI(array){
      var newArray = {}; //I want to return an object not an array now
  
        //establishing the object properties
        newArray.name = array.name; 

        var employeeNumber = array.number;
        var baseSalary = array.salary;
        var reviewScore = array.rating;

        var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
        if(bonus > 0.13){ //I think this is ok because the computation of bonus comes below this
            bonus = 0.13;
        }

        //naming the object properties
        //and making sure they are returned 
        newArray["percent bonus"] = " "+bonus;
        newArray["adjusted salary"] = " "+Math.round(baseSalary * (1.0 + bonus)); //not rounded
        newArray.bonus = " "+(baseSalary * bonus); 
        console.log(newArray.name + " " + newArray["percent bonus"] + " " + newArray["adjusted salary"] + " " + newArray.bonus);
        newArray = newArray.name+": "+newArray["percent bonus"]+newArray["adjusted salary"]+newArray.bonus;

      return newArray;
    }
  };

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	//array[i] = calculateSTI(array[i]);
  array[i] = employeeObject.processEmployee(array[i]); //now I'm running a method to determine array
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}
//creating a new object. This one will have a method


function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; // changed basePercent -1 to simply basePercent because that it what we want from this function
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;//I think this is ok
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;//this looks ok if I want my incomeAdjustment positive which I checked and I do
}
