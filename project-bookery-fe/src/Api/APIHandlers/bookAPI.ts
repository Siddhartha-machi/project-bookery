import { APIResquestArgsType } from "../../Types/apiTypes";
import APIClient from "../APIClient";

const BooksAPI = new APIClient({
  mock: true,
  url: "booksMock.json",
});

export const GetBooks = async (params: APIResquestArgsType) => {
  const { loading, dispatch } = params;
  loading(true);
  const response = await BooksAPI.get();
  dispatch(response.data);
  loading(false);
};
