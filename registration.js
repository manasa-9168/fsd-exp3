function validate(){
    var fn=form1.fname.value;
    for(x in fn){
        ch=fn.charCodeAt(x);
        if(ch<65||ch>90 && ch<97||ch>122){
            alert("invalid first name");
            return false;
        }
    }
    var ln=form1.lname.value;
    for(y in ln){
        ch=ln.charCodeAt(y);
        if(ch<65||ch>90 && ch<97||ch>122){
            alert("invalid last name");
            return false;
        }
    }
    var pn=form1.phnno.value;
    var lenp=pn.length;
    {
        if(lenp!=10){
            alert("phone number must contain 10 digits");
            return false;
        }
    }
    var pwd1=form1.ps.value;
    localStorage.setItem("password",pwd1)
    var pwd2=pwd1.length;
    if(pwd2%2!=0){
        alert("password should contain even number of characters");
        return false;
    }
    if(pwd2>8){
        alert("password should not exceed 8 characters");
        return false;
    }
    var reg=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var mail=form1.mailid.value;
    localStorage.setItem("Emailid",mail)
    if(reg.test(mail)){
        alert("Registarion Successful");
    }
    else{
        alert("invalid email");
        return false;
    }
    return true;
}
