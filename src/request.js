import axios from "axios";
import store from "./store";
import qs from "qs";

axios.create({
  timeout: 50000, //请求超时的时间
  baseURL: "", //请求的域名
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});
axios.interceptors.request.use(
  function(config) {
    const token = store.state.token;
    if (config.method.toUpperCase() == "POST") {
      config.data = qs.stringify(
        Object.assign(
          {
            token,
            client: "wap"
          },
          qs.parse(config.data)
        )
      );
    } else {
      config.params = Object.assign(
        {
          token,
          client: "wap"
        },
        config.params
      );
    }
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);
export default axios;
