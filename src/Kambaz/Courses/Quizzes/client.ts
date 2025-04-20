import axios from "axios";
export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const QUIZZES_API = `${REMOTE_SERVER}/api/courses/:courseId/quizzes`;
const axiosWithCredentials = axios.create({ withCredentials: true });
export const createQuiz = async (quiz: any) => {
  const response = await axios.post(`${QUIZZES_API}`, quiz);
  return response.data;
};