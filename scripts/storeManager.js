function saveUser(user){
    //load the old data
    let data=readUsers();
    //merge the data
    data.push(user);
    let val =JSON.stringify(user);
    localStorage.setItem("users",val);
    //val is the string
    //user is the obj
}

function readUsers(){
    let data=localStorage.getItem("users");
    if(!data){// NO data??
        return []; //create an array the first registration

    }else{
        let list=JSON.parse(data);//parse string back inito obj
        return list; // return the obj
    }
}
