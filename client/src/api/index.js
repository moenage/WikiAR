import axios from 'axios';

const url = 'http://localhost:5000/infoCards';

export const fetchInfoCards = () => axios.get(url);