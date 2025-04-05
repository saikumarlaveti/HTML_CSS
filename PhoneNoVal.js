function validate(){
    var result = document.getElementById("phone").value
    
    if(result.length==0)
    {
        document.getElementById("msg").innerHTML="phone number cannot be empty"
        return false
    }
    else if(isNaN(result)){
        document.getElementById("msg").innerHTML="phone number contain only numbers"
        return false

    }
    else if(result.length>10){
        document.getElementById("msg").innerHTML="phone number contain must be 10 digits only"
        return false

    }
    if(result.length<9){
        document.getElementById("msg").innerHTML="phone number must be contain 10 digits "
        return false
    }
    var bool = /^[7-9]{1}[0-9]{9}$/.test(result)
    if(bool == false)
    {
        document.getElementById("msg").innerHTML="Invalid Phone number.....!"
        return false;
    }
}