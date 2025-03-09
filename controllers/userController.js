const userLogin = (req,res)=>{
    const { email , password} = req.body;
    
    res.json({message:`This ${email} is login successful `});
}
const userSignup = (req,res)=>{
    const {name ,email , password} = req.body;
    res.json({message:`This ${name} is signup successful `});
}

const userUpdate = (req,res)=>{
    const userId = req.params.id;
    const {name,email} = req.body;
    res.json({message:`user ${userId} is updated to ${name} and ${email}`});

}
const userDelete = (req,res)=>{
    const userId = req.params.id;
    res.json({message:`user ${userId} is deleted`});
}

export { userLogin, userSignup, userUpdate, userDelete }