import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params:{
    key: '492dac4752374e8b9a3c246ee3d1e485'
  }
});
