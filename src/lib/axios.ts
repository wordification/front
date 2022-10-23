import axiosBase from "axios";

const axios = axiosBase.create({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  baseURL: process.env.API_BASE_URL!,
  timeout: 1000,
});

export default axios;
