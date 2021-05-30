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

const register = (username,email,password) =>{
    return axios.post(`${API_URL}signup`,{
        username,email,password
    }).then((response)=>{
        alert("생성완료")
    }).catch((error)=>{
        alert("생성에러")
    })
}

export default(
    login,logout,register
)
