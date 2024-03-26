// import React, {useState} from 'react';
import burgermenu from './Images/icons8-hamburger-50.png';
import ytlogo from './Images/yt-logo.png';
import searchlogo from './Images/icons8-search-30.png';
import miclogo from './Images/icons8-mic-24.png';
import video from './Images/icons8-video-48.png';
import bell from './Images/icons8-bell-48.png';
import account from './Images/icons8-account-50.png';
import Trending from './Images/icons8-fire-30.png';
import History from './Images/icons8-time-50 (1).png';
import LikedVideos from './Images/icons8-like-thumbs-up-button-from-popular-social-media-24.png';
import you from './Images/icons8-video-48 copy.png';
import Music from './Images/icons8-musical-25.png'
import News from './Images/icons8-news-25.png'
import Sports from './Images/icons8-trophy-25.png'
import Premuim from './Images/icons8-youtube title .png'
import Studio from './Images/icons8-youtube-studio-48.png'
import YouTubeMusic from './Images/icons8-youtube-music-48.png'
import Kids from './Images/icons8-youtube-100.png'
import Settings from './Images/icons8-setting.gif'
import Flag from './Images/icons8-flag-50.png'
import Help from './Images/icons8-help-50.png'
import LoadingScreen from './components/LoadingScreen';
import './App.css';
import Sidebar from './components/Sidebar'
import Overlay from './components/Overlay';
import React, { useEffect, useState, useRef } from "react";

// import Auy from './component/Auy'
import axios from "axios";





