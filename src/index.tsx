import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import { store } from './store/store';
import { Provider } from 'react-redux';
import React from 'react';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Footer />
    </Provider>
  </React.StrictMode>
);

// componentDidMount method was being called multiple times. hence replaced React.StrictMode with div
