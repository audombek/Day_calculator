function getUserDetails(){
    var date = parseInt(document.getElementById("Date").value);
    var month =parseInt(document.getElementById("Month").value);
    var year = parseInt(document.getElementById("Year").value);
    var gender = radioInfo();
    alert(gender);
}
function radioInfo(){
    var radio = document.getElementsByName('gender');
    for (var i = 0;  i<radio.length; i++)
    {
    if (radio[i].checked)
    {
     gender = radio[i].value;
     return gender;
    }
    }
    }
    