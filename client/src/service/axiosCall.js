import axios from 'axios';

class AxiosCall {
  async getData(url, pageNo) {
    let response;
    try {
      response = await axios.get(url, {
        params: { pageNo: pageNo },
      });
    } catch (e) {
      console.log(e);
    }
    return response;
  }
}

export default AxiosCall;
