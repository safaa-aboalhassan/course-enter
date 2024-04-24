var usernameElement=document.getElementById('exampleInputUsername');
var passworsElement=document.getElementById('exampleInputPassword1');
var emaile =document.getElementById('exampleInputEmail1');


var usernameMessage=document.getElementById('usernameMessage');
var passwordMessage=document.getElementById('passwordMessage');
var emaileMessage=document.getElementById('emailMessage');


function validate(){
    usernameMessage.innerText = '';
    passwordMessage.innerText = '';
    emaileMessage.innerText = '';

    if(isEmpty(usernameElement)){
    usernameMessage.innerText = "element can't empty";
    } else if(isMinlength(usernameElement,8)){
    usernameMessage.innerText = "username can't be less than 8 character";}

   if(isEmpty(passworsElement)){
    passwordMessage.innerText ="password cant empty";
 } else if(isMinlength(passworsElement,8)){
    passwordMessage.innerText = "username can't be less than 8 character";

}

if(isEmpty(emaile)){
    emaileMessage.innerText="emaile can't empty";
}




}


function isEmpty(element){
    if(element.value == ""){
    return true;
}
    return false;

}

function isMinlength(element,minchar){
if(element.value.length < minchar){
return true;
}
return false;
}


function isNumeric(element){
    if(element.value !== Number){
    return true;
}
   return false;

}