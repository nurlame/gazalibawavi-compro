import WhatsAppButton from '../../../components/ButtonWhatsapp';
import DownloadButton from '../../../components/DownloadPdf';
import { Link, useLocation } from 'react-router-dom';
export default function Hero() {
    const location = useLocation()
    const isPerforatingGun = location.pathname === '/products/wirelinetools'
    console.log(location.pathname)
    return (
        <div className={`hero min-h-screen inset-0 bg-gradient-to-b from-[rgba(36,60,122,0.91)] to-[rgba(255,255,255,0.86)] via-transparent p-2 flex flex-col relative`}>
                <div className="bg-transparent p-4 flex items-center flex-wrap self-start absolute top-20">
                    <ul className="flex items-center ">
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
                            <Link href="#" className={`${isPerforatingGun ? 'text-primary' : 'text-gray-600'} hover:text-blue-500`}>
                                Wireline Tools
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hero-content w-full flex flex-col lg:flex-row justify-between top-40 absolute">
                    <div className="object-cover">
                        <img src="/images/WirelineTools_item.svg" alt="Gazalibawavigroup" className='object-cover' />
                    </div>
                    <div className="w-full flex flex-col max-h-fit pl-6">

                        <div className="inline-grid grid-rows-1 gap-4 text-justify lg:max-w-5xl">
                            <div className="col-span-2">
                                <span className="text-5xl font-bold text-black">Wireline Tools</span>
                            </div>
                            <div className="col-span-2">
                                <div className="text-xl text-black">
                                    <span className="text-xl text-black">Gazali Bawavi manufactures a full range of slickline downhole tools that include rope sockets , wireline stems , knuckle joint and swivel joint. Basic tool string components and running tools are manufacturing to highest quality standards as per standard with major service companies.
                                        <br />
                                        <br />
                                        Gazali Bawavi also provide services to refurbish downhole tools extending lifetime and reducing cost . We are able also to redesign downhole tools to satisfy specific well requirement and connection.</span>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="flex flex-row gap-6">
                                   <WhatsAppButton />
                                   <DownloadButton fileName='Wireline.pdf' fileUrl='/Path/Wireline.pdf'/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
    );
}