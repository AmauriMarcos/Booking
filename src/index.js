import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/main/global.css";
import './styles/fonts/Segoe/SegoeUI.ttf';
import './styles/fonts/Segoe/SegoeUI-Bold.ttf';
import { store } from './app/store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore} from 'redux-persist';

const root = ReactDOM.createRoot(document.getElementById('root'));

let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


