
import { Link, useLocation } from 'react-router-dom';
export default function Hero() {
    const location = useLocation()
    const isPages = location.pathname === '/products/explosivestorage'
    console.log(location.pathname)
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
                            Explosive Storage
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="hero-content items-center flex flex-col top-40 absolute">
                <div className=''>
                    <p className='text-black text-4xl font-semibold'>Explosive Storage</p>
                </div>
                <div className="object-cover">
                    <img src="/images/ExplosiveStorage_item.svg" alt="Gazalibawavigroup" className='object-cover' />
                    <div className='text-black text-justify text-xl'>Ane transport tank 4.5 ton c/w pad eyes and forklift pocket and corner locks</div>
                </div>

            </div>

        </div>
    );
}