import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BPM_PROJECTS_API_URL;
axios.defaults.headers.common["Token"] = process.env.REACT_APP_BPM_PROJECTS_ACCESS_TOKEN;
axios.defaults.headers.common["Content-Type"] = "application/json";

export default axios;
