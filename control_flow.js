const UserLoggedIn = true
const DebitCard = true
const UserLoggedInGoogle = false
const UserLoggedInEmail = true


if (UserLoggedIn && DebitCard){
    console.log("Allow for Shopping")
}
else {
    console.log("not allow for shopping")
}

if (UserLoggedInGoogle || UserLoggedInEmail){
    console.log("User Logged In Successfully")
}