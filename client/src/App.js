
import Header from './components/header/Header';
import Home from './components/home/Home';
import {  Box } from '@mui/material'
import DataProvider from './components/context/DataProvider';
//Wrapping components inside DataProvider so that we can use states inside them
function App() {
  return (
    <div className="App">
  
    <DataProvider>
<Header/>
<Box style={{marginTop:54}}>
<Home/>
</Box>
</DataProvider>
    </div>
  );
}

export default App;
