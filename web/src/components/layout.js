import React from 'react';
import 'normalize.css';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]');
  }

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header />
      {children}
      <Footer />
    </>
  );
}
