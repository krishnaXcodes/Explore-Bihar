import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { useTheme } from './hooks/useTheme';
import Layout from './components/layout/Layout/Layout';
import Home from './pages/Home/Home';
import Districts from './pages/Districts/Districts';
import DistrictDetail from './pages/DistrictDetail/DistrictDetail';
import Tourism from './pages/Tourism/Tourism';
import History from './pages/History/History';
import Culture from './pages/Culture/Culture';
import Food from './pages/Food/Food';

const NotFound = () => (
  <section className="container" style={{ minHeight: '60vh', padding: 'var(--space-16) 0', textAlign: 'center' }}>
    <h1 style={{ fontFamily: 'var(--font-display)' }}>Page coming soon</h1>
    <p style={{ color: 'var(--color-text-secondary)' }}>This section is being prepared for Explore Bihar.</p>
  </section>
);

function App() {
  const { theme } = useTheme();
  const location = useLocation();

  // Initialize smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-container">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/districts" element={<Districts />} />
          <Route path="/districts/:slug" element={<DistrictDetail />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/history" element={<History />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/food" element={<Food />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
