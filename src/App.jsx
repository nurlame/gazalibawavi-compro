import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom'
import { useAnimationControls } from 'framer-motion';
import { useScreen } from './hooks/custom';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const { pathname } = useLocation();
  const animate = useAnimationControls();
  const { width } = useScreen();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const isMobile = width && width <= 768;
    animate.start({
      top: !isMobile ? 0 : 200,
      borderRadius: '1.5rem',
    });
  }, [width]);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>

  )
}

export default App
