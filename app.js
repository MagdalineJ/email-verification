document.getElementById("true").style.display='none';
document.getElementById("false").style.display='none';
document.getElementById("warning").style.display='none';

// conditional display function depending on the verification
const verify=()=>{
    const regex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
    const email = document.getElementById('email').value;

    if(email!=="" && regex.test(email) === true ){
    
        regex.test(email)
        // confirm("Email address is valid.")
        document.getElementById("true").style.display="block";
        document.getElementById("false").style.display="none";


        document.getElementById('email').value="";
    }
    else if(email ==""){
        document.getElementById("true").style.display="none";
        document.getElementById("false").style.display="none";
        document.getElementById("warning").style.display="block";
        // confirm("Please, input an email address.")
    }else{

        document.getElementById("true").style.display="none";
        document.getElementById("false").style.display="block";
        document.getElementById("warning").style.display="none";

        // alert("Invalid Email!")
        document.getElementById('email').value="";


    }
}


