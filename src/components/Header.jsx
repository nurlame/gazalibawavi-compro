import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion"
import { Link, useLocation } from "react-router-dom";
import { useWindowScroll } from "../hooks/custom";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const header = useAnimationControls();
  const color = useAnimationControls();
  const location = useLocation();
  const icon = useRef()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/';
  const isAboutUs = location.pathname === '/about-us'
  const isProducts = location.pathname === '/products'
  const isContactUs = location.pathname === '/contact-us'
  const isProductsDetail = [
    "/products/perforatinggun", 
    "/products/anfotruck",
    "/products/xboreportable", 
    "/products/explosivestorage", 
    "/products/heavyequipment", 
    "/products/drillingtools",
    "/products/fabricationassembly",
    "/products/wirelinetools",
    "/products/miningtools",
  ].includes(location.pathname)
  useEffect(() => {
    const isHomePage = location.pathname === '/';
    header.start({
      backgroundColor: isHomePage ? 'transparent' : 'transparent',
      boxShadow: '0px 0px 0px rgba(0,0,0,0)',
      borderBottomWidth: isHomePage ? '0px' : '0px',
      padding: '20px'
    });
    color.start({
      color: isHomePage ? 'black' : 'white',
    });
  }, [location.pathname]);

  useWindowScroll((e) => {
    // if (window.location.pathname !== '/') return;

    if (e.scrollTop < 100 && e.clientWidth < 2100) {
      icon.current.classList.add('bg-[url("/src/assets/logo_gazali_blue.svg")]');
      icon.current.classList.remove('bg-[url("/src/assets/logo_gazaligroup.svg")]');
      header.start({
        background: 'transparent',
      });
      color.start({
        color: 'white',
      });
    } else {
      icon.current.classList.add('bg-[url("/src/assets/logo_gazaligroup.svg")]');
      icon.current.classList.remove('bg-[url("/src/assets/logo_gazali_blue.svg")]');
      header.start({
        background: '#243C7A',
      });
      color.start({
        color: 'initial',
      });
    }
  });


  return (
    <header className={`header-container mx-auto w-full top-0 z-50 fixed`}>
      <motion.div className="justify-between px-6  flex duration-300 transition-all gap-4" animate={header} id="header">
        <div className='gap-3 items-center flex'>
          <Link to={'/'}>
            <div
              className={`w-48 h-10 aspect-video bg-center bg-contain bg-no-repeat ${'bg-[url("/src/assets/logo_gazali_blue.svg")]'
                }`}
              ref={icon}
            />
          </Link>
        </div>
        <div className="flex flex-row">
          <button className={`px-8 ${isHomePage ? 'text-[navy]' : 'text-white'}`} onClick={() => navigate('/')}>
            Home
          </button>
          <button className={`px-8 ${isAboutUs ? 'text-[navy]' : 'text-white'}`} onClick={() => navigate('/about-us')}>
            About Us
          </button>
          <button className={`px-8 ${isProducts || isProductsDetail ? 'text-[navy]' : 'text-white'}`} onClick={() => navigate('/products')}>
            Products
          </button>
          <button className={`px-8 ${isContactUs ? 'text-[navy]' : 'text-white'}`} onClick={() => navigate('/contact-us')}>
            Contact Us
          </button>
        </div>
      </motion.div>
    </header>
  )
}