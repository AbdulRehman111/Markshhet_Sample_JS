

var userInput = prompt('what is your Name..??');
var namee = document.getElementById('name');
namee.innerHTML=userInput;


var userInput = prompt('what is your Father Name..??');
var fnamee = document.getElementById('fname');
fnamee.innerHTML=userInput;

var userInput = +prompt('Tell me Your Age Please..??');
var ageUser = document.getElementById('age');
ageUser.innerHTML=userInput;


var userInput = +prompt('Tell me Your Roll number..??');
var rollNum = document.getElementById('rollnum');
rollNum.innerHTML=userInput;

var userInput = prompt('Tell me Your Institute NAme..??');
var schoolName = document.getElementById('schoolname');
schoolName.innerHTML=userInput;

var userInput1 = +prompt('Your Obtained Number in English Subject out of 75..?'); 
 var sub1=document.getElementById('obtainedmarks1');
if(userInput1<=75){
   
sub1.innerHTML=userInput1;
}
else{
  var userInput1=   +prompt('please type a number less then or equal to 75..');
sub1.innerHTML=userInput1;
 
}


 var userInput2 = +prompt('Your Obtained Number in Math Subject out of 100..?'); 
var sub2=document.getElementById('obtainedmarks2');
if(userInput2<=100){
 
 sub2.innerHTML=userInput2;
}else{
    var userInput2=   +prompt('Please type a number less then or equal to 100..');
sub2.innerHTML=userInput2;
}



var userInput3 = +prompt('Your Obtained Number in HTML Subject out of 100..?'); 
 var sub3=document.getElementById('obtainedmarks3');
if(userInput3<=100){

sub3.innerHTML=userInput3;
}
else{
    var userInput3 =  +prompt('Please type a number less then or equal to 100..');
sub3.innerHTML=userInput3;
}




 var userInput4 = +prompt('Your Obtained Number in CSS Subject out of 75..?'); 
 var sub4=document.getElementById('obtainedmarks4');
if(userInput4<=75){
 sub4.innerHTML=userInput4;
}
else{
       var userInput4 =  +prompt('Please type a number less then or equal to 75..');
sub4.innerHTML=userInput4;

}

  var userInput5 = +prompt('Your Obtained Number in Javascript Subject out of 100..?'); 
  var sub5=document.getElementById('obtainedmarks5');
if(userInput5<=100){

 sub5.innerHTML=userInput5;
}else{
       var userInput5 =  +prompt('Please type a number less then or equal to 100..');
sub5.innerHTML=userInput5;
}




var totalObtainedMarks = userInput1  + userInput2 + userInput3+userInput4+userInput5;
var totalObtain = document.getElementById('totalObtained');
totalObtain.innerHTML =totalObtainedMarks;









 var totalPercent = totalObtainedMarks/450 *100 +"%";
 var totalPer = document.getElementById('totalpercentage');
 totalPer.innerHTML= totalPercent;
var grade1='A+';
var grade2='A';
var grade3='B';
var grade4='C';
var grade5='D';
var grade6='Fail';
 if (totalObtainedMarks>=400) {
     
     var gradee = document.getElementById('totalGrade');
 gradee.innerHTML= grade1;

 }  else if(totalObtainedMarks>=350 && totalObtainedMarks<=399){
var gradee = document.getElementById('totalGrade');
 gradee.innerHTML= grade2;
 }else if(totalObtainedMarks>=300 && totalObtainedMarks<=349){
var gradee = document.getElementById('totalGrade');
 gradee.innerHTML= grade3;
 }else if(totalObtainedMarks>=250 && totalObtainedMarks<=299){
var gradee = document.getElementById('totalGrade');
 gradee.innerHTML= grade4;
 }
 else if(totalObtainedMarks>=201 && totalObtainedMarks<=249){
var gradee = document.getElementById('totalGrade');
 gradee.innerHTML= grade5;
 }
 else if(totalObtainedMarks<=200){
var gradee = document.getElementById('totalGrade');
 gradee.innerHTML= grade6;
 }
     
 