function HomePage() {

  // const [selectedCategory, setselectedCategory] = useState('New')
  // useEffect =( () => {
  //   FetchFromApi( `search?part=snippet&q=${selectedCategory}`)
  // }), [];


  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPageToken, setNextPageToken] = useState(null);
  const containerRef = useRef();

  useEffect(() => {
    const fetchVideos = async () => {
      const apiKey = "AIzaSyA4sVtnrzYUaUFAwBxabyHEakC5LASQpBM";
      const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=6&key=${apiKey}`;
      // let finalURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&statistics&chart=mostPopular&regionCode=US&part=snippet,&id&order=date&maxResults=6`
      try {
        const response = await axios.get(apiUrl);
        if (response.data && response.data.items) {
          setVideos(response.data.items);
          setNextPageToken(response.data.nextPageToken);
        } else {
          {
            console.error({ loading });
          }
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const fetchMoreVideos = async () => {
    if (nextPageToken) {
      const apiKey = "AIzaSyA4sVtnrzYUaUFAwBxabyHEakC5LASQpBM";
      const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=10&pageToken=${nextPageToken}&key=${apiKey}`;
      // let finalURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&statistics&chart=mostPopular&regionCode=US&part=snippet,&id&order=date&maxResults=6&pageToken=${nextPageToken}`

      try {
        const response = await axios.get(apiUrl);
        setVideos((prevVideos) => [...prevVideos, ...response.data.items]);
        setNextPageToken(response.data.nextPageToken);
      } catch (error) {
        console.error("Error fetching more videos:", error);
      }
    }
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        fetchMoreVideos();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, fetchMoreVideos]);

  const formatViews = (viewCount) => {
    if (viewCount >= 1e6) {
      return `${(viewCount / 1e6).toFixed(1)}M views`;
    } else if (viewCount >= 1e3) {
      return `${(viewCount / 1e3).toFixed(1)}K views`;
    } else {
      return `${viewCount} views`;
    }
  };

  const formatPublishDate = (publishDate) => {
    const currentDate = new Date();
    const videoDate = new Date(publishDate);
    const yearDifference = currentDate.getFullYear() - videoDate.getFullYear();

    if (yearDifference > 1) {
      return `${yearDifference} ${yearDifference === 1 ? "year" : "years"} ago`;
    } else {
      const monthDifference = currentDate.getMonth() - videoDate.getMonth();
      if (monthDifference > 0) {
        return `${monthDifference} ${monthDifference === 1 ? "month" : "months"
          } ago`;
      } else {
        const dayDifference = currentDate.getDate() - videoDate.getDate();
        return `${dayDifference} ${dayDifference === 1 ? "day" : "days"} ago`;
      }
    }
  };
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toogleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  };

  
  useEffect (() => {
    setTimeout(() => setLoading(false),6000)
  }, [])
  const color={
    color:"grey"
  }
  return (
    <div>
      {loading && <LoadingScreen />}
      <div className='topnav'>
        <header>
          <div className='header1'>
            <img src={burgermenu} alt="" width={30} height={30} onClick={toogleSidebar}/>
            <a href="./"><img src={ytlogo} alt="" className='YT_Logo'/></a>
          </div>


          <div className='sub-header2'>

            <div className='header2'>
              <input type="text" placeholder='Search...' />
               <button>< img src={searchlogo}/></button>
              
            </div>

            <div className='headermic'>
              <img src={miclogo} alt="" />
            </div>

          </div>

          <div className='header3'>
            <img src={video} alt="" width={30} />
            <img src={bell} alt="" width={30} />
            <img src={account} alt="" width={30} />
          </div>
        </header>
        <nav>

          <button>All</button>
          <button>Gaming</button>
          <button>Music</button>
          <button>PlayLists</button>
          <button>News</button>
          <button>Gadgets</button>
          <button>Live</button>
          <button>Watched</button>
          <button>PodCasts</button>
          <button>JavaScript</button>
          <button>Apple</button>
          <button>JavaScript</button>
          <button>Computers</button>
          <button>CSS</button>
          <button>PlayStation</button>
          <button>Lattafa</button>
          <button>NF</button>
          <button>AfroBeats</button>
          <button>Updates</button>

        </nav>
      </div>
      <body>
        {/* <div className='sidebar'>
          <button> <img src={house} width={26}/>Home</button>
          <button><img src={shorts} width={26}/>Shorts</button>
          <button><img src={saved} width={26}/>Saved</button>
          <button><img src={you} width={26}/>You</button>
        </div> */}


        <div className='homePage'>
          <div>
            <div className='sidebar'>
              <Overlay isOpen={sidebarOpen} onClose={toogleSidebar}/>
              <div className={`content ${sidebarOpen ? 'shifted' : ''}`}>
                <br />
                <h3>Explore</h3>
              <button> <img src={Trending} width={26} />Trending</button>
              <button><img src={History} width={26} />History</button>
              <button><img src={LikedVideos} width={26} />Liked</button>
              <button><img src={Music} width={26} />Music</button>
              <button><img src={News} width={26} />News</button>
              <button><img src={Sports} width={26} />Sports</button>
              <br />
              <hr width={160}/>
              <br />
              <h3>More from YouTube</h3>
              <button><img src={Premuim} width={26} />YouTube Premuim</button>
              <button><img src={Studio} width={26} />YouTube Studio</button>
              <button><img src={YouTubeMusic} width={26} />YouTube Music</button>
              <button><img src={Kids} width={26} />YouTube Kids</button>
              <br />
              <hr width={160}/>
              <br />
              <button><img src={Settings} width={26} />Settings</button>
              <button><img src={Flag} width={23} />Report</button>
              <button><img src={Help} width={26} />Help</button>
              <br />
              <hr width={162}/>
              <br />
              <h5> Contact About Press Copyright Contact us Creator Advertise Developers
                <br />
                <br />
                Terms Privacy Policy & Safty
                <br />
                How YouTube Works
                <br />
                Test new features
                <br />
                <br />
                <h5 style={color}>© 2024 Google LLC</h5>
              </h5>
              <br />
              <br />
              </div>
            </div>
          </div>

          <div className="div_homePage">
            <div className='key'>
              {videos.map((video) => (
                <div key={video.id}>
                  <iframe
                    className='select'
                    width="330"
                    height="180"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allowFullScreen

                  >
                    {" "}
                  </iframe>
                  <h4 style={{ width: "320px" }}>{video.snippet.title}</h4>
                  <p>{video.snippet.channelTitle}</p>

                  <p>
                    {" "}
                    {formatViews(video.statistics.viewCount)}.
                    {formatPublishDate(video.snippet.publishedAt)}
                  </p>
                </div>
              ))}
              <div ref={containerRef} style={{ height: "10px" }}></div>
            </div>

            {loading && <p>Loading...</p>}
          </div>

        </div>


      </body>
    </div>
  )
}

export default HomePage
