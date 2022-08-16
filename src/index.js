import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Tome' },
  { id: 3, name: 'Jone' },
];

const messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'Yo' },
  { id: 3, message: 'Hello' }
];

const posts = [
  { id: 1, message: 'Hi', likesCount: 0 },
  { id: 2, message: 'Hello', likesCount: 12 },
]

const data = {
  dialogs,
  messages,
  posts,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
