import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://prod-55.eastus.logic.azure.com:443'
});

//"postman-token": "b67c1676-b398-20f7-3674-7efcd00ee70f"

instance.defaults.headers.common['Authorization'] =  'b67c1676-b398-20f7-3674-7efcd00ee70f';
//'AUTH TOKEN FROM INSTANCE';
const params = new URLSearchParams();

axios.post('/key_phrases', params);
// instance.interceptors.request...
//Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });


export default instance;