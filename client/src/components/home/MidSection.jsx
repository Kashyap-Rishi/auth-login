
import React from 'react'
import { Box } from '@mui/material'


 const imageURL = [
     'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
     'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
     'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
 ];



const MidSection = () => {
  return (
    <Box style={{display:'flex'}}>
        {
imageURL.map(image=>(
    <img src={image} style={{width:'100%'}}/>
))
        }
    </Box>
  )
}

export default MidSection