import { apiClientType } from "../Types/apiTypes";
import HTTPClient from "./Requests";

export default class APIClient {
  #mock = false;
  #client: HTTPClient;
  #baseURL = "";

  constructor(args: apiClientType) {
    if (args.mock) {
      this.#mock = args.mock;
      this.#baseURL = "public/mocks/";
    }
    this.#baseURL = this.#baseURL + args.url;
    this.#client = new HTTPClient(this.#baseURL);
  }

  async mockClient() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
  async get() {
    if (this.#mock) {
      await this.mockClient();
    }
    return await this.#client.get();
  }
  async post(postData: object) {
    if (this.#mock) {
      return await this.mockClient();
    }
    return await this.#client.post(postData);
  }
  async delete() {
    if (this.#mock) {
      return await this.mockClient();
    }
    return await this.#client.delete();
  }
  async update(updatedata: object) {
    if (this.#mock) {
      return await this.mockClient();
    }
    return await this.#client.patch(updatedata);
  }
}
