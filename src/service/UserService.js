import axios from 'axios';
const BASE_API_URL="http://localhost:8080/"

class UserService{

    saveUser(user){
        return axios.post(BASE_API_URL+"/saveUser",user);
    }



}
export default new UserService();