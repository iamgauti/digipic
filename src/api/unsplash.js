import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: "Client-ID 0WelXPR8nRy2YARDmswuIhA7p_kmGjdQIc6b3TEFW48"
    }
});