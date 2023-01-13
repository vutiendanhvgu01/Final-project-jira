import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { UserLoginTemplate } from './HomeTemplate/UserLoginTemplate';
import Login from './Pages/Login/Login';
import HomeTemplate from './HomeTemplate/HomeTemplate';
import 'antd/dist/antd'
import CreateTask from './Pages/Task/CreateTask';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export const history:any = createBrowserHistory()
root.render(
 <HistoryRouter history={history}>
  <Routes>
    <Route index element={<Login/>}></Route>
    <Route path="home" element={<HomeTemplate/>}>
   
    </Route>
    <Route path='CreateTask' element={<CreateTask/>}></Route>
  </Routes>
 </HistoryRouter>
);

