import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//1.reset.css rem.js
import "./assets/css/reset.css"
import "./assets/js/rem"

//2.UI+utils/alert.js
import 'antd-mobile/dist/antd-mobile.css';

//3.安装axios qs ,utils/request.js 

//4.store,react-redux 
import { Provider } from "react-redux"
import store from "./store"

//5.路由模式+懒加载函数
import { HashRouter } from "react-router-dom"

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root')
);
