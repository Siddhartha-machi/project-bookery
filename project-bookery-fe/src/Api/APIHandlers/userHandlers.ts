import { APIResquestArgsType } from "../../Types/apiTypes";
import APIClient from "../APIClient";

const UserAPI = new APIClient({
  mock: true,
  url: "users.json",
});

export const authenticateUser = async (params: APIResquestArgsType) => {
  const { loading, dispatch, data } = params;
  loading(true);
  const response = await UserAPI.post(data ? data : {});
  dispatch(response?.data);
  loading(false);
  return response;
};

export const registerUser = async (params: APIResquestArgsType) => {
  const { loading, dispatch, data } = params;
  loading(true);
  const response = await UserAPI.post(data ? data : {});
  dispatch(response?.data);
  loading(false);
  return response;
};
