var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var female =["Akosua","Adwoa","Abenna","Akua","Yaa","Afua","Ama"]
var dateWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 
function getUserDetails() {
    var date = parseInt(document.getElementById("date").value);
    var month =parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var gender = getGender();
    
    var dayWeek = new Date(year + "/" + month + "/" + date);
    var d = dayWeek.getDay();
    var name;
    if (gender ==="male"){
    name = male[d];
        }
    else{
    name = female[d];
        }
    alert("You were born on "+ dateWeek[d] + " and your Akan name is "+ name);
    }
function getGender(){
    var gender = document.getElementsByName('gender');
    for (i = 0;  i<gender.length; i++){
    if (gender[i].checked){
     return (gender[i].value)
                                                                       
        }
    }
 }
    