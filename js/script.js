var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var femaleNames =["Akosua","Adwoa","Abenna","Akua","Yaa","Afua","Ama"]
var dayOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

function calcDayOfTheWeek(form){
var day =parseInt(document.getElementById("Date").value)
if((day <=0 ) || (day >31)){
    alert("You've entered an invalid date")
}
var month = parseInt(document.getElementById("Month").value)
if((month <=0) || (month>31)){
    alert("You've entered an invalid month")
}
var year = parseInt(document.getElementById("Year").value)
if(year<1900){
    alert("Begins from 1900")
}
}
function getAkanName(){
    var 

}