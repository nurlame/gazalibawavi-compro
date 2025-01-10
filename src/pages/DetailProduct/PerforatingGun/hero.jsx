import DownloadButton from '../../../components/DownloadPdf';
import WhatsAppButton from '../../../components/ButtonWhatsapp';
import { Link, useLocation } from 'react-router-dom';
export default function Hero() {
    const location = useLocation()
    const isPerforatingGun = location.pathname === '/products/perforatinggunn'
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
                            <Link href="#" className={`${isPerforatingGun ? 'text-[navy]': 'text-gray-600'} hover:text-blue-500`}>
                                Perforating Gun Pipe
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hero-content w-full flex-col lg:flex-row justify-between mt-10">
                    <div className="object-cover">
                        <img src="/images/PerforatingGun.svg" alt="" />
                    </div>
                    <div className="w-full flex flex-col max-h-fit pl-6">

                        <div className="inline-grid grid-rows-1 gap-4 text-justify lg:max-w-5xl">
                            <div className="col-span-2">
                                <span className="text-5xl font-bold text-black">Gazali Bawavi Group</span>
                            </div>
                            <div className="col-span-2">
                                <div className="text-xl text-black">
                                    <span className="text-xl text-black">  Design, Produces, And Various Connection And Hardware Firing Head Accessories. Offering To Each Client The Best Economic And Technical Solutions In According To Needs, Such As :</span>
                                    <ul className="list-disc list-inside text-black pl-5">

                                        <li>
                                            Required Firing, Ignition And Running Systems
                                        </li>
                                        <li>
                                            Selected Or Available Charges s
                                        </li>
                                        <li>
                                            Configuration Of Profile Of Layers To Perforate
                                        </li>
                                        <li>
                                            Expected Working Pressure
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-span-2">
                                <span className="py-6 text-xl text-black">
                                    <span className="font-bold">Production :</span> Production Lines With High Tech Equipment and Flexibility
                                </span>
                            </div>
                            <div className="col-span-2">
                                <span className="py-6 text-xl text-black">
                                    <span className="font-bold">Supply :</span> Wide Stock of Raw Material For Immediate Availability
                                </span>
                            </div>
                            <div className="col-span-2">
                                <article className="text-xl text-black">
                                    <p className="font-bold">Customer Service</p>
                                    <p>
                                        Gazali Bawavi Group, Offering Costumers a Fast and Efficient Response to All Request and Needs. This is Result of The Constant Optimization of The Following Process
                                    </p>
                                </article>
                            </div>
                            <div className="col-span-2">
                                <div className="flex flex-row gap-6">
                                    <WhatsAppButton />
                                   <DownloadButton fileName='PerforatingGun.pdf' fileUrl='/Path/PerforatingGun.pdf'/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}