
console.log("User register");
//create constructor
class User{
    constructor(email,pass,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=pass;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }

}


function isValid(user){
    // return false when the user is not valid
    // return true when the user is valid
    let valid = true;

    $('input').removeClass('error');

    if(user.fname.length <= 0){
        //is not a valid name
        valid = false;
        $("#txtFirst").addClass('error');
    }
    if(user.lname.length <= 0){
        //is not a valid name
        valid = false;
        $("#txtLast").addClass('error');
    }
    if(user.password.length <= 0){
        //is not a valid name
        valid = false;
        $("#txtPassword").addClass('error');
    }
    if(user.email.length <= 0){
        //is not a valid name
        valid = false;
        $("#txtEmail").addClass('error');
    }
    if(user.age.length < 0){
        //is not a valid name
        valid = false;
        $("#txtAge").addClass('error');
    }
    if(user.phone.length <= 0){
        //is not a valid name
        valid = false;
        $("#txtPhone").addClass('error');
    }
    if(user.address.length <= 0){
        //is not a valid name
        valid = false;
        $("#txtAddresss").addClass('error');
    }


    return valid;
}



function registerUser(){
    let email = $("#txtEmail").val();
    let password = $("#txtpass").val();
    let fname = $("#txtfname").val();
    let lname = $("#txtlname").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phone = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#txtColor").val();
    let user=new User(email,password,fname,lname,age,address,phone,payment,color);
    if(isValid(user)){
        //$('#usersTable').append(createRow(user));
         console.log(user);
         saveUser(user);//this fn is on the storeManager.js
         display(user)
    }
   clearInputs();
}

function clearInputs(){
    $("txtFirst").val("");
    $("txtLast").val("");
    $("txtAge").val("");
    $("txtAddress").val("");
    $("txtPhone").val("");
    $("txtselPayment").val("");
    $("txtColor").val("");
    $("txtEmail").val("");
    $("txtPassword").val("");

}
function init(){
    console.log("Init function");


}
window.onload=init;