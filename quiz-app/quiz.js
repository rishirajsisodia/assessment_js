var submit=document.getElementById('btn-submit');
var pop=document.getElementById('modal-wrapper');
var score=document.getElementById('result');

function sub(){
pop.style.display="block";
}
alert(document.getElementsByName('q1').value);

console.log("Hello");
//AJAX CALL STARTS
function missionBackend(){
var http = new XMLHttpRequest();
http.open('GET','http://5d76bf96515d1a0014085cf9.mockapi.io/quiz',true);
http.send();
http.onreadystatechange=function(){
if(this.readyState==4)
{
var list=JSON.parse(this.responseText);
console.log(list);
}
}
}
//AJAX CALL ENDS
missionBackend()