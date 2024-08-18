import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '20dbafbabb1144c8a11151e01e2fe91c'
  }
})