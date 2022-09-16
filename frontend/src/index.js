import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './features/login/loginSlice';
import { apiSlice } from './features/api/apiSlice';

const store = configureStore({
  reducer: {
    [loginSlice.reducerPath]: loginSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ApiProvider api={apiSlice}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
