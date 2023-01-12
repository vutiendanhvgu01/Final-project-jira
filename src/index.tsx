import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { UserLoginTemplate } from './HomeTemplate/UserLoginTemplate';
import Login from './Pages/Login/Login';
import HomeTemplate from './HomeTemplate/HomeTemplate';
import 'antd/dist/antd'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export const history:any = createBrowserHistory()
root.render(
 <HistoryRouter history={history}>
  <Routes>
    <Route index element={<Login/>}></Route>
    <Route path="" element={<HomeTemplate/>}>
      
    
      </Route>
    
  </Routes>
 </HistoryRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

