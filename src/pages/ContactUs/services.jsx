
import IconWhatsApp from '/icon/iconBlackWhatsapp.svg'
import IconLocation from '/icon/iconLocationBlack.svg'
import IconMail from '/icon/iconMailBlack.svg'
export default function Services() {



    const FirstSection = () => {
        return (
            <section>
                <div className='flex flex-col justify-center'>
                    <span className='text-black text-5xl font-semibold my-8'>Our Offices</span>
                    <div className="lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:place-content-center lg:justify-items-center sm:flex sm:flex-col md:flex md:flex-wrap text-black" >

                        <div className='p-8 flex flex-col gap-y-5 max-w-96'>
                            <div className='flex flex-col items-start'>
                                <span className='text-lg font-semibold'>
                                    East Java & Central of Indonesia
                                </span>
                                <span className='text-base font-normal'>
                                    PT.GAZALI BAWAVI NUSANTARA
                                </span>
                            </div>
                            <div className='flex flex-col gap-4 '>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={IconWhatsApp} />
                                    <span>+62 812179 09325</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={IconMail} />
                                    <span>sales.cepu@gazalibawavigroup.com</span>
                                </div>
                                <div className='flex flex-row items-center gap-2 '>
                                    <img src={IconLocation} />
                                    <span className='text-left text-sm text-justify'>Jl. Letnan Sucipto RT. 010 RW. 002 Kel.Banjarsari Kec.Trucuk Bojonegoro Jawa Timur, Indonesia</span>
                                </div>
                            </div>

                        </div>
                        <div className='p-8 flex flex-col gap-y-5 max-w-96'>
                            <div className='flex flex-col items-start'>
                                <p className='text-lg font-semibold text-left'>
                                    Kalimantan (Borneo) & Eastern Indonesia
                                </p>
                                <p className='text-base font-normal'>
                                    PT. GAZALI BAWAVI BORNEO
                                </p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={IconWhatsApp} />
                                    <span>+62 851 000 35628</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={IconMail} />
                                    <span>Sales.Borneo@gazalibawavigroup.com</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={IconLocation} />
                                    <span className='text-left text-sm'>JL Proklamasi Km 2.5 TPA No.27
                                        Balikpapan East Kalimantan Indonesia</span>
                                </div>
                            </div>
                        </div>
                        <div className='p-8 flex flex-col gap-y-5 max-w-96 '>
                            <div className='flex flex-col items-start'>
                                <p className='text-lg font-semibold'>
                                    Sumatera & Western Indonesia
                                </p>
                                <p className='text-base font-normal'>
                                    PT. GAZALI BAWAVI
                                </p>
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={IconWhatsApp} />
                                    <span>+62 811750618</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={IconMail} />
                                    <span>admin.duri@gazalibawavigroup.com</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={IconLocation} />
                                    <span className='text-left text-sm'>Jl. Utama Pematang Pudu Duri-Riau 28884 INDONESIA</span>
                                </div>
                            </div>

                        </div>

                        <div className='p-8 flex flex-col gap-y-5 max-w-96'>
                            <div className='flex flex-col items-start'>
                                <p className='text-lg font-semibold'>
                                    Jakarta
                                </p>
                                <p className='text-base font-normal'>
                                    PT.GAZALI BAWAVI NUSANTARA
                                </p>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={IconWhatsApp} />
                                    <span>+62 8113359 900</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={IconMail} />
                                    <span>sales.cepu@gazalibawavigroup.com</span>
                                </div>
                                <div className='flex flex-row items-center gap-2'>
                                    <img src={IconLocation} />
                                    <span className='text-left text-sm'>Cipeucang,Cileungsi, Bogor Regency West Java 168200</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section >





        )
    }




    return (
        <div className="flex flex-col  m-12 px-8 gap-y-20">
            <FirstSection />
        </div>


    );
}
