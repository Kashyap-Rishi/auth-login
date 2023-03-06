import {styled, Box } from '@mui/material'
import Banner from './Banner'
import Navbar from './Navbar'
import Slide from './Slide'

const Component=styled(Box)`
padding:10px;
background:#F2F2F2;
`

const Home = () => {
  return (
    <>
    <Navbar/>
    <Component>
      <Banner/>
      <Slide/>
    </Component>
    
    </>
  )
}

export default Home