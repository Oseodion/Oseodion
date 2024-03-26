import React from 'react'
import { useState, useEffect } from 'react'
import { Stack } from '@mui/material'
import { FetchFromApi } from './utils/FetchFromApi'
import Sidebar from './Sidebar'
import Videos from './Videos'
import './Feed.css'

function Feed() {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);
  return (
    <div>
      <div className='MainBody'>
        <Sidebar className='side'
          selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
        />
        <div>
          {/* <box>{selectedCategory}<span>Videos</span></box> */}
          <div>
            
            <Videos videos={videos} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feed
