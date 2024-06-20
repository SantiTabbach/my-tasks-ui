import axios, {
  AxiosResponse,
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";

//TODO: Pull from bk
const ACCESS_TOKEN = process.env.EXPO_PUBLIC_ACCESS_TOKEN ?? "";

export const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer ".concat(ACCESS_TOKEN),
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
    throw new Error(`While sending get request: ${error}`);
  }
};
