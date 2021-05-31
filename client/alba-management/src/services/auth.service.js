import axios from 'axios';


const API_URL = "http://localhost:8080/api/auth";


const login = (username,password) =>{
    return axios.post(`${API_URL}/singin`,{username,password})
    .then((response)=>{
        if(response.data.accessToken){
            localStorage.setItem("user",JSON.stringify(response.data));
        }
    })
}

const logout = () =>{
    localStorage.removeItem("user");
}

const register = (username,birth,email,password) =>{
    return axios.post(`${API_URL}/signup`,{
        username,birth,email,password
    }).then((response)=>{
        console.log('asfasf',response);
        alert("생성완료")
    }).catch((error)=>{
        console.log(error);
        alert("생성에러");
    })
}

export default {
    login,logout,register
}
