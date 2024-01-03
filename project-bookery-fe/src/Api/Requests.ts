export default class HTTPClient {
  #url = "";
  #headers: RequestInit = {};
  #response: { status: number; data: unknown };

  constructor(url: string) {
    this.#url = url;
    this.#headers = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    this.#response = { status: -1, data: [] };
  }
  async get() {
    this.#headers.method = "get";
    try {
      const response = await fetch(this.#url, this.#headers);
      const data = await response.json();
      this.#response.data = data;
      this.#response.status = response.status;
    } catch (e) {
      this.#response.data = e;
    }
    return this.#response;
  }
  async post(data: object) {
    this.#headers.method = "post";
    this.#headers.body = JSON.stringify(data);
    let getResponse = null;

    try {
      const response = await fetch(this.#url, this.#headers);
      const data = await response.json();
      getResponse = data;
    } catch (e) {
      getResponse = e;
    }
    return getResponse;
  }
  async delete() {
    this.#headers.method = "delete";
    let getResponse = null;

    try {
      const response = await fetch(this.#url, this.#headers);
      const data = await response.json();
      getResponse = data;
    } catch (e) {
      getResponse = e;
    }
    return getResponse;
  }
  async patch(data: object) {
    this.#headers.method = "patch";
    let getResponse = null;
    this.#headers.body = JSON.stringify(data);
    try {
      const response = await fetch(this.#url, this.#headers);
      const data = await response.json();
      getResponse = data;
    } catch (e) {
      getResponse = e;
    }
    return getResponse;
  }
}
