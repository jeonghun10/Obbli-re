import axios from 'axios';

class AxiosCall {
  async getData(url) {
    let response;
    try {
      response = await axios.get(url, {
        params: { api: process.env.REACT_APP_SERVER_API_KEY },
      });
    } catch (e) {
      console.log(e);
    }
    return response;
  }
}

export default AxiosCall;
