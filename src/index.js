import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import store from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (store) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={ store.getState() } addPost={ store.addPost.bind(store) } updateNewPostText={ store.updateNewPostText.bind(store) }/>
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(store);
store.subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();