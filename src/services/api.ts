import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API_URL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      return Promise.reject(error);
    }
  }
);

const api = {
  getStatsImperator: () => axiosInstance.get('/stats_imperator'),
  getProjects: () => axiosInstance.get('/projects/all'),
  getProject: (id: string) => axiosInstance.get(`/projects/${id}`),
  getOverview: () => axiosInstance.get(`/overview`),
  getTeam: () => axiosInstance.get(`/team`),
  getFaq: () => axiosInstance.get(`/faq`),
  getMedium: () => axiosInstance.get(`/medium`),
  postContact: (name: string, mail: string, text: string) =>
    axiosInstance.post('/contact', {
      name,
      mail,
      text,
    }),
};

export default api;
