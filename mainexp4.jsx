// function calculate_result(){

// let n = document.getElementById("subjects").value;
// let total = 0;

// for(let i=1; i<=n; i++){

//     let marks = parseFloat(prompt("Enter marks for Subject " + i));
//     total = total + marks;
// }

// let average= total/n;
// let grade;
// let result;

// if(average >= 90){
//     grade = "A+";
// }
// else if (average >=80){
//     grade = "A"
// }
// else if (average >=70){
//     grade = "B"
// }
// else if (average >=60){
//     grade = "C"
// }
// else if (average >=50){
//     grade = "D"
// }
// else if (average >=40){
//     grade = "E"
// }
// else{
//     grade= "F"
// }

// if(average >= 30){
//     result = "Pass";
// }
// else {
//     result = "Fail";
// }

// document.getElementById("result").innerHTML =
// "Total Marks: " + total + "<br>" +
// "Average Marks: " + average.toFixed(2) + "<br>" +
// "Grade: " + grade + "<br>" + 
// "Result: " + result;
// }

// function calculate_result() {
//             let n = parseInt(document.getElementById("subjects").value);
            
//             if (isNaN(n) || n <= 0) {
//                 alert("Please enter a valid number of subjects.");
//                 return;
//             }

//             let total = 0;

//             for (let i = 1; i <= n; i++) {
//                 let marks = parseFloat(prompt("Enter marks for Subject " + i));
                
//                 if (isNaN(marks) || marks < 0) {
//                     alert("Invalid input. Please enter numeric marks.");
//                     return;
//                 }
//                 total += marks;
//             }

//             let average = total / n;
//             let grade, result;

//             // Grade calculation
//             if (average >= 90) grade = "A+";
//             else if (average >= 80) grade = "A";
//             else if (average >= 70) grade = "B";
//             else if (average >= 60) grade = "C";
//             else if (average >= 50) grade = "D";
//             else if (average >= 40) grade = "E";
//             else grade = "F";

//             // Pass/Fail logic
//             result = (average >= 40) ? "Pass" : "Fail";

//             document.getElementById("result").innerHTML =
//                 "Total Marks: " + total + "<br>" +
//                 "Average Marks: " + average.toFixed(2) + "<br>" +
//                 "Grade: " + grade + "<br>" +
//                 "Result: " + result;
//         }

function calculateresult() { 
    let n = document.getElementById("subjects").value; 
    if (n <= 0) { 
        alert("Please enter a valid number of subjects."); 
        return;} 
    let total = 0; 
    for (let i = 0; i < n; i += 1) { 
        let marks = parseFloat(prompt("Enter marks for subject " + (i + 1))); 
        if (!isNaN(marks)) { 
            total += marks;}} 
    let avg = total / n; 
    let grade;  
    let result; 
    if (avg > 90) grade = "A"; 
    else if (avg > 80) grade = "B"; 
    else if (avg > 70) grade = "C"; 
    else if (avg > 60) grade = "D"; 
    else if (avg > 50) grade = "E"; 
    else grade = "F"; 
    result = (avg > 40) ? "PASS" : "FAIL"; 
    document.getElementById("result").innerHTML = ` 
        <div class="result"> 
            <p>Total Marks: ${total}</p> 
            <p>Average Marks: ${avg.toFixed(2)}</p> 
            <p>Grade: ${grade}</p> 
            <p>Final Result: ${result}</p> 
        </div> `;} 