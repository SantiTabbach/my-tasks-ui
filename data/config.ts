import axios, {
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";

//TODO: Pull from bk
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6IlNhbnRpIiwicm9sZXMiOlsiVXNlciJdfSwiaWF0IjoxNzE4OTA5NDk4LCJleHAiOjE3MTg5OTU4OTh9.3Ekb-CPLMQjKbg41zVzpIcGua1P0uYw-OARKVrmKGvg";

export const BASE_URL = process.env.BASE_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: AxiosError };

export const sendGetRequest = async (
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<ApiResponse<any>> => {
  try {
    const response: AxiosResponse = await axiosInstance.get(endpoint, config);
    return { success: true, data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data);
      return { success: false, error };
    } else {
      console.error("Unexpected error:", error);
      throw new Error("Unexpected error occurred");
    }
  }
};
