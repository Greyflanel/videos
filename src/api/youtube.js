import axios from "axios"

const KEY = 'AIzaSyCbpMTDaqW6NBhuHjOmhR4s3GnOXcqXbkA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
}
})