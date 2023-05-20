import axios from 'axios';
const getMovieData = async (path: string, params?: object) => {
  params = {
    params: { ...params, api_key: process.env.API_KEY },
    region: 'CN',
  };
  try {
    let response = await axios.get(
      `${process.env.API_ENDPOINT}${path}?`,
      params
    );
    return response.data;
  } catch (e) {
    return { message: 'Error fetching from api' };
  }
};

export default getMovieData;
