import {styled, Box } from '@mui/material'
import Banner from './Banner'
import Navbar from './Navbar'

import Slide from './Slide'

import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productActions'
import {useDispatch, useSelector} from 'react-redux'


const Component=styled(Box)`
padding:10px;
background:#F2F2F2;
`

const Home = () => {

const {products}=useSelector(state=>state.getProducts)
console.log(products);
const dispatch=useDispatch();

useEffect(()=>{
dispatch(getProducts())
},[dispatch])

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