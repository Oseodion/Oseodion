import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './HomePage'
import { Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed } from './components';
import { blue } from '@mui/material/colors';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Box backgroundColor={''}>
      <HomePage/>
      <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetails/>}/>
        <Route path='/channel/:id' element={<ChannelDetails/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
      </Routes>
    </Box>
    {/* < LoadingScreen/> */}
    </BrowserRouter>
    
  )
}

export default App
