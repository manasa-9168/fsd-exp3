function Loginvalidate(){
    var enteremail=document.getElementById('email').value;
    var enterps=document.getElementById('pwd').value;
    var getemail=localStorage.getItem('Emailid');
    var getps=localStorage.getItem('password');
    if(enteremail==getemail){
        if(enterps==getps){
            alert("Login Successful");
            window.location="welcome.html";
            return false;
        }
        else{
            alert("wrong password");
        }
    }
    else{
        alert("invalid credentials");
    }
}
