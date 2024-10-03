import axios from 'axios'

const API_URL = '/api/employee/'

//Loginr user
const login = async (userData)=>{
    try {
        const response = await axios.post(API_URL + 'login', userData);
        if (response.data) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      } catch (error) {
        console.error('Login error:', error);
      }
}

//Logout user
const logout = async()=>{
    localStorage.removeItem('user');
}

const AuthService = {
    login,
    logout
}

export default AuthService