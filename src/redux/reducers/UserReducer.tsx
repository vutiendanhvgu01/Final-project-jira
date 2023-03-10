import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserLoginModel } from "../../Pages/Login/Login";
import { history } from "../../index";
import axios from "axios";
import {
  ACCESS_TOKEN,
  //   //   getStore,
  //   getStoreJson,
  saveStore,
  saveStoreJson,
  getStoreJson,
  USER_LOGIN,
  TOKEN_CYBERSOFT,
  getStore,
} from "../../util/config";

import { DispatchType } from "../configStore";
export interface UserLoginResult {
  id:          number;
  email:       string;
  avatar:      string;
  phoneNumber: string;
  name:        string;
  accessToken: string;
}
export interface UserState {
  userLogin: UserLoginResult;
}
const initialState = {
  userLogin: getStoreJson(USER_LOGIN) ? getStoreJson(USER_LOGIN) : null,
};

const UserReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    loginAction: (state: UserState, action: PayloadAction<UserLoginResult>) => {
      state.userLogin = action.payload;
    },
  },
});

export const { loginAction } = UserReducer.actions;

export default UserReducer.reducer;

export const loginAsyncApi = (userLogin: UserLoginModel) => {
  return async (dispatch:DispatchType) => {
    const result = await axios({
      url: "https://jiranew.cybersoft.edu.vn/api/Users/signin",
      method: "POST",
      data: userLogin,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
      },
    });
    console.log("obDangNhap", result.data.content);
    //Cập nhật cho reducer
    const action = loginAction(result.data.content);
    dispatch(action);
    //Lưu localstorage
    saveStoreJson(USER_LOGIN, result.data.content);
    saveStore(ACCESS_TOKEN, result.data.content.accessToken);
    history.push("/home")
  };
};
