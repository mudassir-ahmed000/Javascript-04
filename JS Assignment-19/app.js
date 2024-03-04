// var pets = ["cat","dog","fish","camel","monkey"];
// console.log(pets);
// pets.push("rats","bear");
// console.log(pets);
// pets.pop("rats");
// console.log(pets);
// pets.shift();
// console.log(pets);
// pets.unshift("goat","horse");
// console.log(pets);
// typeof(pets);
// typeof(pets[2]);
// pets.splice(2,3,"sheep");
// console.log(pets);
// newPet = pets.slice(1,4)
// console.log(newPet);
// newPet = pets.slice(3);
// console.log(newPet);

// for(var i = 10 ; i >= 0 ; i-- ){
//    document.write(i + "<br>")
// }


// for(var i = 20 ; i >= 0 ; i = i-4 ){
//     document.write(i + "<br>")
//  }










// 
// var literalName = [];

// var objectName = [];

// var string = ["Mudassir Ahmed"];

// var number = [10,9,8];

// var boolean = [true,false];

// var mixedArr = ["Mudassir Ahmed",17,true];

// var qualification = ["<h1>" + "Qualification" + "</h1>"];
// document.write(qualification);
// var education = ["1)" + "SSC" + "<br>" + "2)" + "HSC" + "<br>" + "3)" + "BSC" + "<br>" + "4)" + "BS" + "<br>" + "5)" + "BCOM" + "<br>" + "6)" + "MS" + "<br>" + "7)" + "M.Phil" + "<br>" + "8)" + "PHD" + "<br>" ];
// document.write(education);



// Step 1: Store 3 student names in an array
// var studentNames = ["Mudassir", "Awais", "Khurram"];

// // Step 2: Take another array to store scores of these three students
// var studentScores = [420, 350, 480]; // Assuming total marks are 500 for each student

// // Step 3: Display the scores and percentages of students
// for (let i = 0; i < studentNames.length; i++) {
//     var studentName = studentNames[i];
//     var studentScore = studentScores[i];
    
//     // Calculate percentage
//     var percentage = (studentScore / 500) * 100;

//     // Display results
//     document.write(studentName + " scored " + studentScore + " out of 500." + " Percentage: " + percentage.toFixed(2) + "% " + "<br>");
// }




// Step 1: Initialize an array with color names
// var colorArray = ["Red", "Green", "Blue"];
// document.write(colorArray);
// // Step 2a: Ask the user what color to add to the beginning & add that color to the beginning of the array
// var addAtStart = prompt("Enter a color to add to the beginning:");
// colorArray.unshift(addAtStart);
// document.write(colorArray);
// // Step 2b: Ask the user what color to add to the end & add that color to the end of the array
// var addAtEnd = prompt("Enter a color to add to the end:");
// colorArray.push(addAtEnd);
// document.write(colorArray);
// // Step 2c: Add two more colors to the beginning of the array
// colorArray.unshift("Yellow", "Purple");
// document.write(colorArray);
// // Step 2d: Delete the first color in the array
// colorArray.shift();
// document.write(colorArray);
// // Step 2e: Delete the last color in the array
// colorArray.pop();
// document.write(colorArray);
// // Step 2f: Ask the user at which index to add a color & color name, then add the color to the desired position/index
// const indexToAddColor = parseInt(prompt("Enter the index to add a color:"));
// const colorToAddAtIndex = prompt("Enter the color to add at that index:");
// colorArray.splice(indexToAddColor, 0, colorToAddAtIndex);
// document.write(colorArray);
// // Step 2g: Ask the user at which index to delete color(s) & how many colors to delete, then remove the same number of color(s) from the user-defined position/index
// const indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
// const numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colorArray.splice(indexToDelete, numberOfColorsToDelete);
// document.write(colorArray);




// var scores = [320,230,480,120];
// document.write(scores + "<br>");
// scores.sort();
// document.write("Ordered score of students : " + scores.sort())


// Initialize an array with city names
// var cities = ["New York", "Paris", "Tokyo", "London", "Sydney"];

// // Initialize an empty array to store selected cities
// var selectedCities = [];

// // Copy 3 array elements from cities to selectedCities
// selectedCities = cities.slice(0, 3);

// // Display the original and selected cities
// document.write("Cities List:", cities + "<br>");
// document.write("Selected Cities List:", selectedCities);




// var arr = ["This","is","my","cat"];
// var sentence = arr.join(" ");
// document.write("ARRAY : " + arr + "<br>" + "STRING : " + sentence);



// var phoneManufacturer = ["Apple","Samsung","Motorolla","Nokia","Sony","Haier"];
// document.write(
//        "<select>" + 
//     "<option>" + "Apple" + "</option>" + 
//     "<option>" + "Samsung" + "</option>" + 
//     "<option>" + "Motorolla" + "</option>" + 
//     "<option>" + "Nokia" + "</option>" + 
//     "<option>" + "Sony" + "</option>" + 
//     "<option>" + "Haier" + "</option>" +
//     "</select>"
// )



// var emptyArr = [];

// var Arr = ["string"];

// var alphabet = ["h","i","j","k"];
// alert(alphabet[2]);

// var alphabet = ["h","i","j","k","l","m","n"];
// var length = alphabet.length;
// document.write(length);
 



// var arr = ["Mudassir"];
// arr[1] = "Ahmed";
// document.write(arr)
// alert(arr[1]);



// var arr = ["Mudassir"];
// var modify = arr.push("Ahmed");
// document.write(arr)
// alert(arr[1])


// var alphabet = ["h","i","j","k","l"]
// var newArr = alphabet.pop();
// document.write(alphabet);

// var alphabet = ["h","i","j","k"]
// var newArr = alphabet.push("l");
// document.write(alphabet);


// var sizes = ["S","M","XL","XXL","XXXL"]
// sizes.shift();
// document.write(sizes)


// var sizes = ["S","M","XL","XXL","XXXL"]
// sizes.unshift(1,2,3);
// document.write(sizes)



// var sizes = ["small"]
// sizes.unshift("Medium");
// document.write(sizes)