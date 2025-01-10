import WhatsAppButton from '../../../components/ButtonWhatsapp';
import DownloadButton from '../../../components/DownloadPdf';
import { Link, useLocation } from 'react-router-dom';
export default function Hero() {
    const location = useLocation()
    const isPerforatingGun = location.pathname === '/products/anfotruck'
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
                                Anfo Truck
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hero-content w-full flex flex-col lg:flex-row justify-between mt-10">
                    <div className="object-cover">
                        <img src="/images/AnfoTruck_item.svg" alt="Gazalibawavigroup" className='object-cover' />
                    </div>
                    <div className="w-full flex flex-col max-h-fit pl-6">

                        <div className="inline-grid grid-rows-1 gap-4 text-justify lg:max-w-5xl">
                            <div className="col-span-2">
                                <span className="text-5xl font-bold text-black">Rebuild Anfo/MMU Mix Unit</span>
                            </div>
                            <div className="col-span-2">
                                <div className="text-xl text-black">
                                    <span className="text-xl text-black">The GBB PROGRAM allows you to achieve maximum utilization of your original investment and experience the meaning of &quot;QUALITY REBORN&quot; for your ANFO, Pumper and Blend The craftsmen of the GBB REBUILD department take exceptional pride in how their workmanship transforms your aged bulk truck into a unit that will perform on the bench with the reliability as if it were new.
                                        <br />
                                        <br />
                                        Each truck to be remanufactured is thoroughly inspected to establish condition and usability of the existing tanks, augers, housings and assemblies, and then those core components are totally refurbished and prepared to be remounted. Then, to ensure operational performance, all new pumps, motors, valves, wiring, plumbing, hoses and upgraded optional control systems to GBB XBlast are configured and installed.</span>
                                    {/* <ul className="list-disc list-inside text-black pl-5">

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
                                    </ul> */}
                                </div>
                            </div>
                            {/* <div className="col-span-2">
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
                            </div> */}
                            <div className="col-span-2">
                                <div className="flex flex-row gap-6">
                                   <WhatsAppButton />
                                   <DownloadButton fileName='AnfoTruck.pdf' fileUrl='/Path/AnfoTruck.pdf' />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}