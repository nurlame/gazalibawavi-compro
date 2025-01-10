import logoGazali from '../assets/logo_gazaligroup.svg'
import IconWhatsApp from '/icon/ic_baseline-whatsapp.svg'
import IconLocation from '/icon/Vector.svg'
import IconMail from '/icon/ci_mail.svg'
import { useLocation } from 'react-router-dom'
export default function Footer() {
  const location = useLocation()
  const blackList = [
    '/products/perforatinggun', 
    '/products/anfotruck', 
    '/products/xboreportable', 
    '/products/explosivestorage',
    '/products/heavyequipment',
    '/products/drillingtools',
    '/products/fabricationassembly',
    '/products/wirelinetools',
    '/products/miningtools',
  ].includes(location.pathname)
  const handleClick = () => {
    const url = `https://wa.me/+628510005630` // Chat link
    window.open(url, "_blank");
};

  return (
    <div>
      <div className={`max-w-screen max-h-max p-2 ${ !blackList ? 'bg-[url("/public/footer1.svg")]' : 'bg-[url("/public/footer2.svg")]'} bg-cover bg-repeat-x flex`}>
        <div className="hero-content text-left">
          <div className="p-10">
            {!blackList &&  <h1 className="text-2xl font-bold">Let&apos;s start your project with us</h1>}
            {blackList &&  <h1 className="text-2xl font-bold max-w-[500px]">Contact us For more Special Desain Fabricate and Manufactured</h1>}
            <p className="py-6">
              open hours: Monday to Friday 08:00 - 16.30
            </p>
            <button className="btn btn-primary px-20" onClick={handleClick}>Whatsapp</button>
          </div>
        </div>
      </div>
      <footer className="px-10 pt-12 bg-navy bg-cover text-white justify-center flex flex-col bottom-0 w-full max-w-screen-3xl mx-auto text-sm lg:text-base">

        <div className='items-center w-full flex flex-col gap-y-5'>
          <img src={logoGazali} alt="gazalibawavigroup" width={300} height={300} />
          {/* <div className="flex flex-wrap justify-around w-full py-10">
          <button className='text-2xl font-semibold'>
            Home
          </button>
          <button className='text-2xl font-semibold' >
            About Us
          </button>
          <button className='text-2xl font-semibold' >
            Product
          </button>
          <button className='text-2xl font-semibold' >
            Contact us
          </button>
        </div> */}
          <div className='grid grid-cols-1 md:grid-cols-4'>
            <div className='p-8 flex flex-col gap-y-5'>
              <div className='flex flex-col items-start'>
                <p className='text-lg font-semibold text-left'>
                  Kalimantan (Borneo) & Eastern Indonesia
                </p>
                <p className='text-base font-normal'>
                  PT. GAZALI BAWAVI BORNEO
                </p>
              </div>
              <div className='grid grid-rows-3'>
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
            <div className='p-8 flex flex-col gap-y-5'>
              <div className='flex flex-col items-start'>
                <p className='text-lg font-semibold'>
                  Sumatera & Western Indonesia
                </p>
                <p className='text-base font-normal'>
                  PT. GAZALI BAWAVI
                </p>
              </div>

              <div className='grid grid-rows-3'>
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
            <div className='p-8 flex flex-col gap-y-5'>
              <div className='flex flex-col items-start'>
                <p className='text-lg font-semibold'>
                  East Java & Central of Indonesia
                </p>
                <p className='text-base font-normal'>
                  PT.GAZALI BAWAVI NUSANTARA
                </p>
              </div>
              <div className='grid grid-rows-3'>
                <div className='flex flex-row items-center gap-2'>
                  <img src={IconWhatsApp} />
                  <span>+62 812179 09325</span>
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <img src={IconMail} />
                  <span>sales.cepu@gazalibawavigroup.com</span>
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <img src={IconLocation} />
                  <span className='text-left text-sm'>Jl. Letnan SuciptoRT. 010 RW. 002 Kel.Banjarsari Kec.Trucuk Bojonegoro Jawa Timur, Indonesia</span>
                </div>
              </div>

            </div>
            <div className='p-8 flex flex-col gap-y-5'>
              <div className='flex flex-col items-start'>
                <p className='text-lg font-semibold'>
                  Jakarta
                </p>
                <p className='text-base font-normal'>
                  PT.GAZALI BAWAVI NUSANTARA
                </p>
              </div>
              <div className='grid grid-rows-3'>
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
          <div className='border-t p-6 grid grid-cols-1 justify-items-center'>
            <div className='flex items-center gap-1'>
              <p>
                Copyright &copy;
                {' '}
                {new Date().getFullYear().toString()}
                {' '}
              </p>
              <p className='text-[#E8AD2A]'>GazaliBawavi</p>
              <p>. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}