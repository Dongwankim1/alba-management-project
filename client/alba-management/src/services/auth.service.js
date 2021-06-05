import axios from 'axios';


const API_URL = "http://localhost:8080/api/auth";


const login = (email,password) =>{
    return axios.post(`${API_URL}/signin`,{email,password})
    .then((response)=>{
        if(response.data.accessToken){
            localStorage.setItem("user",JSON.stringify(response.data));
        }
    })
}

const logout = () =>{
    localStorage.removeItem("user");
}

const register = (username,birth,email,password,roles) =>{
    return axios.post(`${API_URL}/signup`,{
        username,birth,email,password,roles
    }).then((response)=>{
        return response;
    }).catch((error)=>{
        console.log(error);
        return error;
    })
}

export default {
    login,logout,register
}
