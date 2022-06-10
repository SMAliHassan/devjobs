import axios from 'axios';

const jobsApi = axios.create({ baseURL: 'http://127.0.0.1:8000/api/v1' });
// const jobsApi = axios.create({ baseURL: 'http://localhost:3001' });

export default jobsApi;
