import Axios from 'axios';

const instance=Axios.create({
    baseURL:"https://react-burgerbuilder-ab5c6-default-rtdb.firebaseio.com/"
})
export default instance;