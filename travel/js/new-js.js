 


 function formData(){

    var fname = document.forms["userform"]["firstname"];
    var lname = document.forms["userform"]["lastname"];
    var cname = document.forms["userform"]["pasword"];
    


if(fname.value == ""){
    window.alert("enter your  name");
    fname.focus();
    return false;
}


if(lname.value == ""){
    window.alert("enter your Email-id");
    lname.focus();
    return false;
}

if(cname.value == ""){
    window.alert("enter your password");
    cname.focus();
    return false;
}

return true;
}