import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const uploadResume = (formData) => axios.post(`${API_URL}/upload-resume/`, formData);
export const getRankedResumes = (jobDesc) => axios.get(`${API_URL}/get-ranked-resumes/${jobDesc}`);
