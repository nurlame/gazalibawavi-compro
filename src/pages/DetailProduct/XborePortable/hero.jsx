import WhatsAppButton from '../../../components/ButtonWhatsapp';
import DownloadButton from '../../../components/DownloadPdf';
import { Link, useLocation } from 'react-router-dom';
export default function Hero() {
    const location = useLocation()
    const isPerforatingGun = location.pathname === '/products/xboreportable'
    console.log(location.pathname)
    return (
        <div className={`hero min-h-screen inset-0 bg-gradient-to-b from-[#FFE06C] via-[rgba(158,158,158,0.09)] to-[rgba(158,158,158,0)] p-2 relative`}>
            <div className="flex flex-col justify-around mt-10">
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
                                XBore Portable Line Boring
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hero-content w-full flex flex-col lg:flex-row justify-between mt-10">
                    <div className="object-cover">
                        <img src="/images/XborePortable_item.svg" alt="Gazalibawavigroup" className='object-cover' />
                    </div>
                    <div className="w-full flex flex-col max-h-fit pl-6">

                        <div className="inline-grid grid-rows-1 gap-4 text-justify lg:max-w-5xl">
                            <div className="col-span-2">
                                <span className="text-5xl font-bold text-black">XBore Portable Line Boring</span>
                            </div>
                            <div className="col-span-2">
                                <div className="text-xl text-black">
                                    <span className="text-xl text-black">A precision heavy duty and portable line boring machine for stern tubes, rudder bores, track pad, bucket excavator, hinge pins, gearboxes, turbines and many more applications.
                                        <br />
                                        <br />
                                        Diameter Range: 30.0 - 50.0 mm Stroke: 300.0 - 600.0mm Max Bar Length: 60.0 - 295.0.
                                        <br />
                                        <br />
                                        This line boring machine is more compact and affordable version of line boring machine, with the mounting flexibility needed for work in restrictive spaces. A variety of motor and bar options add power to this outstanding value.</span>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <div className="flex flex-row gap-6">
                                    <WhatsAppButton />
                                    <DownloadButton fileName='Xbore.pdf' fileUrl='/Path/Xbore.pdf'/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}