import axios from 'axios'; //importing axios for making requests 

const API = axios.create({ baseURL: `http://localhost:4000`, withCredentials: true }) //instance of axios for working with public APIS 
const Protected = axios.create({ baseURL: `http://localhost:4000/`, withCredentials: true }) //instance of axios for working with protected APIS where accesstoken is required on each request
// import {useDispatch,useSelector} from 'react-redux'
//this function will check the validity of access token before calling any api 
Protected.interceptors.request.use(
        (config) => {

                const accessToken = localStorage.getItem("accessToken");
                console.log(accessToken)
                if (accessToken) {
                        config.headers.authorization = `Bearer ${accessToken}`;
                }
                return config;
        },
        (error) => {
                console.log(error.response.data.error)
                Promise.reject(error);
        }


);

//if response have error means access token expired
// then this function will use to recreate the access
// token and call the previous query 

Protected.interceptors.response.use(
        (response) => {
                return response;
        },
        function (error) {
                // let dispatch =useDispatch()
                // const {user}=useSelector(state=>({...state}))
                const originalRequest = error.config;
                //   let refreshToken = Cookies.get("refresh");
                //   console.log(refreshToken)
                if (error.response.status === 401 && !originalRequest._retry) {
                        originalRequest._retry = true;
                        return Protected
                                .post(`/auth/refresh-token`, {}, { withCredentials: true })
                                .then((res) => {
                                        if (res.status === 200) {
                                                localStorage.setItem("accessToken", res.data.accessToken);

                                                //name ---> jwt expired --> auth-refresh-token -->set it to localStorage --> run originalRequest
                                                // dispatch({
                                                //   type:"LOGGED_IN_USER",
                                                //   payload:{...user,accessToken:res.data.accessToken}
                                                // })
                                                console.log("Access token refreshed!");
                                                return Protected(originalRequest);
                                        }
                                });
                }
                return Promise.reject(error);
        }
);
//auth API's
//Protected.get --> axios.get



export const SignUpAPI = (formdata) => API.post('/auth/register', formdata)
export const LogIn = async (formdata) => await API.post('/auth/login', formdata)
export const VerifyTOTP = async (formdata) => await API.post('/auth/verify', formdata)
export const GoogleLogIn = async (formdata) => await API.post('/auth/google-login', formdata)
export const authCheck = async () => await Protected.get("/")
export const logout = async () => await Protected.get("/auth/logout")
export const totalUserAndNewUser = async () => await Protected.get("/api/user/totalUserAndNewUser")
export const resetPassword = async (data) => await API.post("/auth/reset", data);
export const changePassword = async (data) => await API.post("/auth/new-password", data);

