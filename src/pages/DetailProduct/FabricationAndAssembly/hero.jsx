
import { Link, useLocation } from 'react-router-dom';
export default function Hero() {
    const location = useLocation()
    const isPages = location.pathname === '/products/fabricationassembly'
    return (
        <div className={`hero min-h-screen inset-0 bg-gradient-to-b from-[rgba(36,60,122,0.91)] to-[rgba(255,255,255,0.86)] via-transparent p-2 flex flex-col relative`}>
            <div className="bg-transparent p-4 flex flex-wrap self-start absolute top-20">
                <ul className="flex items-center">
                    <li className="inline-flex items-center">
                        <Link to="/" className="text-gray-600 hover:text-blue-500">
                            Home
                        </Link>
                        <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
                    </li>
                    <li className="inline-flex items-center">
                        <Link to='/products' className="text-gray-600 hover:text-blue-500">
                            Product
                        </Link>
                        <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
                    </li>
                    <li className={`inline-flex items-center `}>
                        <Link href="#" className={`${isPages ? 'text-primary' : 'text-gray-600'} hover:text-blue-500`}>
                            Fabrication & Assembly
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="hero-content items-center flex flex-col text-black top-40 absolute">
                <p className="text-5xl font-bold">Fabrication & Assembly</p>
            </div>
        </div>
    );
}