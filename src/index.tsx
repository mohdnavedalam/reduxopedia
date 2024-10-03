import ReactDOM from 'react-dom/client';
import Header from './app/Layout/Header';
import Footer from './app/Layout/Footer';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import Counter from './app/Components/Counter';
import DestinationList from './app/Components/DestinationList';
import DestinationFact from './app/Components/DestinationFact';
import ResetApp from './app/Components/ResetApp';
import FooterMarginTop from './app/Layout/FooterMaginTop';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <ResetApp />
      <Counter />
      <DestinationList />
      <DestinationFact />
      <FooterMarginTop />
      <Footer />
    </Provider>
  </React.StrictMode>
);

// componentDidMount method was being called multiple times. hence replaced React.StrictMode with div
