export const ACCESS_TOKEN = "accessToken";
export const USER_LOGIN = "userLogin";
export const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjE5LzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDQ1NDQwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0NjAyMDAwfQ.49m9-EoDr6zr7UOk_79hfcvJWKI_s0Wy_g40ossfl9c"
export const { saveStore, saveStoreJson, getStore, getStoreJson, removeStore } =
  {
    saveStore: (name:string, stringValue:string) => {
      localStorage.setItem(name, stringValue);
      return stringValue;
    },
    saveStoreJson: (name:string, value:any) => {
      let sValue = JSON.stringify(value);
      localStorage.setItem(name, sValue);
      return value; //object
    },
    getStore: (name:string):string|null|undefined => {
      if (localStorage.getItem(name)) {
        return localStorage.getItem(name);
      }
      return null;
    },
    getStoreJson: (name:string):any |undefined => {
      if (localStorage.getItem(name)) {
        return JSON.parse(localStorage.getItem(name));
      }
      return null;
    },
    removeStore: (name:string) => {
      if (localStorage.getItem(name)) {
        localStorage.removeItem(name);
      }
    },
  };