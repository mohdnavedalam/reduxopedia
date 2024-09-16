import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import Counter from './Components/Counter';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Counter />
      <Footer />
    </Provider>
  </React.StrictMode>
);

// componentDidMount method was being called multiple times. hence replaced React.StrictMode with div
