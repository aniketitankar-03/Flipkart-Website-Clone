
// // Function to check if the provided mobile number and password match any registered user
// function checkCredentials(mobile, passward) {
//     // Retrieve user data from local storage
//     let usersData = JSON.parse(localStorage.getItem("usersdata")) || [];

//     // Loop through the stored user data to find a match
//     let userFound = false;
//     for (let i = 0; i < usersData.length; i++) {
//         if (usersData[i].mobile === mobile && usersData[i].passward === passward) {
//             userFound = true;
//             break; // Exit the loop when a match is found
//         }
//     }

//     return userFound;
// }


//   For storing the userdata to local storage 
let getUsersdata = JSON.parse(localStorage.getItem("usersdata")) || [];
console.log(getUsersdata);

function Signin(){

    let mobile = document.getElementById("mobile").value;     //.value is use to get the value which is written in id naam
    let passward = document.getElementById("pass").value;     //.value is use to get the value which is written in id naam

    
    let count = 0;

    if(mobile.length !== 10)
    {
        alert("Mobile number should be of 10 digits");
    }
    else if(mobile.length == 0)
    {
        alert("Enter mobile number");
    }
    else
    {
        for(let i=0; i< getUsersdata.length ; i++)
        {
            if(mobile == getUsersdata[i].mobile)
            {
                if(passward == getUsersdata[i].passward)
                {
                    alert("Sign in Successfull !!");
                    window.location.href = "index.html"
                }
                else{
                    alert("Invalid Passward !!");
                }
            }
            else{
                count++;
            }
        }
    }

    if(count == getUsersdata.length)
    {
        alert("User is Not registered, Sign up to Continue");
        window.location.href = "signup.html";
    }

}
