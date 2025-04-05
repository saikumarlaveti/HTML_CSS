function text(){
    var result = document.getElementById("firstName").value
    if(result == 0){
        document.getElementById("msg").innerHTML="First name must be required"
        return false
    }
    else if(result.length <3){
        document.getElementById("msg").innerHTML="manimum upto 3 characters"
        return false
    }
    else if(result.length>15){
        document.getElementById("msg").innerHTML="maximum 15 character only"
        return false;
    }
}