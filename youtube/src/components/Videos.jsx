import React from 'react';
import { VideoCard, ChannelCard } from './';
import { Box, Stack } from '@mui/material';
// import './Videos.css'

function Videos({videos}) {
  
    console.log(videos);
  return (
    <Stack direction="row" flexWrap='wrap' justifyContent="start" gap={2}>
       
        {videos.map((items, idx) => (
          <Box key={idx}>
            {items.id.videoid && <VideoCard video={items} />}
            {items.id.channelid && <ChannelCard channelDetail={items} />}
          </Box>
        ))}
        {/* <VideoCard/> */}
      
    </Stack>
  )
}

export default Videos