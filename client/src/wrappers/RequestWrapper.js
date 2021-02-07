import axios from "axios";
axios.defaults.baseURL = "https://desafio-aevo-backend.herokuapp.com/api";

// If the HTTP client ever needs to be changed, it`ll only need to be changed here.
class RequestWrapper {
  static async getRequest(path, params = null) {
    const request = await axios({
      method: "GET",
      url: path,
      params: params,
    });

    return await request.data;
  }

  static async postRequest(path, data) {
    const request = await axios({
      method: "POST",
      url: path,
      data: data,
    });

    return await request.data;
  }
}

export { RequestWrapper as default };
