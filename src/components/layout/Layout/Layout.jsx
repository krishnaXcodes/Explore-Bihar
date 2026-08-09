import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollProgress from '../../common/ScrollProgress/ScrollProgress';
import BackToTop from '../../common/BackToTop/BackToTop';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <ScrollProgress />
      <Header />
      
      <main className="layout__main" id="main-content">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
