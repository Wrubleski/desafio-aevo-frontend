import axios from "axios";

class RequestWrapper {
  constructor() {
    axios.defaults.baseURL = "https://desafio-aevo-backend.herokuapp.com/api";
  }

  static async getRequest(path) {
    const request = await axios({
      method: "GET",
      url: path,
    });

    return await request.data;
  }

  static async postRequest(path, data) {
    console.log(data);
    const request = await axios({
      method: "POST",
      url: path,
      data: data,
    });

    return await request.data;
  }
}

export { RequestWrapper as default };
