import axios from 'axios';

//1. 创建axios对象
const service = axios.create();

//2. 请求拦截器
service.interceptors.request.use(
  config => {//请求出发前执行的方法
  return config;
}, 
error => {
  return Promise.reject(error);
});

//3. 响应拦截器
service.interceptors.response.use(
  response => {//响应成功后第一个执行的方法
  //判断code码
  return response.data;
},error => {
  return Promise.reject(error);
});

export default service;