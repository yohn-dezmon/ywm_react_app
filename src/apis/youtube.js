import axios from 'axios';

const KEY = 'AIzaSyB2CpHJKOR13BfNdTDckVYitMzV9FIf8Lc';

// pre-configured instance of axios that already has a baseURL 
// and some default parameters
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});