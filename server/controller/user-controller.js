//1.Every api has two params- request from front-end,response from backend to frontend
//2.Error Handling

import User from "../model/user-schema.js";



export const userSignup=async(request,response)=>{
  try{

    const exist=await User.findOne({username:request.body.username});
    if(exist){
        return response.status(401).json({message:'Username already exist'});
    }
const user=request.body;
const newUser=new User(user);
await newUser.save();

response.status(200).json({message:user});
  }catch(error){
response.status(500).json({message:error.message});
  }
}