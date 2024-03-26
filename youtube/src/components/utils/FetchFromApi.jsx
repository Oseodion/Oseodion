import axios from "axios";

const BASE_URL= 'https://youtube-v31.p.rapidapi.com'
const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '36b743078bmsh0507d11f5f39f66p1211dfjsn3530653bb8d7',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const FetchFromApi = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
console.log(data)
    return data;
  }

  // ${import.meta.env.REACT_APP}