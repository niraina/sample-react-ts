import axios from "axios";
import { PostRefresh } from "../requests/_post_request";
const api = axios.create({
    baseURL: "http://localhost:3400"
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        // config.headers.Cookies = `Bearer ${token}`;
    }
    return config;
});

// Intercepteur de réponses
// api.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const refreshToken = localStorage.getItem("refreshtoken");
//         console.log(refreshToken);
        
        
//         if (
//             error?.response?.status === 403 || error?.response?.status === 401 || error?.response?.status === 403
//         ) {
//             try {
//                 // const accessToken = await PostRefresh({ refreshToken: refreshToken })
//                 // console.log(accessToken);
//                 // if(accessToken?.response?.status === 403 || accessToken?.response?.status === 401 || accessToken?.response?.status === 400) {
//                 //     console.log(accessToken);
                    
//                 // }

//                 // if (newToken?.data?.status?.toString()?.includes("2")) {
//                 //     localStorage.setItem("token", newToken)
//                 // }
//                 // return api(originalRequest);
//                 api.post('/auth/refreshToken', {
//                     "refreshToken": refreshToken
//                  })
//                     .then((response) => {
//                         console.log(response);
//                     })
//                     .catch((error) => {
//                         console.log(error);
//                     });
//             } catch (error) {
//                 console.log(error);
                
//             }
//         }
//         // return Promise.reject(error);
//     }
// );

export default api;