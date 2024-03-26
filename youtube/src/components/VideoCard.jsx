import React from 'react'
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoChannelUrl, demoVideoTitle, demoChannelTitle } from './utils/constant';
import './VideoCard.css'

const VideoCard = ({video: {id: {
    videoid }, snippet } })=> {
console.log(videoid, snippet);
  return (      
    // <Card> 
    //     <Link to={videoid ? `/video/${videoid}` : demoVideoUrl}>
    //     <CardMedia image={snippet?.thumbnails?.high?.url}
    //     alt={snippet?.title}
    //     sx={{width: 458, height: 250}}/>    
    //     </Link>
    // </Card>
    <>
    videocards          
    </>
  )
}

export default VideoCard 