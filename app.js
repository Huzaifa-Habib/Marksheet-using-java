

var marks1= parseInt (prompt("Write your marks that you get in Maths"));
var marks2= parseInt (prompt("Write your marks that you get in Science"));
var marks3=parseInt (prompt("Write your marks that you get in English"));
var marks4=parseInt (prompt("Write your marks that you get in Urdu"));
var marks5=parseInt (prompt("Write your marks that you get in Chemistry"));


var result=(marks1 + marks2 + marks3 + marks4 + marks5);
var totalMarks=500;

document.write ("<h1>Mark Sheet</h1>")

document.write("<h3> Total Marks : " +totalMarks +  "</h3>");
document.write ( "<h3> Marks Obtained in Maths  : "  + marks1 + "</h3>");
document.write ( "<h3> Marks Obtained in Science  : "  + marks2 + "</h3>");
document.write ( "<h3> Marks Obtained in English  : "  + marks3 + "</h3>");
document.write ( "<h3> Marks Obtained in Urdu  : "  + marks4 + "</h3>");
document.write ( "<h3> Marks Obtained in Chemistry  : "  + marks5 + "</h3>");





document.write ( "<h3>Total Marks Obtained  :  "  +  result  + " </h3>");
var percentage=result/totalMarks*100;

document.write ( "<h3> Percentage  : "  + percentage + "%" + "</h3>");
var z= Math.ceil(percentage);



if (percentage >= 80) {
    document.write("<h3> Remakrs : A-One </h3> ");
    document.write("<h3> Grade : Excellent  </h3> "); 
    
}

else if (percentage >=70) {
    document.write("<h3> Grade : A  </h3> "); 
    document.write("<h3> Grade : Good  </h3> "); 
}

else if (percentage >=60) {
    document.write("<h3> Grade : B  </h3> "); 
    document.write("<h3> Remarks : You need to improve </h3> "); 
}

else {
    document.write("<h3> Grade : Fail </h3> "); 
    document.write("<h3> Remarks : Sorry  </h3> "); 
}
