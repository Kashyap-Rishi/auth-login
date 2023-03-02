import axios from 'axios';
//While dealing with apis always use try and catch for exceptional errors
//All api make asynchronous calls so use await and async.return is used as some data will be returned also.
const URL='http://localhost:8000';//This is main URL but we need to hit a particular end-point which can be updated lately wherever in use


export const  authenticateSignup=async(data)=>{
    try{
   return await axios.post(`${URL}/signup`, data)
    }catch(error){
        console.log("Error while calling sign up api ",error);
    }
}