const usersignup=(req,res)=>{
    const {username,password}=req.body;
    const hashedPassword=bcrypt.hashSync(password,10);

//     hashing the password and storing the new password and the username in mongodb
//     then we need to send the username and other preferences to the frontend using res

}


const usersignin=(req,res)=>{
    const {username,password}=req.body;
    
}