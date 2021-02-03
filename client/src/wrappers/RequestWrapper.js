import axios from "axios";
// axios.defaults.baseURL = "https://desafio-aevo-backend.herokuapp.com/api";
axios.defaults.baseURL = "http://localhost:3001/api";
// TODO: update request methods to  accept params

class RequestWrapper {
  static async getRequest(path) {
    const request = await axios({
      method: "GET",
      url: path,
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
