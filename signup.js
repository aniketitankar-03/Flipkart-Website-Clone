
//   For storing the userdata to local storage 
let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUsersdata);

function Signup(){
    // console.log("hello world");

    let username = document.getElementById("name").value;     //.value is use to get the value which is written in id naam
    let mobile = document.getElementById("mobile").value;     //.value is use to get the value which is written in id naam
    let passward = document.getElementById("pass").value;     //.value is use to get the value which is written in id naam

    if(mobile.length == 0){
        alert("Enter mobile number");
    }
    else if(mobile.length !== 10){
        alert("Mobile number should have 10 digits");
    }
    else{

        let userData = {
            username: username,
            mobile:mobile,
            passward:passward
        }
    
        // let users = [];  // this is empty array which is use to store the data in local Storage
        // users.push(userData);  // .push is use to store the userData in Empty array i.e: users

        // we have another method to insert usersData  inside the users array
        let users = [...getUsersdata, userData];
        localStorage.setItem("usersdata", JSON.stringify(users));   // In These usersdata is a key  and Inside value there is showing empty array i.e, users
        // Stringify converts object to the string

        alert("Signup Successfull !!");
        window.location.href = "signin.html";
    }

}
