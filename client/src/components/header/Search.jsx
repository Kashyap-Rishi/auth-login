import { InputBase, Box, styled } from '@mui/material'
import React from 'react'

const SearchContainer=styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:10px;

`;



const Search = () => {
  return (
    <SearchContainer>
    <InputBase
      placeholder='Search for products, brands and more'
    />
    </SearchContainer>
  )
}

export default Search