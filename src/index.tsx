import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { UserLoginTemplate } from './HomeTemplate/UserLoginTemplate';
import Login from './Pages/Login/Login';
import HomeTemplate from './HomeTemplate/HomeTemplate';
import 'antd/dist/antd'


import { store } from './redux/configStore';
import { Provider } from 'react-redux';

import CreateTask from './Pages/Task/CreateTask';
import Profile from './Pages/User/Profile';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export const history: any = createBrowserHistory()
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="home" element={<HomeTemplate />}>
          <Route path='profile' element={<Profile />}></Route>
        
        <Route path='createTask' element={<CreateTask />}></Route>
        
        </Route>


      </Routes>
    </HistoryRouter>
  </Provider>
);

