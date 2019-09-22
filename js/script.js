var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var femaleNames =["Akosua","Adwoa","Abenna","Akua","Yaa","Afua","Ama"]
var dayOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

function calcDayOfWeek(){
    var date = parseInt(document.getElementById("Date").value);
    if((date<=0)|| (date>31)){
        alert("You've entered an invalid date");
    }
    var month = parseInt(document.getElementById("Month").value);
    if((month<=0) || (month>12)){
        alert("You've entered an invalid month")
    }
    var year = parseInt(document.getElementById("Year").value);

}