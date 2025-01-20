//your JS code here. If required.
var para=document.getElementById("para")
var intial=0;
function increment(){
	alert("Current counter value (before incrementing): " + intial);
	intial+=1;
  para.textContent=intial
}
