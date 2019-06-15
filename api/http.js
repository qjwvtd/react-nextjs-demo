// import axios from 'axios';

// let webroot = "https://api.b91.com";
// if (process.env.NODE_ENV === "development") {
// 	webroot = "https://api.b91.com";
// } else {
// 	webroot = "https://api.b91.com";
// }
// console.log('current NODE_ENV:' +process.env.NODE_ENV +', baseUrl: '+ webroot);
// // 创建axios实例
// const http = axios.create({
//     baseURL: webroot,
//     timeout: 60 * 1000 // 请求超时时间
// });
// // http request 拦截器
// http.interceptors.request.use(
//     config => {
//         config.headers["Content-Type"] = "application/json";
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     }
// );
// // http response 拦截器
// http.interceptors.response.use(
//     response => {
//         if (response.status == 200) {
//             return response.data;
//         } else {
//             return Promise.reject(response.data);
//         }
//     },
//     err => {
//         return Promise.reject({
//             code: 500,
//             message: "服务器出错，请稍后再试！"
//         });
//     }
// );
// export default http;