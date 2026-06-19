function calculateResult() {
      let total = 0;
      let subjects = [ 
        document.getElementById("sub1").value,
        document.getElementById("sub2").value,
        document.getElementById("sub3").value,
        document.getElementById("sub4").value
      ];

      // loop through marks
      for (let i = 0; i < subjects.length; i++) {
        total += parseFloat(subjects[i]) || 0; // handle empty input
      }

      let average = total / subjects.length;
      let grade;

      if (average >= 90) grade = "A+";
      else if (average >= 80) grade = "A";
      else if (average >= 70) grade = "B";
      else if (average >= 60) grade = "C";
      else if (average >= 50) grade = "D";
      else if (average >= 40) grade = "E";
      else grade = "F";

      document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average: " + average.toFixed(2) + "<br>" +
        "Grade: " + grade;
    }
